import React from "react";

import loginImg from "../assets/login.png"

const SignIn = () => {    
  return(

    <div className="relative w-full h-screen bg-zinc-900/90">
      <img className="absolute w-full h-full object-cover mix-blend-overlay" src={loginImg} alt=""></img>

      <div className="flex justify-center items-center h-full relative">
        <form className="max-w-[400px] w-full mx-auto p-8 bg-zinc-100">
          <h2 className="text-4xl font-bold text-center py-7">LUTFISK</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2" type="text"></input>
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password"></input>
          </div>

          <div className="flex justify-between pb-7">
            <p><input className="mx-1 mr-2" type="checkbox" />Remember Me</p>
            <a href=""><button className="border-none bg-transparent text-black mr-4 hover:text-blue-700">Create an account</button></a>
          </div>

          <button className="border w-full my-5 py-2">Sign In</button>
          <button className="border w-full mb-5 py-2 bg-slate-500 border-none hover:text-gray-700">Back</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;