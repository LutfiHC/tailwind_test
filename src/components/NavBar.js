import React, {useState} from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">LUTFISK</h1>
          <ul className="hidden md:flex">
            <li><button className="text-black border-none bg-zinc-100 hover:text-gray-600"><Link to="home" smooth={true} duration={500}>Home</Link></button></li>
            <li><button className="text-black border-none bg-zinc-100 hover:text-gray-600"><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></button></li>
            <li><button className="text-black border-none bg-zinc-100 hover:text-gray-600"><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></button></li>
            <li><button className="text-black border-none bg-zinc-100 hover:text-gray-600"><Link to="platform" smooth={true} offset={-100} duration={500}>Platforms</Link></button></li>
            <li><button className="text-black border-none bg-zinc-100 hover:text-gray-600"><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></button></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
        <a href="/signin" className="pt-3"><button className="border-none bg-transparent text-black mr-4">Sign In</button></a>
        <a href="/signup"><button className="px-8 py-3">Sign Up</button></a>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon style={{ width: "2rem" }} /> : <XIcon style={{ width: "2rem" }} />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="platform" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
        <div className="flex flex-col my-4">
          <a href="/signin"><button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button></a>
          <a href="/signup"><button className="px-8 py-3">Sign Up</button></a>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
