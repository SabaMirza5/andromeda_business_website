import React from "react";
import arrow from "../assets/imgs/arrow.svg";
import cardvideoo from "../assets/imgs/cardvideoo.mp4";

function Video() {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-3 grid-col-1 lg:gap-8 gap-6 items-center lg:px-[10%] px-[5%] md:pt-3 pt-10 ">

       
        <div className="lg:pt-28 md:pt-14 pt-0">
        <h1 data-aos="fade-right" className="text-white all-bold md:text-4xl text-3xl font-extrabold">
        Ready to get started
          </h1>
          <img src={arrow} alt="" className="md:p-0 p-5 lg:p-0" data-aos="fade-right"/>
        </div>
           




  

        <div class="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
        <video src={cardvideoo} className="video-player w-full h-full" autoPlay loop muted />
        </div>
      </div>
       
        <div className="">
          <p className="text-white text-base hind" data-aos="fade-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.It is a
            long established fact that a reader will be distracted bythe
            readable content of a page when looking at its layout.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}

export default Video;
