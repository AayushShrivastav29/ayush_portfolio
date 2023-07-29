import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {/* First project card */}
      <Card
        title="AgreeBlock: Providing a consensus-based transparent ecosystem for agricultural product supply chains"
        image="https://media.licdn.com/dms/image/C5112AQE6mr9_EgaYVQ/article-cover_image-shrink_600_2000/0/1579338959239?e=2147483647&v=beta&t=cEVs3KwS12g3tbykjGR6bwBH1uO3TG0jUWM4oxt53Bc"
        description="Created a revolutionized agricultural supply chains through cutting-edge blockchain technology. As a key contributor, I actively participated in the development of a decentralized application (dapp) on a private Ethereum network, utilizing Truffle and Solidity. Working closely with a talented group, we mastered smart contract implementation and harnessed HTML, CSS, JavaScript, Bootstrap, and React for the frontend. 'AgreeBlock' taught us the transformative power of transparency, trust, and fair compensation for farmers, promoting sustainable agriculture. Join our journey to create a better future for the industry! 🌱🚀."
        link="hehttps://docs.google.com/document/d/1_ojlEWRvjjn3kW9GqpMSKnOst-tSQSn6/edit?usp=sharing&ouid=104381965431660848400&rtpof=true&sd=true"
        
      />

      {/* Second project card */}
      <Card
        title="
      Interperson Distance Analyser"
        image="https://serokell.io/files/yc/yctimg60.deviator-1_(1).jpg"
        description="Created a distance monitoring application and categorized whether the people are within safe distance limits on live video input provided to the system. Used YOLOV3 for object recognition and centroid tracking methods for mutual distance analysis."
        link="https://drive.google.com/drive/u/1/folders/10llyzaNy7Llu022-pw1q6Tdc2WuE2m-P"
        
      />

          
        </div>
        
        <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
