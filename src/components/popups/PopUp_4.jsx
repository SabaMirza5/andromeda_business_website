
import React from 'react';
import arrowright from '../../assets/imgs/arrowright.svg'

function PopUp_4({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-black rounded-lg md:p-16 p-5 md:m-0 m-5 md:w-3/5 w-full model_content overflow-y-auto hide-scrollbar h-full">
      
        <div className="text-center lg:pl-20 pl-0" data-aos="fade-down">
        <h1  className="text-white all-bold md:text-4xl text-xl font-extrabold text-center capitalize">Play to earn</h1>
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
            Our developer’s team will start to work 2 weeks post-mint on one of the best Play 2 Earn concepts in the NFT space. It’s a real-time game. Each holder enters our platform every month with a $10K demo balance. The traders need to finish the month with the highest amount of money by trading NFT and crypto coins. You will be exposed to all the coins and NFT in the market. Our platform takes real-time prices, and trades measure actual prices on our game. The goal is simple - finish the month with more money. Each month the best traders win a real ETH DIRECT to the wallet and at the same time receive a massive score in the game. And because it’s a real-time game, all of us can see in real-time what coins and NFT COLLECTIONS the high score gamers buy and sell and follow what they are getting into, understand the reasons, and make your move! So in the bottom line, we succeed in creating an ecosystem that Rewards the best-proven traders in the industry- and allows the rest of the community to trade like them.
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

export default PopUp_4;
