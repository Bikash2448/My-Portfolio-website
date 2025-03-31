import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl mb-8 md:ml-16 font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-60 h-48 w-60 border border-none mr-28 rounded-[50%]" src="/BikashP.jpg" alt="Bikash Mal" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full-Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  B.Tech final-year student with expertise in JavaScript, Python, and data analysis tools.
                  Proficient in building scalable applications using React.js, Node.js, and MongoDB.
                  Skilled in both frontend and backend development with a passion for delivering impactful solutions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Key Projects
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  - Collaborative Drawing Application: Real-time drawing tool with Socket.IO.<br />
                  - Employee Management System: Full-stack app with role-based task management.<br />
                  - Calories Burnt Prediction: Machine learning model using Python libraries.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Technical Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  JavaScript, Python, React.js, Node.js, Express, MongoDB, Pandas, Matplotlib, AWS S3,
                  Tailwind CSS, and more. Passionate about leveraging technology to solve real-world problems.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
