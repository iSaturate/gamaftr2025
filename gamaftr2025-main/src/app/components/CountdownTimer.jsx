// pages/CountdownTimer.js
"use client";
import React, { useEffect } from 'react';

const CountdownTimer = () => {
  useEffect(() => {
    // JavaScript for Countdown Timer
    const countdownElement = document.getElementById('countdown');
    
    // Provide date components individually or use a universally recognized format
    const targetDate = new Date(2025, 0, 25, 6, 0, 0).getTime();
  
    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;
    
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
      const countdownHTML = `
        <div class="flex flex-row gap-8 md:gap-6 px-4">
            <div class="py-6 text-center text-[#FFFFFF] border-l-3 pr-5">
                <p class="text-xl font-audiowide font-semibold leading-6 md:text-4xl xl:text-7xl">${days}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Hari</p>
            </div>
            <div class="py-6 text-center text-[#FFFFFF] border-r-3">
                <p class="text-xl font-audiowide font-semibold leading-6 md:text-4xl xl:text-7xl">: ${hours}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Jam</p>
            </div>
            <div class="py-6 text-center text-[#FFFFFF] border-r-3">
                <p class="text-xl font-audiowide font-semibold leading-6 md:text-4xl xl:text-7xl">: ${minutes}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Menit</p>
            </div>
            <div class="py-6 text-center text-[#FFFFFF] border-r-3">
                <p class="text-xl font-audiowide font-semibold leading-6 md:text-4xl xl:text-7xl">: ${seconds}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Detik</p>
            </div>
        </div>
      `;
    
      countdownElement.innerHTML = countdownHTML;
    }
    
  
    // Call the function initially and set an interval for continuous updates
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
  
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
   // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="relative flex items-center justify-center w-ful mx-5  md:h-screen count md:pt-10 timeline lg:px-2 gap-6 xl:ml-5 mb-5 pb-16">
      <div className="absolute inset-y-0 inset-x-0 left-0 z-40 flex items-center w-2/3 md:w-full rocket xl:mr-3 lg:ml-7">
         
        <img loading="lazy" className="absolute z-25 scale-[110%] 2xl:max-w-[1900px] md:translate-y-[80px]" alt="hero" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/landscapepanjang.png?raw=true" />
      </div>
      <div className="relative z-40 md:items-center md:flex">
        <div className="flex items-center justify-center w-full text-center text-white">
          <h1 className="text-3xl font-bold font-audiowide md:px-10 sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl bg-[#8c8c8c]/20 backdrop-blur-lg border-white border-[4px] text-border-white text-gray-300 rounded-2xl">Bedah Kampus</h1>
        </div>
        <div className="relative z-40 flex items-center justify-center w-full mx-auto  border-[4px] border-white bg-[#8c8c8c]/20  backdrop-blur-md relative-20 rounded-2xl scale-90">
          <div className="text-5xl font-bold font-outfit text-space1 font-space md:text-sm md:px-5 md:text-border-red-500"  id="countdown"></div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
