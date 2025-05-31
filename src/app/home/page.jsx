import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import IntroComp from "@/components/IntroComp";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <IntroComp/>
      <HeroSection/>
      <GetInTouch/>
      <Footer/>
    </React.Fragment>
  );
}
