package meowEngine;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.jsoup.Jsoup;
import org.springframework.web.bind.annotation.*;

import meowdbmanager.DBManager;
import meowindexer.Tokenizer;

@RestController
@RequestMapping("/")
public class QueryEngineController {
  private DBManager dbManager;
  private Tokenizer tokenizer;
  private List<ObjectId> docs;
  private String currentQuery;
  private boolean isPhraseMatching, isFirstTime;
  private String[] phrases;
  private int[] operators; // 0: None, 1: AND, 2: OR, 3: NOT
  private List<String> tags, suggestions;
  private int resultCount;
  private final int numOfDocsInPage = 20, windowCharSize = 100;

  public QueryEngineController() {
    dbManager = new DBManager();
    tokenizer = new Tokenizer();
    docs = new ArrayList<>();
    currentQuery = "";
    isPhraseMatching = false;
    isFirstTime = true;
    phrases = new String[3];
    operators = new int[2];
    tags = new ArrayList<>();
    suggestions = new ArrayList<>();
    resultCount = 0;
  }

  @GetMapping("/")
  public String sayHello() {
    return "Hello World!";
  }

  @GetMapping("/suggestions")
  public Document getSuggestions(@RequestParam("query") String query) {
    suggestions = dbManager.getSuggestions(query, 10);
    return new Document("data", suggestions);
  }

  @GetMapping("/search")
  public Document searchQuery(
      @RequestParam("query") String query,
      @RequestParam("page") int page) {

    if (!query.equals(currentQuery))
      isFirstTime = true;

    if (isFirstTime) {
      parse(query);
      dbManager.insertSuggestion(query);
      docs = rankDocs(query.toLowerCase().split("\\s+"));
      isFirstTime = false;
      currentQuery = query;
      resultCount = docs.size();
      tags = tokenizer.tokenizeString(currentQuery);
      suggestions = dbManager.getSuggestions(query, 10);
    }

    int startIndex = (page - 1) * numOfDocsInPage;
    int endIndex = Math.min(startIndex + numOfDocsInPage, docs.size());
    List<ObjectId> subList = docs.subList(startIndex, endIndex);
    return new Document("data", getResults(subList));
  }

  private void parse(String query) {
    isPhraseMatching = false;
    operators[0] = operators[1] = 0;
    phrases[0] = phrases[1] = phrases[2] = null;

    Matcher phraseMatch = Pattern.compile("\"[^\"]+\"").matcher(query);
    Matcher operatorMatch = Pattern.compile("\"\\s*(AND|OR|NOT)\\s*\"").matcher(query);

    int i = 0;
    while (phraseMatch.find()) {
      String phrase = phraseMatch.group().replaceAll("^\"|\"$", "").trim();
      phrases[i++] = phrase;
    }

    i = 0;
    while (operatorMatch.find()) {
      String operator = operatorMatch.group().replaceAll("^\"|\"$", "").trim();
      operators[i++] = operator.equals("AND") ? 1
          : operator.equals("OR") ? 2
              : 3;
    }

    isPhraseMatching = phrases[0] != null;
    operators[0] = operators[1] = 0;
  }

  private Document getResults(List<ObjectId> docs) {

    List<Document> results = dbManager.getDocuments(docs);
    for (Document result : results) {
      String doc = result.getString("content");
      String snippet = isPhraseMatching ? getSnippet(doc, phrases[0])
          : getSnippet(doc, tags);
      result.remove("content");
      result.remove("_id");
      result.append("snippet", snippet);
    }

    System.out.println(results);
    Document data = new Document("results", results)
        .append("count", resultCount)
        .append("tags", tags)
        .append("suggestions", suggestions);

    return data;
  }

  public String getSnippet(String doc, List<String> tokens) {
    String textContent = Jsoup.parse(doc).text();

    for (String token : tokens) {
      token = " " + token + " ";
      if (textContent.contains(token)) {
        int index = textContent.indexOf(token);
        int start = Math.max(0, index - windowCharSize);
        int end = Math.min(textContent.length(), index + windowCharSize);
        return textContent.substring(start, end);
      }
    }

    return "No Snippet Found";
  }

  public String getSnippet(String doc, String phrase) {
    String textContent = Jsoup.parse(doc).text();

    phrase = " " + phrase + " ";
    if (textContent.contains(phrase)) {
      int index = textContent.indexOf(phrase);
      int start = Math.max(0, index - windowCharSize);
      int end = Math.min(textContent.length(), index + windowCharSize);
      return textContent.substring(start, end);
    }

    return "No Snippet Found";
  }

  private List<ObjectId> rankDocs(String[] tokens) {
    return dbManager.getDocIDs(tokens);
  }
}
