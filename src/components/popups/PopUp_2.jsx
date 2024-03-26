
import React from 'react';
import arrowright from '../../assets/imgs/arrowright.svg'

function PopUp_2({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-black rounded-lg md:p-16 p-5 md:m-0 m-5 md:w-3/5 w-full model_content overflow-y-auto hide-scrollbar h-full">
      
        <div className="text-center lg:pl-20 pl-0" data-aos="fade-down">
        <h1  className="text-white all-bold md:text-4xl text-xl font-extrabold text-center">Road Map</h1>
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
  





        <h1 className="font-semibold text-white md:text-lg text-base all-bold uppercase" >BENEFITS FOR HOLDERS</h1>
            <p className="font-normal hind text-text-gray text-base pt-3">
            We designed our roadmap so our club members would benefit from day 1. These are the utilities that you will enjoy if you are part of our club:
           </p>
           <h1 className="font-semibold text-white md:text-base text-sm all-bold uppercase pt-7" >0.1- 80% Royalty:</h1>
           <p className="font-normal hind text-text-gray text-base">
           By minting Andromeda Business Club card, you get an elite offer to be eligible to get 80% of the royalties divided by the number of current mint holders for life. Every person that mint our card on the mint day will enjoy monthly income from the royalties as long as he holds the card. Anyone that may sell the card will lose this opportunity. This means that everyone that sells the card won't get royalties anymore, and the holders now have fewer people to divide the royalties with = more money every month for the holders. Let's take, for example, that this month there was a volume of 2000 ETH in the collection, and we have 2000 holders. If you hold our card and the Royalties are 10%, 160 ETH (80% from 200 ETH) will be divided between 2000 holders, which means you will get $240 passive income this month. If 500 people sold their card, you would now split the Royalties only with 1500 people. According to the same calculation, assuming we have a higher volume next month of 2700 ETH, you will get - $432 this month, and the process continues. Every card sold for once cannot be eligible to get Royalties anymore so if you buy on opensea you will still be able to get all the other benefits of the club, but the Royalties its only for mint holders. A wallet that holds two cards will be eligible to get double royalty income.
           </p>
           <h1 className="font-semibold text-white md:text-base text-sm all-bold uppercase pt-7" >0.2- Diamond Cards</h1>
           <p className="font-normal hind text-text-gray text-base">
           In our collection, we have 5555 unique business cards overall. Every card provides you with all the benefits of the club. Unlike any other project, our team knows that the collection's success will be measured by the amount of value they will bring directly to the Andromeda Business Club members. The team has decided that among all 5555 cards, there will be 10 extraordinary cards.
           </p>
           <h1 className="font-semibold text-white md:text-base text-sm all-bold uppercase pt-7" >What is a diamond card?</h1>
           <p className="font-normal hind text-text-gray text-base">
           Every Diamond Cardholder will be eligible for all the club benefits, including something extra from us. The holders of the Diamond Card will get a monthly salary of $1000 per month for the 3 years (36 months) Every single month directly to your wallet.*Holder with 2 Diamond Cards will get $2000 a month for the next 3 years!*Diamond cards are not restricted only to the wallet from which the card was minted. They can be sold on opensea as any other card. The buyer will be eligible to get the $1000 every month, but he will lose the benefit of the Royalties. The Royalties will be divided only between people that have never traded their ABC(Andromeda Business Club) cards.*The cards will be randomly revealed on the reveal day.
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

export default PopUp_2;
