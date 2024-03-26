import React from 'react'


function Claim_section() {
  return (
    <>
      <section className="px-[5%] lg:px-[10%] lg:py-96 md:py-40">
      
        <div className="character-effects fifth-effect my-10  lg:my-24">
      <div className="letter-effect tubelight-effect text-center">
        <p className="like-text tubelight-text text-maincolor all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold capitalize md:tracking-[30px] tracking-[20px]">
          <span>c</span>
          <span>l</span>
          <span>a</span>
          <span>i</span>
          <span>m</span>
        </p>
    </div>
      </div>
      <div className="flex justify-center">
        <div className="md:basis-1/5 hidden"></div>
        <div className="md:basis-4/5 basis-full flex md:gap-8 gap-3 md:flex-row flex-col ">
        <h1 className='font-extrabold all-bold md:text-3xl text-xl capitalize text-white' data-aos="fade-right">about</h1>
        <p className='text-white md:text-lg text-sm  hind text-left' data-aos="fade-left" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established.</p>
        </div>
    
      </div>
      <div className="md:pt-10 pt-2">
      <p className='text-white md:text-lg text-sm  hind text-left' data-aos="fade-up">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>



   <div className="flex md:pt-10 pt-5 items-center gap-5 md:flex-row flex-col">
    <div className="lg:basis-2/5 md:basis-1/5 basis-full text-end">
      <h1 className='all-bold font-extrabold text-maincolor md:text-2xl text-lg'>Token id :</h1>
    </div>
    <div className="lg:basis-3/5 md:basis-4/5 basis-full flex gap-5 input-for-number md:flex-row flex-col md:mb-0 mb-10">
      <input type="number" name="" id="" placeholder='enter number' className='border border-maincolor py-2 px-4 rounded-lg bg-transparent capitalize text-maincolor appearance-none focus:outline-none placeholder-maincolor '/>
      <button className='border-maincolor text-maincolor px-8 py-2 animate-bounce border rounded-lg yatra_one'>CLICK TO CLAIM</button>
    </div>
   </div>
      
      </section>
    </>
  )
}

export default Claim_section
