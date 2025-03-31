import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import myimg from "../../assets/BikashP.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl mt-6 tracking-tight pt-2">
          A passionate full-stack developer and data enthusiast. 
          I specialize in building scalable applications, crafting engaging front-end interfaces, and analyzing data with Python.
        </p>
        <button onClick={()=>navigate("/newpage")} className="mt-8 md:md-10 md:ml-48 ml-14 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img src={avatarImg} />
      </div>
    </div>
  );
};

export default Home;
