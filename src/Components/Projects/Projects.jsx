// import React from "react";
// import ProjectCard from "./ProjectCard";
// import empimg from "../../assets/emp.png"
// import calimg from "../../assets/cal.png"
// import drawimg from "../../assets/draw.png"


// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-5">
//         <ProjectCard
//           title="Calories Burnt Prediction"
//           main="A machine learning project using Python libraries like Pandas, Matplotlib, and Scikit-learn to build a Linear Regression model for predicting calories burnt."
//           img={calimg}
//         />
//         <ProjectCard
//           title="Employee Management System"
//           img={empimg}
//           main="A full-stack application built using React, Node.js, Express, and MongoDB to manage employee tasks and roles with role-based access controls."
//         />
//         <ProjectCard
//           title="Collaborative Drawing Application"
//           img={drawimg}
//           main="A real-time collaborative drawing tool built using Node.js, Socket.IO, and HTML5 Canvas with features like color selection and real-time synchronization."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;






import React from "react";
import ProjectCard from "./ProjectCard";
import empimg from "../../assets/emp.png";
import calimg from "../../assets/cal.png";
import drawimg from "../../assets/draw.png";

const Projects = () => {
  // Array of project objects
  const projects = [
    {
      title: "Calories Burnt Prediction",
      main: "A machine learning project using Python libraries like Pandas, Matplotlib, and Scikit-learn to build a Linear Regression model for predicting calories burnt.",
      img: calimg,
      demoLink:"https://calories-burnt-prediction-fc1a.onrender.com",
      sourceLink:"https://github.com/Bikash2448/Calories_Burnt_Prediction"
    },
    {
      title: "Employee Management System",
      main: "A full-stack application built using React, Node.js, Express, and MongoDB to manage employee tasks and roles with role-based access controls.",
      img: empimg,
      demoLink: "https://employee-managment-fronted.onrender.com",
      sourceLink: "https://github.com/Bikash2448/Employee_Managment_Fronted",
    },
    {
      title: "Collaborative Drawing Application",
      main: "A real-time collaborative drawing tool built using Node.js, Socket.IO, and HTML5 Canvas with features like color selection and real-time synchronization.",
      img: drawimg,
      demoLink:"https://dashboard.render.com/web/srv-cum5kqtumphs738d69ug",
      sourceLink:"https://github.com/Bikash2448/Collaborating-Drawing-Board"
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} 
            title={project.title}
            main={project.main}
            img={project.img}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
