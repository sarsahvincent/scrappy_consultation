import React from "react";
import { HashScroll } from "react-hash-scroll";

import HomePic from "../assets/images/aboutus.jpg";

export default function SerivicesPage() {
  return (
    <HashScroll hash="#services">
      <div className="container  my-5 d-flex flex-column">
        <h1 className="home_header">Our Services</h1>
        <div className="home_services">
          <div className="home_services_image">
            <img
              src={HomePic}
              style={{ borderRadius: 6 }}
              height={400}
              alt="pic"
            />
          </div>

          <div className="home_services_list">
            <ul>
              <li>Passport Registration.</li>
              <li>Birth Certificate Registration.</li>
              <li>Business Certificate Registration.</li>
              <li>Tax Identification Number (TIN) Registration.</li>
            </ul>
          </div>
        </div>
      </div>
    </HashScroll>
  );
}
