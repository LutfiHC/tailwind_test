import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

import bgImg from "../assets/lutfi_icon.png";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-5">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech Brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 hover:bg-indigo-700 hover:text-white" onClick={(event) => (navigate("/getstarted"), event.preventDefault())}>Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/"></img>
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="text-2xl font-bold mb-5">Data Services</p>
          <div className="flex justify-between flex-wrap px-5">
            <p className="flex px-4 py-2 text-gray-600">
              <CloudUploadIcon className="h-6 text-indigo-500 mx-2" /> App
              Security
            </p>
            <p className="flex px-4 py-2 text-gray-600">
              <DatabaseIcon className="h-6 text-indigo-500 mx-2" /> Dashboard
            </p>
            <p className="flex px-4 py-2 text-gray-600">
              <ServerIcon className="h-6 text-indigo-500 mx-2" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-gray-600">
              <PaperAirplaneIcon className="h-6 text-indigo-500 mx-2" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
