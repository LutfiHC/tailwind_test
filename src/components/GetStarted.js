import React from "react";

import getStartedImg from "../assets/get_started.png"

const GetStarted = () => {
  return(
    <div className="relative w-full h-screen bg-zinc-900/70">
      <img className="absolute w-full h-full object-cover mix-blend-overlay" src={getStartedImg} alt=""></img>
      <div className="flex justify-center items-center h-full relative">
        <form className="max-w-[800px] w-full mx-auto p-8 bg-zinc-100">
          <h2 className="text-4xl font-bold text-center py-7">LUTFISK</h2>
          <div className="flex justify-between py-2 px-4">
            <p><input className="mx-1 mr-2" type="checkbox" />Option 1</p>
            <p><input className="mx-1 mr-2" type="checkbox" />Option 2</p>
          </div>

          <div className="flex justify-end pt-56 px-4">
            <button className="border-none bg-transparent text-zinc-600 mr-4 hover:text-zinc-800 hover:bg-transparent">Skip</button>
          <button className="border my-5 py-2 px-5 hover:bg-indigo-700 hover:text-white">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GetStarted;