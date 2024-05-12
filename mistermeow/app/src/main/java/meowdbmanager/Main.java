package meowdbmanager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import meowindexer.Tokenizer;
import meowindexer.Tokenizer.Token;
import org.bson.Document;

public class Main {
  public static void main(String[] args) {
    // Create a new instance of DBManager
    DBManager dbManager = new DBManager();

    // Test inserting a document
    String docId = dbManager.insertDocument("http://example.com", "Title", "example.com",
        "Content", "asdflkasd", "asdfklsdflceww", 1, new ArrayList<Integer>());
    System.out.println("Inserted document ID: " + docId);

    // Test getting a document
    Document document = dbManager.getDocument(docId);
    System.out.println("Retrieved document: ");
    System.out.println(document.toJson());

    // Test updating the document's indexed status
    List<Document> docs = dbManager.getDocumentsNotIndexed(5);
    int i = 1;
    for (Document doc : docs) {
      System.out.println("document " + i + ": ");
      System.out.println(doc.toJson());
      i++;
    }

    // Test inserting inverted index
    HashMap<String, Token> tokens = new HashMap<>();
    Tokenizer Tokenizer = new Tokenizer();
    Token token = Tokenizer.new Token("example");
    token.count = 1;
    token.position = "h1";
    tokens.put("example", token);
    dbManager.insertInverted(docId, tokens);

    // Test getting the inverted index
    Document invertedIndex = dbManager.getInvertedIndex("example");
    System.out.println("Retrieved inverted index: " + invertedIndex.toJson());
  }
}
