import React, { useState } from 'react';
import arrowright from "../assets/imgs/arrowright.svg";
import arrowleft from "../assets/imgs/arrowleft.svg";
import PopUp from './popups/PopUp';
import PopUp_2 from './popups/PopUp_2';
import PopUp_3 from './popups/PopUp_3';
import PopUp_4 from './popups/PopUp_4';
import PopUp_5 from './popups/PopUp_5';



function Road_map() {
  const backgroundStyle = {
    backgroundImage: `url(${require('../assets/imgs/timeline.png')})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
};
const [showPopUp, setShowPopUp] = useState(false);

const togglePopUp = () => {
  setShowPopUp(!showPopUp);
};
const [showPopUp_2, setShowPopUp_2] = useState(false);

const togglePopUp_2 = () => {
  setShowPopUp_2(!showPopUp_2);
};
const [showPopUp_3, setShowPopUp_3] = useState(false);

const togglePopUp_3 = () => {
  setShowPopUp_3(!showPopUp_3);
};
const [showPopUp_4, setShowPopUp_4] = useState(false);

const togglePopUp_4 = () => {
  setShowPopUp_4(!showPopUp_4);
};
const [showPopUp_5, setShowPopUp_5] = useState(false);

const togglePopUp_5 = () => {
  setShowPopUp_5(!showPopUp_5);
};
  return (
    <>
    <section>
    {showPopUp && <PopUp onClose={togglePopUp} />}
    {showPopUp_2 && <PopUp_2 onClose={togglePopUp_2} />}
    {showPopUp_3 && <PopUp_3 onClose={togglePopUp_3} />}
    {showPopUp_4 && <PopUp_4 onClose={togglePopUp_4} />}
    {showPopUp_5 && <PopUp_5 onClose={togglePopUp_5} />}
    </section>
    <section id='road_map'>
      <div className="px-[5%] lg:px-[10%]" >
       <div className="character-effects fifth-effect my-10  lg:my-24">
      <div className="letter-effect tubelight-effect text-center">
        <p className="like-text tubelight-text text-maincolor all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold capitalize md:tracking-[30px] tracking-[20px]">
          <span>r</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>m</span>
          <span>a</span>
          <span>p</span>
        </p>
        <p className="font-normal hind text-white md:text-lg text-base pt-10" data-aos="fade-up">
        WE DESIGNED THE ROADMAP TO BE 100% FOR OUR HOLDERS AND <br className='md:block hidden'/> CLUB MEMBERS - THAT'S OUR ONLY MISSION!
        </p>
    </div>
      </div>
     </div>
     <div className="px-[5%] show-background " style={backgroundStyle}>
        <div className="flex md:pt-0 pt-10">
        <div className="md:basis-[60%] basis-0 "></div>
        <div className="md:basis-[40%] basis-full">
          <div className="flex" data-aos="fade-left">
            <div className="me-5 pt-3">
             <img src={arrowright} alt="" className='w-full'/>
            </div>
            <div className="text-left">
              <h1 className="font-semibold text-white md:text-lg text-base all-bold" >LAUNCH THE MINT</h1>
                <p className="font-normal hind text-text-gray text-base pt-3">
                 Launch the minting of our 5,555 cards collection on our website (expected APRIL 2022). Join our discord to get whitelisted. This is the best way to reserve your place and be part of this project.
                </p>
                <button onClick={togglePopUp} className='text-maincolor text-lg capitalize  underline hind'>Read more</button>
                
            </div>
          </div>
        </div>
        </div>


        <div className="flex md:pt-0 pt-10">
        <div className="md:basis-[40%] basis-full">
          <div className="flex" data-aos="fade-right">
            
          <div className=" text-right">
            <h1 className="font-semibold text-white md:text-lg text-base all-bold uppercase" >BENEFITS FOR HOLDERS</h1>
            <p className="font-normal hind text-text-gray text-base pt-3">
            We designed our roadmap so our club members would benefit from day ONE These are the utilities that you will enjoy if you are part of our club:
           </p>
           <button onClick={togglePopUp_2} className='text-maincolor text-lg capitalize  underline hind'>Read more</button>
          </div>
          <div className="ms-5 pt-3">
              <img src={arrowleft} alt="" className='w-full'/>
            </div>
        </div>
        </div>
        <div className="md:basis-[60%] basis-0 "></div>
        </div>


        <div className="flex md:pt-0 pt-10">
        <div className="md:basis-[60%] basis-0 "></div>
        <div className="md:basis-[40%] basis-full">
          <div className="flex" data-aos="fade-left">
            <div className="me-5 pt-3">
             <img src={arrowright} alt="" className='w-full'/>
            </div>
            <div className="text-left">
              <h1 className="font-semibold text-white md:text-lg text-base all-bold uppercase" >REVEAL DAY</h1>
                <p className="font-normal hind text-text-gray text-base pt-3">
                Andromeda Business Club is not an art project. It is a project designed to bring tremendous value to investors looking for unique opportunities in this space.
                </p>
                <button onClick={togglePopUp_3}  className='text-maincolor text-lg capitalize  underline hind'>Read more</button>
            </div>
          </div>
        </div>
        </div>


        
        <div className="flex md:pt-0 pt-10">
        <div className="md:basis-[40%] basis-full">
          <div className="flex" data-aos="fade-right">
            
          <div className=" text-right">
            <h1 className="font-semibold text-white md:text-lg text-base all-bold uppercase" >PLAY TO EARN</h1>
            <p className="font-normal hind text-text-gray text-base pt-3">
            By holding Andromeda Business Club card, You will be able to play and make money!
           </p>
           <button onClick={togglePopUp_4} className='text-maincolor text-lg capitalize  underline hind'>Read more</button>
          </div>
          <div className="ms-5 pt-3">
              <img src={arrowleft} alt="" className='w-full' />
            </div>
        </div>
        </div>
        <div className="md:basis-[60%] basis-0 "></div>
        </div>


        <div className="flex md:pt-0 pt-10">
        <div className="md:basis-[60%] basis-0 "></div>
        <div className="md:basis-[40%] basis-full">
          <div className="flex" data-aos="fade-left">
            <div className="me-5 pt-3">
             <img src={arrowright} alt="" className='w-full'/>
            </div>
            <div className="text-left">
              <h1 className="font-semibold text-white md:text-lg text-base all-bold uppercase" >Lands investments in the Metaverse</h1>
                <p className="font-normal hind text-text-gray text-base pt-3">
                You will become a partner in our club investments by minting Andromeda Business Club card.
                </p>
                <button onClick={togglePopUp_5} className='text-maincolor text-lg capitalize  underline hind'>Read more</button>
            </div>
          </div>
        </div>
        </div>
        
     </div>
    </section>
    </>
  )
}

export default Road_map
