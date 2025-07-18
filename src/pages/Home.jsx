import React from "react";
import Navbar from "../components/Navbar";
import HeroSwiper from "../components/Swiper";
import AboutUs from "../components/AboutUs";
import DirectionsTour from "../components/DirectionsTour";
import VideoContent from "../components/VideoContent";
import TourInfo from "../components/TourInfo";
import TourGallary from "../components/TourGallary";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSwiper id="home" />
      <AboutUs id="about" />
      <DirectionsTour id="tour" />
      <VideoContent />
      <TourInfo />
      <TourGallary />
      <Footer id="contact" />
    </>
  );
}

export default Home;
