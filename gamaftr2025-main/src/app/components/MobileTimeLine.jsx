// pages/MobileTimeline.js
import React from 'react';

const MobileTimeline = () => {
  return (
    <div className="py-4 text-white md:hidden">
      <div className="container relative mx-auto my-12 md:flex-row md:my-24">
      <img loading="lazy" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/mobilekereta.png?raw=true" alt="Alt Text" className='absolute z-10 flex justify-center translate-x-5 translate-y-20 md:hidden'/>
        <div className="px-[60PX] md:w-1/2 md:px-8 relative">
          <div className="flex justify-center">
        
        </div>
        <div className="text-5xl font-audiowide font-bold text-white bg-[#d3d3d3]/60 rounded-2xl border-[4px] border-white backdrop-blur-lg shadow-white temb-2 xl:text-8xl py-4 pl-10mr-[180px] relative z-40 text-border-white text-center">TIMELINE</div>
        </div>
        <div className="relative z-40 md:w-1/2">
          <div className="container mx-auto">
            <div className="p-4 overflow-hidden">
              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-[#d3d3d3]/60 backdrop-blur-lg border-white rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-[#FDD134] font-outfit md:text-2xl">5 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] font-extrabold font-outfit md:text-6xl">Opening</h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-[#d3d3d3]/60 backdrop-blur-lg border-white rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-[#FDD134] font-outfit md:text-2xl">6-17 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] font-extrabold font-outfit md:text-6xl">Roadshow</h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-[#d3d3d3]/60 backdrop-blur-lg border-white rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-[#FDD134] font-outfit md:text-2xl">18-19 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] font-extrabold font-outfit md:text-6xl">Try Out</h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-[#d3d3d3]/60 backdrop-blur-lg border-white rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-[#FDD134] font-outfit md:text-2xl">25 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] font-extrabold font-outfit md:text-6xl">Bedah Kampus</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeline;
