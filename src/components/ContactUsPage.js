import React from "react";
import { HashScroll } from "react-hash-scroll";

import HomePic from "../assets/images/contact.jpg";

export default function ContactUsPage() {
  return (
    <HashScroll hash="#contact">
      <div className="container my-5 d-flex flex-column">
        <h1 className="home_header">Contact Us</h1>
        <div className="home_services">
          <div className="home_services_image">
            <img
              src={HomePic}
              style={{ borderRadius: 6 }}
              height={400}
              alt="pic"
            />
          </div>

          <div className="contact_list">
            <ul>
              <li>Phone: +233 558 063 991</li>
              <li>Email:  scrappyconsult@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </HashScroll>
  );
}
