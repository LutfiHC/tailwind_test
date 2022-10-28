import React from "react";
import { useNavigate } from "react-router-dom";

import signupImg from "../assets/signup.png"

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img className="absolute w-full h-full object-cover mix-blend-overlay" src={signupImg} alt=""></img>
      <div className="flex justify-center items-center h-full relative">
        <form className="max-w-[400px] w-full mx-auto p-8 bg-zinc-100">
          <h2 className="text-4xl font-bold text-center py-7">LUTFISK</h2>
          <div className="flex flex-col py-2">
            <label>First Name</label>
            <input className="border p-2" type="text"></input>
          </div>

          <div className="flex flex-col py-2">
            <label>Last Name</label>
            <input className="border p-2" type="text"></input>
          </div>

          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type="email"></input>
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password"></input>
          </div>

          <div className="flex justify-between pb-7">
            <p><input className="mx-1 mr-2" type="checkbox" />Sign me up for newsletters</p>
          </div>

          <button className="border w-full my-5 py-2 hover:bg-indigo-700 hover:text-white">Sign Up</button>
          <button className="border w-full mb-5 py-2 bg-slate-500 border-none hover:text-white hover:bg-slate-600" onClick={(event) => (navigate("/signin"), event.preventDefault())}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;