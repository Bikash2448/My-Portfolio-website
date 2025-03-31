import React from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main,img,demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col justify-between w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 h-48" src={img} alt="" />
      <h3 className="px-4 pt-2 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 pt-6 text-sm  text-gray-400 md:text-md leading-tight py-2">{main}</p>
      <div onClick={() => window.open(demoLink, "_blank")} className="mt-2 p-2 md:p-4 flex justify-between gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button onClick={() => window.open(sourceLink, "_blank")} className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
