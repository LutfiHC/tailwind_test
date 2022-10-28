import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/outline";
import getStartedImg from "../assets/get_started.png"

const GetStarted = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false) 
  const [questionaire, setQuestionaire] = useState(1);
  const handleNavigate = () =>{
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
      navigate("/")
    }, 3500)
    
  }

  return(
    <div className="relative w-full h-screen bg-zinc-900/50">
      <img className="absolute w-full h-full object-cover mix-blend-overlay" src={getStartedImg} alt=""></img>
      <div className={questionaire === 1 ? "flex justify-center items-center h-full relative" : "hidden"}>
        <form className="lg:max-w-[1024px] w-full mx-auto p-8 bg-zinc-50 sm:max-w-[640px]">
          <h2 className="text-4xl font-bold text-center pt-7 pb-6">LUTFISK</h2>
          <div className="w-full bg-gray-100 rounded-full h-4 dark:bg-gray-200">
            <div className="bg-indigo-600 h-4 rounded-full w-6"></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-left pt-12">Let's get started. Which of these best describe you?</h1>
            <h2 className="text-xl text-left pb-4 text-gray-600">We'll help you get set up based on your business needs.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-2 gap-y-2 pt-8">
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input name="radio_check" className="mx-1 mr-2" type="radio" />I'm a student</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input name="radio_check" className="mx-1 mr-2" type="radio" />I'm a teacher</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input name="radio_check" className="mx-1 mr-2" type="radio" />I'm a professional</p>
          </div>
          <div className="flex justify-end pt-20 px-4">
            <button className="border-none bg-transparent text-zinc-600 mr-4 hover:text-zinc-800 hover:bg-transparent" onClick={(event) => (setQuestionaire(2), event.preventDefault())}>Skip</button>
            <button className="border my-5 py-2 px-5 hover:bg-indigo-700 hover:text-white" onClick={(event) => (setQuestionaire(2), event.preventDefault())}>Next</button>
          </div>
        </form>
      </div>

      <div className={questionaire === 2 ? "flex justify-center items-center h-full relative" : "hidden"}>
        <form className="lg:max-w-[1024px] w-full mx-auto p-8 bg-zinc-50 sm:max-w-[640px]">
          <h2 className="text-4xl font-bold text-center pt-7 pb-6">LUTFISK</h2>

          <div className="w-full bg-gray-100 rounded-full h-4 dark:bg-gray-200">
            <div className="bg-indigo-600 h-4 rounded-full w-1/3"></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-left pt-12">What data services are you most interested in?</h1>
            <h2 className="text-xl text-left pb-4 text-gray-600">Select all that apply.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-2 gap-y-2 pt-8">
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input className="mx-1 mr-2" type="radio" />App Security</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input className="mx-1 mr-2" type="radio" />Dashboard</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input className="mx-1 mr-2" type="radio" />Cloud Data</p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative"><input className="mx-1 mr-2" type="radio" />Api</p>
          </div>
          <div className="flex justify-between pt-20 px-4">
            <button className="border-none bg-transparent text-zinc-600 mr-4 hover:text-zinc-800 hover:bg-transparent flex items-center" onClick={(event) => (setQuestionaire(1), event.preventDefault())}><ChevronLeftIcon style={{ width: "1.2rem" }} />Back</button>
            <div>
              <button className="border-none bg-transparent text-zinc-600 mr-4 hover:text-zinc-800 hover:bg-transparent" onClick={(event) => (setQuestionaire(3), event.preventDefault())}>Skip</button>
              <button className="border my-5 py-2 px-5 hover:bg-indigo-700 hover:text-white" onClick={(event) => (setQuestionaire(3), event.preventDefault())}>Next</button>
            </div>
          </div>
        </form>
      </div>

      { !isLoading ? <div className={questionaire === 3 ? "flex justify-center items-center h-full relative" : "hidden"}>
        <form className="lg:max-w-[1024px] w-full mx-auto p-8 bg-zinc-50 sm:max-w-[640px]">
          <h2 className="text-4xl font-bold text-center pt-7 pb-6">LUTFISK</h2>
          <div className="w-full bg-gray-100 rounded-full h-4 dark:bg-gray-200">
            <div className="bg-indigo-600 h-4 rounded-full w-2/3"></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-left pt-12">Which package are you interested in?</h1>
            <h2 className="text-xl text-left pb-4 text-gray-600">This can be exchanged at a later time.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-2 gap-y-2 pt-8">
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative">
              <input name="radio_check" className="mx-1 mr-2 mb-6" type="radio" /><b className="text-xl">Standard ($49/month)</b><p className="ml-2">Lorem ipsum dolor</p><p className="ml-2">Lorem ipsum dolor sit amet</p></p>
            <p className="w-full bg-white text-slate-900 py-12 px-4 rounded-xl shadow-2xl relative">
              <input name="radio_check" className="mx-1 mr-2 mb-6" type="radio" /><b className="text-xl">Premium ($89/month)</b><p className="ml-2">Lorem ipsum dolor</p><p className="ml-2">Lorem ipsum dolor sit amet</p><p className="ml-2">Lorem ipsum dolor sit</p><p className="ml-2">Lorem ipsum dolor sit</p><p className="ml-2">Lorem ipsum dolor</p></p>
          </div>
          <div className="flex justify-between pt-20 px-4">
            <button className="border-none bg-transparent text-zinc-600 mr-4 hover:text-zinc-800 hover:bg-transparent flex items-center" onClick={(event) => (setQuestionaire(2), event.preventDefault())}><ChevronLeftIcon style={{ width: "1.2rem" }} />Back</button>
            <div>
              <button className="border my-5 py-2 px-5 hover:bg-indigo-700 hover:text-white" onClick={(event) => (handleNavigate(), event.preventDefault())}>Finish</button>
            </div> 
          </div>
        </form>
      </div> : <div className="flex justify-center items-center h-full relative"><iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="480" height="480" frameBorder="0" display="inline-block" class="giphy-embed" allowFullScreen></iframe></div> }
    </div>
  )
}

export default GetStarted;