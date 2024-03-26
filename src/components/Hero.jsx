import React, { useEffect } from "react";
import heroimg from "../assets/imgs/heroimg.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <section>
      <div className="flex lg:mt-36 md:mt-10 mt-5 gap-10 lg:p-[10%] p-[5%] md:flex-row flex-col">
        <div className="basis-1/2">
          <h1 data-aos="fade-right" className="text-white all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold lg:leading-[56px] xl:leading-[40px] leading-[40px]">
            Andromeda <br/><br className="xl:block hidden"/> Business Club
          </h1>
          <p data-aos="fade-right" className="text-text-gray hind text-xs md:pt-7 pt-4 font-normal leading-5">
            In publishing and graphic design, Lorem ipsum is a placeholder text <br className="lg:block hidden" />
            commonly used to demonstrate the visual form of a document or a <br className="lg:block hidden"/>
            typeface without relying on meaningful content. Lorem ipsum may be <br className="lg:block hidden"/>
            used as a placeholder before the final copy is available
          </p>
          <h3 data-aos="fade-right" className="md:pt-12 mt-7 text-maincolor text-3xl font-extrabold">0/5555</h3>
          <p data-aos="fade-right" className="hind text-text-gray font-normal text-xl md:pt-5 pt-0">Minted Tokens</p>
          
        </div>
        <div className="basis-1/2">
          <img src={heroimg} alt="" className="w-full" />
        </div>
      </div>
      </section>
    </>
  );
}

export default Hero;
