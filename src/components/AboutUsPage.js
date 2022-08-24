import React from "react";
import { HashScroll } from "react-hash-scroll";

import HomePic from "../assets/images/Ghana_Biometric_Passport.jpg";

export default function AboutUsPage() {
  return (
    <HashScroll hash="#about">
      <div className="container my-4 d-flex flex-column">
        <h1 className="home_header">About Us</h1>
        <div className="home_services">
          <div className="about_us">
            <p>
              <b>ScrappyConsult</b> offers assistant to out client acquire Passport,
              Birth Certificate, Business Registration and Tax Identification
              Number (TIN) Registration. ScrappyConsult makes the process of
              acquiring these documents easy.
              <br />
              <br />
              Our Team of professionals will guide you through the process of
              registration, by making sure the right information is provided.
              <br />
              <br />
              For the past three years, our clients have trusted use as the best
              <b> Passport</b>, <b> Business</b>,<b> Birth Certificate</b> and
              <b> TIN</b> registration consultant in Ghana.
            </p>
          </div>
          <div className="home_services_image">
            <img
              src={HomePic}
              style={{ borderRadius: 6, marginLeft: 30 }}
              height={400}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </HashScroll>
  );
}
