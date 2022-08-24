import React from "react";
import { HashScroll } from "react-hash-scroll";

function Hero() {
  return (
    <HashScroll hash="#home">
      <div className="hero_container">
        <div className="hero_text">
          <div>
            <h1>Welcome to ScrappyConsult</h1>
          </div>

          <h2 className="hero_sub_text">
            Your Instant <span>Passport</span> ,
            <span>Birth Certificate & Business Registration </span>
            Center.
          </h2>
        </div>
      </div>
    </HashScroll>
  );
}

export default Hero;