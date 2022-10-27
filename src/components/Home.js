import React from 'react';

import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Support from "./Support";
import AllInOne from "./AllInOne";
import Pricing from "./Pricing";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer /> 
    </>
  );
}

export default Home;
