// import React from "react";
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// import { SiRedis } from "react-icons/si";
// import { FaGoogle } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
// const Experience = () => {
//   return (
//     <div id="Experience" className="p-10 md:p-24">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
//       <div className="flex flex-wrap items-center justify-around">
//         <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaHtml5 color="#E34F26" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaCss3 color="#1572B6" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaReact color="#61DAFB" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaJs color="#F7DF1E" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaFigma color="#F24E1E" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiMongodb color="#47A248" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiRedis color="#FF4438" size={50} />
//           </span>
//         </div>
//         <div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
//             <FaGoogle color="#4285F4" size={50} />
//             <span className="text-white">
//               <h2 className="leading-tight">Software Engineer , Google</h2>
//               <p className="text-sm leading-tight font-thin">
//                 Sept 2023 - Present
//               </p>
//               <ul className="text-sm p-2">
//                 <li>- Work as software developer</li>
//                 <li>- Senior SDE-developer</li>
//               </ul>
//             </span>
//           </div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
//             <RiNetflixFill color="#E50914" size={50} />
//             <span className="text-white">
//               <h2 className="leading-tight">Software Engineer, Google</h2>
//               <p className="text-sm leading-tight font-thin">
//                 Sept 2023 - Present
//               </p>
//               <ul className="text-sm p-2">
//                 <li>- Work as software developer.</li>
//                 <li>- Senior SDE-developer</li>
//               </ul>
//             </span>
//           </div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
//             <FaAmazon color="#FF9900" size={50} />
//             <span className="text-white">
//               <h2 className="leading-tight">Software Engineer, Google</h2>
//               <p className="text-sm leading-tight font-thin">
//                 Sept 2023 - Present
//               </p>
//               <ul className="text-sm p-2">
//                 <li>- Work as software developer.</li>
//                 <li>- Senior SDE-developer</li>
//               </ul>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;




import React from "react";
import { FaPython, FaHtml5,  FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiAmazonaws } from "react-icons/si";
// import { IoLogoSocketio } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section with Icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            {/* <IoLogoSocketio color="#010101" size={50} /> */}
            <FaDatabase color="#4DB33D"  size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAmazonaws color="#FF9900" size={50} />
          </span>
        </div>
        {/* Experience/Project Section */}
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Full-Stack Developer Certification</h2>
              <p className="text-sm leading-tight font-thin">
                PW Skills | Completed 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Mastered MERN stack development with real-world projects.</li>
                <li>- Developed full-stack applications with robust APIs and responsive UIs.</li>
                <li>- Focused on problem-solving and optimized app performance.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Calories Burnt Prediction</h2>
              <p className="text-sm leading-tight font-thin">
                Machine Learning Project | 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Built a predictive model using Linear Regression.</li>
                <li>- Utilized Python libraries such as Pandas, Matplotlib, and Scikit-learn.</li>
                <li>- Focused on data visualization, feature engineering, and performance evaluation.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Employee Management System</h2>
              <p className="text-sm leading-tight font-thin">
                Full-Stack Development Project | 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Designed a full-stack application for task and employee management.</li>
                <li>- Integrated MongoDB for efficient data storage and React.js for a dynamic UI.</li>
                <li>- Implemented role-based access for admins and employees.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
