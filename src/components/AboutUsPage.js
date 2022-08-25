import React from "react";
import { HashScroll } from "react-hash-scroll";
import Passport from "../assets/images/Ghana_Biometric_Passport.jpg";
import HomePic from "../assets/images/paul.jpeg";

export default function AboutUsPage() {
  return (
    <HashScroll hash="#about">
      <div className="container my-4 d-flex flex-column">
        <h1 className="home_header">About Us</h1>
        <div className="home_about_ipad">
          <div className="d-flex justify-content-between w-100">
            <div className="home_about_image">
              <img
                src={Passport}
                style={{ borderRadius: 6 }}
                height={400}
                alt="pic"
              />
            </div>
            <div className="home_about_image">
              <img
                src={HomePic}
                style={{ borderRadius: 6 }}
                height={400}
                alt="pic"
              />
            </div>
          </div>
          <div className="about_us">
            <p>
              <b>Scrappy Consult</b> offers assistant to our clients to acquire
              Passport, Birth Certificate, Business Registration and Tax
              Identification Number (TIN). Scrappy Consult makes the process of
              acquiring these documents easy.
              <br />
              Our Team of professionals will guide you through the process of
              registration, by making sure the right information is provided.
              <br />
              For the past three years, our clients have trusted use as the best
              <b> Passport</b>, <b> Business</b>,<b> Birth Certificate</b> and
              <b> TIN</b> registration consultant in Ghana.
            </p>
          </div>
        </div>
        <div className="home_about">
          <div className="home_about_image">
            <img
              src={HomePic}
              style={{ borderRadius: 6 }}
              height={400}
              alt="pic"
            />
          </div>

          <div className="about_us">
            <p>
              <b>Scrappy Consult</b> offers assistant to our clients to acquire
              Passport, Birth Certificate, Business Registration and Tax
              Identification Number (TIN). Scrappy Consult makes the process of
              acquiring these documents easy.
              <br />
              Our Team of professionals will guide you through the process of
              registration, by making sure the right information is provided.
              <br />
              For the past three years, our clients have trusted use as the best
              <b> Passport</b>, <b> Business</b>,<b> Birth Certificate</b> and
              <b> TIN</b> registration consultant in Ghana.
            </p>
          </div>
          <div className="home_about_image">
            <img
              src={Passport}
              style={{ borderRadius: 6 }}
              height={400}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </HashScroll>
  );
}
