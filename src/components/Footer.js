import React from "react";
import { Link } from "react-scroll";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return(
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-5">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Marketing</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Analytics</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Commerce</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Data</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Cloud</button></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Pricing</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Documentation</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Guides</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">API Status</button></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">About</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Blogs</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Jobs</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Press</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Partners</button></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Claims</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Privacy</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Terms</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Policies</button></li>
            <li className="py-1"><button className="border-none bg-slate-900 hover:text-gray-300">Conditions</button></li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">The latest news, articles, and resources - sent to your inbox weekly.</p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4 text-black" type="email" />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Lutfisk, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://facebook.com/fluffside" target="_blank"><button className="border-none bg-slate-900 text-gray-400"><FaFacebook className="hover:text-[#4267B2]" /></button></a>
          <a href="https://instagram.com/fluffside" target="_blank"><button className="border-none bg-slate-900 text-gray-400"><FaInstagram className="hover:bg-gradient-to-tr from-[#FCAF45] via-[#C13584] to-[#5B51D8] hover:text-white" /></button></a>
          <a href="https://twitter.com/fluffside" target="_blank"><button className="border-none bg-slate-900 text-gray-400"><FaTwitter className="hover:text-[#1DA1F2]" /></button></a>
          <a href="https://twitch.tv/fluffside" target="_blank"><button className="border-none bg-slate-900 text-gray-400"><FaTwitch className="hover:text-[#9146FF]" /></button></a>
          <a href="https://github.com/LutfiHC" target="_blank"><button className="border-none bg-slate-900 text-gray-400"><FaGithub className="hover:text-white" /></button></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;