
import React from 'react';
import arrowright from '../../assets/imgs/arrowright.svg'

function PopUp_5({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-black rounded-lg md:p-16 p-5 md:m-0 m-5 md:w-3/5 w-full model_content overflow-y-auto hide-scrollbar h-full md:h-auto">
      
        <div className="text-center lg:pl-20 pl-0" data-aos="fade-down">
        <h1  className="text-white all-bold md:text-4xl text-xl font-extrabold text-center">Lands investments in the Metaverse</h1>
      <p className="font-normal hind text-white md:text-lg text-base pt-5 capitalize">
      WE DESIGNED THE ROADMAP TO BE 100% FOR OUR HOLDERS AND <br className='lg:block hidden'/>
CLUB MEMBERS - THAT'S OUR ONLY MISSION!
        </p>
        </div>
     





     <div className="flex md:gap-10 gap-5 pt-10">
     <div className="basis-[10%]" data-aos="fade-right">
              <img src={arrowright} alt="" className=''/>
        </div>
        <div className="basis-[90%]" data-aos="fade-left">
            <p className="font-normal hind text-text-gray text-base">
            3 weeks post mint, our strategic team will begin strategizing and purchasing lands with massive potential for future profits. Our holders will divide 50% of the profits of investing in the Metaverse just by holding our card. Moreover, as the masses will commonly adopt the Metaverse, we will have events for our community in our places in the Metaverse. Every meetup will include mingling between the holders, business partnerships, and collaborations.
           </p>
          
           <button
          onClick={onClose}
          className="bg-maincolor  text-black all-bold font-bold py-2 px-4 rounded mt-5"
        >
          Close
        </button>
        </div>
     </div>



       
      </div>
    </div>
  );
}

export default PopUp_5;
