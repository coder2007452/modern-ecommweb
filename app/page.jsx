'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrasheeApps from "@/components/TrasheeApps";
import TrasheeCurve from "@/components/TrasheeCurve";
import PartnerWithUs from "@/components/PartnerWithUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WhoWeAre from "@/components/WhoWeAre";
import EarnWhileYouDispose from "@/components/EarnWhileYouDispose";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32 ">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <TrasheeCurve />
        <EarnWhileYouDispose/>
        <TrasheeApps />
        <WhoWeAre/>
        <Testimonials />
        <PartnerWithUs />
        <FAQ />
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
