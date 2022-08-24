import React from "react";
import Hero from "../components/Hero";
import HomePage from "../components/SerivicesPage";
import AboutUsPage from "../components/AboutUsPage";
import ContactUsPage from "../components/ContactUsPage";

function Home() {
  return (
    <div className="main_container">
      <Hero />
      <HomePage />
      <AboutUsPage />
      <ContactUsPage />
    </div>
  );
}

export default Home;
