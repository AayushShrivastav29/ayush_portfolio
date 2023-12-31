import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20" id="services">
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Work Experience
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            What I Learned
          </h4>

          

          <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
            {serviceData.map((el) => (
              <motion.div
                key={el.name} // Add a unique key for each element when mapping
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className={
                  theme.state.darkMode
                    ? "md:w-96 p-4 bg-white rounded-lg flex items-center flex-col mt-8"
                    : "md:w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                }
                
              >
                <img src={el.img} alt="" />
                <h4 className="text-xl font-bold mt-4">{el.name}</h4>
                <p className="text-lg mt-2 text-justify">{el.desc}</p>
                {/* Button with Link */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://www.sdgrait.tech/" // Replace with your desired URL
              target="_blank" // Open link in a new tab/window
              rel="noopener noreferrer" // Recommended for security reasons
            >
              <button
                className={
                  theme.state.darkMode
                    ? "px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
                    : "px-4 py-2 bg-white text-blue-500 font-semibold border border-blue-500 rounded-md"
                }
              >
                Vist Project website
              </button>
            </a>
          </div>
              </motion.div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
