import React from "react";

import getStartedImg from "../assets/get_started.png"

const GetStarted = () => {
  return(
    <div className="relative w-full h-screen bg-zinc-900/50">
      <img className="absolute w-full h-full object-cover mix-blend-overlay" src={getStartedImg} alt=""></img>
      <div className="flex justify-center items-center h-full relative">
        <form className="lg:max-w-[1024px] w-full mx-auto p-8 bg-zinc-50 sm:max-w-[640px]">
          <h2 className="text-4xl font-bold text-center pt-7 pb-6">LUTFISK</h2>

          <div className="w-full bg-gray-100 rounded-full h-4 dark:bg-gray-200">
            <div className="bg-indigo-600 h-4 rounded-full w-6"></div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-left pt-12">Let's get started. Which of these best describe you?</h1>
            <h2 className="text-xl text-left pb-4">We'll help you get set up based on your business needs.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-2 gap-y-2 pt-8">
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input name="radio_check" className="mx-1 mr-2" type="radio" />I'm a student</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input name="radio_check" className="mx-1 mr-2" type="radio" />I'm a teacher</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input name="radio_check" className="mx-1 mr-2" type="radio" />I'm a professional</p>
          </div>

          <div className="flex justify-end pt-20 px-4">
            <button className="border-none bg-transparent text-zinc-600 mr-4 hover:text-zinc-800 hover:bg-transparent">Skip</button>
          <button className="border my-5 py-2 px-5 hover:bg-indigo-700 hover:text-white">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GetStarted;