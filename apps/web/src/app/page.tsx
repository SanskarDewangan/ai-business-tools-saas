"use client";
import Features from "@/components/HomepageComponent/Features";
import Hero from "@/components/HomepageComponent/Hero";
import Pricing from "@/components/HomepageComponent/Pricing";
import Header from "@/components/Header";
import Footer from "@/components/HomepageComponent/Footer";
import Tools from "@/components/HomepageComponent/Tools";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Tools />
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;
