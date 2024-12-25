// pages/MobileTimeline.js
import React from 'react';

const Cardsmall = () => {
  function handleClick() {
    window.location.href = "https://bit.ly/PRESALE1GAMAFTR2025";
  }

  return (
    <div className="sm:hidden" id='ticket1'>
    <div className="flex flex-col sm:flex-row mx-auto min-h-screen items-center justify-center bg-[#FFFFFFF]/0 gap-4 xl:pt-60 md:pb-12 lg:my-[10px] relative">

      <div className="text-4xl font-audiowide font-extrabold text-gray-300 bg-[#8c8c8c]/20 rounded-2xl border-[4px] border-white backdrop-blur-lg xl:text-8xl py-4 pl-10mr-[180px] relative z-40 text-center text-border-white">TICKET</div>


      
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40 ">
        <div className="relative w-full h-full transition-all duration-500 scale-90 shadow-xl">
          <div className="absolute inset-0 z-40 p-8 bg-[#061328] rounded-xl">
            <div className="flex flex-col justify-between h-full">
            <img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[350px] rounded-xl shadow-[0px_0px_20px_#F8F37B]' />
              <h1 className="block pb-5 mt-auto text-4xl font-outfit font-bold leading-5 text-space2  xl:text-5xl">Try Out</h1>
              <div className="dropdown dropdown-right md:mt-2">
                <button onClick={handleClick} className="border-3 text-space1 hover:hover:shadow-[0px_0px_20px_#F8F37B] border-space2 hover:bg-space1 hover:text-space2 btn btn-primary bg-space2"><a className='font-bold font-outfit'>Daftar</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*bedkam front*/}
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40">
        <div className="relative w-full h-full transition-all duration-500 scale-90 shadow-xl">
          <div className="absolute inset-0 z-40 p-8 bg-[#061328] rounded-xl">
            <div className="flex flex-col justify-between h-full">
            <img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[350px] shadow-[0px_0px_20px_#F8F37B] rounded-xl' />
              <h1 className="block pb-5 mt-auto text-4xl font-outfit font-bold text-space2  xl:text-5xl">Bedah Kampus</h1>
              <div className="dropdown dropdown-right md:mt-2">
                 <button onClick={handleClick} className="border-3 text-space1 hover:hover:shadow-[0px_0px_20px_#F8F37B] border-space2 hover:bg-space1 hover:text-space2 btn btn-primary bg-space2"><a className='font-bold font-outfit'>Daftar</a></button>
              </div>
              </div>
            
              </div>
            </div>
          </div>
            
                
        </div>
      </div>                  
  );
};


export default Cardsmall;
