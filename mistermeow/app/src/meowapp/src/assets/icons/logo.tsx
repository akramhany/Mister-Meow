export interface LogoProps {
  className?: string;
  size?: string;
}

export default function Logo({ className, size }: LogoProps) {
  return (
    <svg
      className={className}
      width={
        size === "sm"
          ? "74"
          : size === "md"
          ? "111"
          : size === "lg"
          ? "148"
          : "148"
      }
      height={
        size === "sm"
          ? "87"
          : size === "md"
          ? "130"
          : size === "lg"
          ? "174"
          : "174"
      }
      viewBox="0 0 148 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="74.0699"
        cy="95.5515"
        rx="71.6637"
        ry="57.3997"
        fill="white"
      />
      <path
        d="M26.0669 1.07257C22.5123 5.12604 15.6526 24.7698 8.48109 51.4603C7.23387 55.8879 5.98666 60.8768 5.67485 62.4358C5.30068 64.0572 4.73944 66.1151 4.36527 67.0505C2.99333 70.6051 0 87.692 0 91.8078C0 100.414 3.80402 112.886 8.60582 120.057C11.4121 124.298 15.0914 128.663 18.7083 132.093C24.1961 137.331 23.6972 137.394 28.1872 130.971C30.3698 127.852 33.176 123.861 34.4233 122.053C35.6705 120.244 37.3542 117.937 38.0402 116.939C38.7885 115.879 40.4099 113.634 41.6571 111.888C42.9044 110.142 45.5235 106.525 47.3944 103.906C50.5748 99.4159 57.4968 90.1241 60.6772 86.0082C66.851 77.9013 72.9624 71.104 74.0225 71.104C75.7062 71.104 91.2965 90.1241 100.401 103.282C105.515 110.641 119.546 130.472 120.17 131.282C120.481 131.594 121.354 132.966 122.165 134.213C122.914 135.523 123.787 136.583 124.098 136.583C125.159 136.583 133.577 128.164 136.758 123.924C141.123 118.124 143.804 112.761 146.049 105.465C147.546 100.351 147.796 98.5428 147.796 91.7455C147.796 83.8256 147.733 83.3891 143.992 68.2977C138.753 46.9079 130.459 18.4089 127.902 12.7964C124.285 5.00131 122.664 1.82091 121.853 1.01021C119.484 -1.42186 115.43 1.01021 111.065 7.4334C108.321 11.4245 101.15 25.1439 99.4658 29.5092C98.8422 31.1306 98.0938 32.6272 97.8444 32.8143C97.5326 32.939 95.7241 32.6896 93.7286 32.1907C82.3789 29.2597 62.7975 29.5715 51.9467 32.752C50.6995 33.1261 50.2006 32.3154 45.96 23.5849C40.9088 13.2953 35.9823 5.25076 32.6772 2.008C30.3698 -0.237 27.5636 -0.673538 26.0669 1.07257ZM37.0424 50.899C38.2273 52.0839 38.2896 52.5204 37.2919 53.5182C35.7328 55.0772 30.5569 54.1418 30.5569 52.3333C30.5569 51.2732 32.6772 49.9012 34.2985 49.9012C35.2963 49.9012 36.5435 50.3378 37.0424 50.899ZM116.49 50.6496C117.738 51.8968 117.363 53.5805 115.742 54.0171C113.497 54.5783 111.501 54.0794 110.753 52.8322C110.192 51.8968 110.317 51.5226 111.252 50.7743C112.749 49.7141 115.493 49.6518 116.49 50.6496ZM132.081 70.1062C134.513 72.3512 134.388 73.536 131.457 77.9013C124.535 88.0662 115.368 91.1218 105.016 86.6942C101.025 84.9481 96.6595 81.8301 96.6595 80.6452C96.6595 79.6474 100.214 72.7877 102.085 70.1686C103.332 68.4848 104.33 68.1106 103.769 69.4826C103.582 69.9815 103.706 71.9147 104.08 73.8479C106.263 85.7588 118.112 88.6898 123.911 78.712C125.47 76.0928 125.657 75.1574 125.657 70.3556V64.9302L127.84 66.5516C129.025 67.4247 130.958 69.0461 132.081 70.1062ZM22.2629 69.9815C22.2005 76.2799 24.4455 80.8946 28.6861 83.5138C32.6148 85.8835 37.6037 84.8857 40.9088 81.2064C42.6549 79.2109 44.2763 74.3467 44.2763 70.8545L44.3387 68.2977L45.5859 69.7944C47.0825 71.6029 50.8242 78.3378 51.3855 80.271C52.2585 83.0149 40.9712 88.565 34.2985 88.7521C27.8754 88.8769 21.5769 85.0105 16.8998 78.026C13.2829 72.663 13.2829 72.8501 17.5858 68.9213C19.7061 67.0505 21.5769 65.4915 21.8263 65.4915C22.0758 65.4915 22.2629 67.5494 22.2629 69.9815Z"
        fill="black"
      />
      <path
        d="M70.1554 86.5073C68.7211 86.8815 67.3491 87.8792 67.3491 88.5652C67.3491 88.7523 68.4716 90.1866 69.9059 91.7456C72.7745 94.8013 72.7745 96.3603 70.0306 98.9171C68.1598 100.663 64.5429 100.913 62.6097 99.4784C59.3669 97.0463 59.1798 100.04 62.4226 103.033C65.1665 105.652 69.0329 105.278 72.338 102.16L73.897 100.663L76.5785 102.721C80.1331 105.465 82.7523 105.465 85.7456 102.846C87.1175 101.599 87.9282 100.351 87.9282 99.416V97.857L86.0574 99.2913C82.3157 102.035 77.3269 100.289 76.3915 95.9862C76.0796 94.4895 76.3915 93.8035 78.1999 91.8703C79.4471 90.5608 80.4449 89.0017 80.4449 88.4405C80.4449 86.6944 74.2712 85.5095 70.1554 86.5073Z"
        fill="black"
      />
      <path
        d="M48.3923 136.147C45.3366 139.203 43.2163 150.926 44.2765 159.158C45.4613 168.637 47.9558 174 51.2609 174C53.8177 174 57.9335 171.63 63.7955 166.766C71.84 160.156 73.1496 159.47 75.8935 160.592C77.702 161.341 81.4436 164.209 85.6842 167.951C88.6151 170.57 93.4169 173.314 95.5372 173.688C97.5951 174.062 98.094 173.875 99.653 172.316C105.889 166.08 105.266 139.826 98.8423 135.586C96.4103 134.027 93.4793 134.962 88.1163 139.078C85.4347 141.073 82.4414 143.505 81.3813 144.379C80.3835 145.314 78.2632 146.748 76.8289 147.621C74.2721 149.18 74.0227 149.18 72.1518 148.245C71.0293 147.746 67.6618 145.189 64.5438 142.57C58.7442 137.581 53.8177 134.713 51.3233 134.713C50.5126 134.713 49.203 135.399 48.3923 136.147Z"
        fill="black"
        className="fill-tie"
      />
    </svg>
  );
}