import React from 'react';
import { HashScroll } from 'react-hash-scroll';

function Hero() {
  return (
    <HashScroll hash='#home'>
      <div className='hero_container'>
        <div className='hero_text'>
          <div>
            <h1>Welcome to Scrappy Consult</h1>
          </div>

          <h2 className='hero_sub_text'>
            Your Instant Passport , Birth Certificate, Business Registration,
            Drivers License & Tax Identification Number (TIN) Registration
            Consultant Center.
          </h2>
        </div>
      </div>
    </HashScroll>
  );
}

export default Hero;
