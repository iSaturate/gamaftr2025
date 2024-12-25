// pages/MobileTimeline.js
import React from 'react';

const Cardsmall = () => {
  function handleClick() {
    window.location.href = "https://bit.ly/SALEGAMAFTR2024";
  }

  return (
    <div className="sm:hidden" id='ticket1'>
    <div className="flex flex-col sm:flex-row mx-auto min-h-screen items-center justify-center bg-[#FFFFFFF]/0 gap-4 xl:pt-60 md:pb-12 lg:my-[10px] relative">

      
      <div className="text-5xl font-audiowide font-extrabold text-white rounded-2xl border-[4px] border-white bg-[#d3d3d3]/40  shadow-xl xl:text-8xl p-4 lg:py-0 xl:p-4 pl-10mr-[180px] relative z-40 ">TICKET</div>
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40 ">
        <div className="relative w-full h-full transition-all duration-500 scale-90 shadow-xl">
          <div className="absolute inset-0 z-40 p-8 bg-[#061328] rounded-xl">
            <div className="flex flex-col justify-between h-full">
            <img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[350px] rounded-xl shadow-[0px_0px_20px_#F8F37B]' />
              <h1 className="block pb-5 mt-auto text-4xl font-outfit font-bold leading-5 text-space2  xl:text-5xl">Try Out</h1>
              <div className="dropdown dropdown-right md:mt-2">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*bedkam*/}
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40">
        
        <div className="relative w-full h-full transition-all duration-500 scale-90 shadow-xl">
          <div className="absolute inset-0 z-40 p-8 bg-[#061328] rounded-xl">
            
            <div className="flex flex-col justify-between h-full">
            <img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[350px] shadow-[0px_0px_20px_#F8F37B] rounded-xl' />
              <h1 className="block pb-5 mt-auto text-4xl font-outfit font-bold text-space2  xl:text-5xl">Bedah Kampus</h1>
              </div>
            
                <div className="absolute z-40 inset-0 h-full w-full rounded-xl bg-space1  p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]" id='ticketweb'>
                  
                  <div className="flex flex-col justify-between h-full">
                  
                
            
                    <div className=" lg:mb-0 xl:mb-8 sm:mb-1 md:mb-1">
                      <h1 className=" font-outfit font-bold mb-4 sm:mb-0  lg:mb-0 xl:mb-4 text-[13px] md:text-[13px]  lg:text-2xl sm:text-[10px]"></h1>
                        <ul className="font-outfit">
                          <li className='text-[10px] sm:text-[8px]  md:text-[10px] lg:text-[14px]'><strong>Hari, tanggal: </strong> Sabtu, 25 Januari 2025</li>
                          <li className='text-[10px] sm:text-[8px]  md:text-[10px] lg:text-[14px]'><strong>Waktu pelaksanaan: </strong> 07.30 - Selesai</li>
                          <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Lokasi: </strong>Menara Dang Merdu Bank Riau Kepri</li>
                        </ul>
                      </div>
                    
                    <div className="gap-4 mt-auto">
                      <button onClick={handleClick} className="border-none text-white shadow-[0px_0px_20px_#205FC9] hover:bg-white hover:text-space2 hover: btn btn-primary bg-space2"><a className='font-bold font-outfit'>Daftar</a></button>
                    </div>
                    
                  </div>
                </div>
        
              </div>
      
      </div>      
    </div>              
  );
};


export default Cardsmall;
