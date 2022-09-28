import React, { Image } from 'react';
import { HashScroll } from 'react-hash-scroll';
import FaceBook from '../assets/images/icons8-facebook.svg';
import Twiter from '../assets/images/icons8-twitter.svg';
import Instagram from '../assets/images/icons8-instagram.svg';

import HomePic from '../assets/images/contact.jpg';

export default function ContactUsPage() {
  return (
    <HashScroll hash='#contact'>
      <div className='container my-5 d-flex flex-column'>
        <h1 className='home_header'>Contact Us</h1>
        <div className='home_services'>
          <div className='home_services_image'>
            <img
              src={HomePic}
              style={{ borderRadius: 6 }}
              height={400}
              alt='pic'
            />
          </div>

          <div className='contact_list'>
            <ul>
              <li>Phone: +233 558 063 991</li>
              <li>Email: scrappyconsult@gmail.com</li>
              <li>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <a
                    href='https://web.facebook.com/profile.php?id=100081977442975'
                    target='_blanck'
                  >
                    <img
                      src={FaceBook}
                      width='30px'
                      height='30px'
                      alt='facebook'
                    />
                  </a>
                  <a
                    href='https://www.instagram.com/scrappyconsult/?r=nametag&__coig_restricted=1'
                    target='_blanck'
                  >
                    <img
                      src={Instagram}
                      width='30px'
                      height='30px'
                      alt='Instagram'
                    />
                  </a>
                  <a href='https://twitter.com/scrappyconsult' target='_blanck'>
                    <img src={Twiter} width='30px' height='30px' alt='Twiter' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HashScroll>
  );
}
