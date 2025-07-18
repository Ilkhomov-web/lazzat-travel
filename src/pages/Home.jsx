import React from "react";
import Navbar from "../components/Navbar";
import HeroSwiper from "../components/Swiper";
import AboutUs from "../components/AboutUs";
import DirectionsTour from "../components/DirectionsTour";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSwiper />
      <AboutUs />
      <DirectionsTour />
    </>
  );
}

export default Home;
