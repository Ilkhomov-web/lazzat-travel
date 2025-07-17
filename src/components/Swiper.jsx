import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/heroSwiper.css";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const slides = [
  {
    id: 1,
    bg: "/agypt.jpg",
    key: "hero.slide1",
  },
  {
    id: 2,
    bg: "/dubai.jpg",
    key: "hero.slide2",
  },
  {
    id: 3,
    bg: "/gruziya.jpg",
    key: "hero.slide3",
  },
];

const HeroSwiper = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={false}
      loop
      className="hero-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="slide"
            style={{
              width: "100%",
              height: "800px",
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="overlay">
              <h1>{t(`${slide.key}.title`)}</h1>
              <p>{t(`${slide.key}.desc`)}</p>
              <Button
                sx={{
                  background: "#0056b8",
                  color: "white",
                  padding: "15px 20px",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#003f8a",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    color: "white",
                  },
                }}
              >
                {t(`${slide.key}.button`)}
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
