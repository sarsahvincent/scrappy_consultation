import React from 'react';
import Hero from '../components/Hero';
import HomePage from '../components/SerivicesPage';
import AboutUsPage from '../components/AboutUsPage';
import ContactUsPage from '../components/ContactUsPage';
import CommentPage from '../components/CommentPage';

function Home() {
  return (
    <div className='main_container'>
      <Hero />
      <HomePage />
      <AboutUsPage />
      <CommentPage />
      <ContactUsPage />
    </div>
  );
}

export default Home;
