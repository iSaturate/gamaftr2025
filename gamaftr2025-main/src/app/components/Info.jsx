import React from 'react';

const Info = () => {
  return (
    <div className="w-full lg:pt-10 md:pt-60 xl:pt-60" id='info1'>
      <div className="md:hidden relative z-40 my-20  ">
        <div className="relative w-full px-4 pt-5 text-center text-white">
        
        </div>

        <div className="relative w-full bg-[#d3d3d3]/60  backdrop-blur-lg p-4 translate-y-[200px]">
          <h1 className="relative z-40 text-xl font-bold text-center text-white rounded-2xl  md:text-2xl lg:text-4xl xl:text-6xl ">Gadjah Mada Flies To Riau</h1>
          <p className="relative z-40 leading-relaxed text-justify text-white font-outfit lg:text-2xl ">
          merupakan program kerja tahunan KEMARIGAMA (Keluarga Mahasiswa Riau Gadjah Mada) yang setiap tahunnya sudah mengunjungi lebih dari 50 SMA di Provinsi Riau. GAMAFTR diinsiasikan untuk memperkenalkan Universitas Gadjah Mada kepada siswa dan siswi SMA/sederajat di Provinsi Riau. GAMAFTR terdiri dari beberapa rangkaian acara seperti roadshow, try out, dan acara puncaknya adalah Bedah Kampus di Pekanbaru.
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center h-screen p-4 md:pt-80  mx-auto gap-20 2xl:container about relative">
        <div className="items-center justify-center w-1/2 px-8 text-white">
          <div className="relative z-40 flex justify-center w-full h-0 overflow-hidden scale-100 rounded-lg aspect-w-16 aspect-h-9" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/uI4uCmLkZsc?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
        <img loading="lazy" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/Cloud.png?raw=true" alt="" className="animate-cloud-move sm:animate-cloud-move-sm md:animate-cloud-move-md lg:animate-cloud-move-lg absolute z-10 translate-x-[248px] xl:translate-y-[-900px] md:translate-y-[-600px] lg:translate-y-[-430px] xl:scale-[75%] md:scale-[50%] sm:scale-[80%] lg:scale-[60%] hidden md:block " />
        <div className="container relative z-40 w-1/2 p-6 mx-auto overflow-hidden  bg-[#d3d3d3]/60  backdrop-blur-lg shadow-2xl  shadow-space2 rounded-xl ">
          <h1 className="mb-4 text-xl font-bold text-white font-audiowide md:text-xl sm:text-lg lg:text-4xl xl:text-6xl">Gadjah Mada Flies To Riau</h1>
          <p className="font-semibold leading-relaxed text-justify text-white font-outfit md:text-md sm:text-sm lg:text-xl">Merupakan program kerja tahunan KEMARIGAMA (Keluarga Mahasiswa Riau Gadjah Mada) yang setiap tahunnya sudah mengunjungi lebih dari 50 SMA di Provinsi Riau. GAMAFTR diinisiasikan untuk memperkenalkan Universitas Gadjah Mada kepada siswa dan siswi SMA/sederajat di Provinsi Riau.</p>
        </div>
      </div>
     <img loading="lazy" className="absolute z-20 -translate-y-[30px] scale-[120%] -translate-x-3  sm:scale-[140%] overflow-x-hidden" alt="hero" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/keretaapi.png?raw=true" />
    </div>
  );
};

export default Info;
