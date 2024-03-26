import React from 'react'
import card_1 from "../assets/imgs/card_1.png";
import card_2 from "../assets/imgs/card_2.png";

function Our_cards() {
  const backgroundStyle = {
    backgroundImage: `url(${require('../assets/imgs/glob.png')})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat:'no-repeat',
};
  return (
    <>
    <section id='our_cards'> 
<div className="lg:px-[10%] px-[5%]" style={backgroundStyle} >
<div className="character-effects fifth-effect my-10 lg:my-24">
      <div className="letter-effect tubelight-effect text-center">
        <p className="like-text tubelight-text text-maincolor all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold capitalize md:tracking-[30px] tracking-[20px]">
          <span>o</span>
          <span>u</span>
          <span>r</span>
          <span>c</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
          <span>s</span>
        </p>
    </div>
</div>
<div className="flex lg:gap-20 gap-10 md:flex-row flex-col" >
    <div className="basis-1/2" >
      <img src={card_1} alt="" className="w-full lg:p-16 md:p-5 p-3  lg:h-[600px] h-[400px]" data-aos="fade-up"/>
      <p className="font-normal hind text-white md:text-lg text-base" data-aos="fade-up">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available In
              publishing and graphic design, Lorem ipsum is a placeholder.
            </p>
    </div>
   
    <div className="basis-1/2" >
    <img src={card_2} alt="" className="w-full lg:p-16 md:p-5 p-3  lg:h-[600px] h-[400px]" data-aos="fade-up"/>
      <p className="font-normal hind text-white md:text-lg text-base" data-aos="fade-up">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available In
              publishing and graphic design, Lorem ipsum is a placeholder.
            </p>
    </div>
  </div>
</div>
</section>
    </>
  )
}

export default Our_cards
