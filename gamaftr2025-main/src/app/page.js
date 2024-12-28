// Home.jsx (or Home.js)
"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';  // Import dynamic
import Navbar from './components/Navbar';
import './globals.css';
import { motion, useAnimation } from 'framer-motion';

// Import components using dynamic import
const AboutUsLg = dynamic(() => import('./components/AboutUsLg'));
const Info = dynamic(() => import('./components/Info'));
const Timeline = dynamic(() => import('./components/Timeline'));
const MobileTimeline = dynamic(() => import('./components/MobileTimeLine'));
const CountdownTimer = dynamic(() => import('./components/CountdownTimer'));
const Ticket = dynamic(() => import('./components/Ticket'));
const Lokasi = dynamic(() => import('./components/Lokasi'));
const Footer = dynamic(() => import('./components/Footer'));
const Cardsmall = dynamic(() => import('./components/Cardsmall'));
const Sponsor = dynamic(() => import('./components/Sponsor'));

const Home = () => {
  const controlsArray = Array.from({ length: 7 }, () => useAnimation());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      controlsArray.forEach((controls, index) => {
        const element = document.getElementById(`element-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;

          if (isVisible) {
            controls.start({ opacity: 1, y: 0 });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial trigger to check elements on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controlsArray]);

  return (
    <div className='p-1 overflow-x-hidden overflow-y-hidden bg-gradient-to-r from-cyan-200 via-blue-300 to-cyan-200'>
      <Navbar />

      <AboutUsLg />

      <Info />

      <motion.div animate={controlsArray[2]} initial={{ opacity: 0, y: -20 }} id="element-2">
        <Timeline />
      </motion.div>

      <MobileTimeline />

      <motion.div animate={controlsArray[4]} initial={{ opacity: 0, y: -20 }} id="element-4">
        <CountdownTimer />
      </motion.div>

      <motion.div animate={controlsArray[3]} initial={{ opacity: 0, y: -20 }} id="element-3">
        <Cardsmall />
      </motion.div>

      <motion.div animate={controlsArray[5]} initial={{ opacity: 0, y: -20 }} id="element-5">
        <Ticket />
      </motion.div>

      <Lokasi />
      <Sponsor />

      <Footer />
    </div>
  );
};

export default Home;
