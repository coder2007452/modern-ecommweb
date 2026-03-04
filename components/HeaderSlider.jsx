import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Clean Campus. Green Future. Powered by TRASHEE.",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Clean Habits Start Young!",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Smart Waste Management – Clean Office, Smarter Future!",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_macbook_image,
    },
    {
      id: 4,
      title: "Recycle Today – Build a Greener Tomorrow!",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_main_image,
    },
    {
      id: 5,
      title: "Recycling Made Intelligent — Empowering Every Campus.",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_clean_image,
    },
    {
      id: 6,
      title: "Modern Design. Intelligent Disposal.",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_plas_image,
    },
    {
      id: 7,
      title: "Scan. Dispose. Earn. Sustainability Simplified.",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_lead_image,
    },
    {
      id: 8,
      title: "Smarter Streets Begin Here.",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_transparent_image,
    },
    {
      id: 9,
      title: "Keep India Clean — The Smart Way.",
      offer: "",
      buttonText1: "Explore Products",
      buttonText2: "Download App",
      imgSrc: assets.header_india_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-orange-600 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                  <a href="/all-products">{slide.buttonText1}</a>
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  <a href="/all-products">{slide.buttonText2}</a>
                  <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="arrow_icon" />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="w-62 md:w-[300px] lg:w-[450px]"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
