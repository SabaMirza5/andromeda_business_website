import React, { useState } from 'react';
import mintImage1 from '../assets/imgs/mintImage1.png';
import card_1 from '../assets/imgs/card_1.png';

function Mint_section() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('services');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContent = () => {
    switch (activeTab) {
      case 'services':
        return {
          title: 'Mint Services',
          text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          image: mintImage1,
        };
      case 'engagement':
        return {
          title: 'Mint Engagement',
          text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          image: card_1,
        };
      case 'privacy':
        return {
          title: 'Mint Privacy',
          text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          image: mintImage1,
        };
      case 'terms':
        return {
          title: 'Mint Terms of Services',
          text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          image: mintImage1,
        };
      default:
        return {
          title: 'Mint Services',
          text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          image: mintImage1,
        };
    }
  };

  const { title, text, image } = getContent();



  return (
    <>
      <section className="px-[5%] lg:px-[10%] lg:py-96 md:py-40">
        <div className="character-effects fifth-effect my-10  lg:my-24">
          <div className="letter-effect tubelight-effect text-center">
            <p className="like-text tubelight-text text-maincolor all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold capitalize md:tracking-[30px] tracking-[20px]">
              <span>m</span>
              <span>i</span>
              <span>n</span>
              <span>t</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center md:flex-row flex-col">
          <div className="basis-1/2 flex justify-center">
            <h1 className="font-extrabold all-bold md:text-4xl text-xl capitalize text-white" data-aos="fade-right">
              Mint Services
            </h1>
          </div>
          <div className="basis-1/2">
            <p className="text-white md:text-lg text-sm  hind text-left" data-aos="fade-left">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>


        <div className="grid md:grid-cols-4 grid-cols-2 text-white pt-14 justify-center text-center uppercase md:text-base  text-sm border-b border-maincolor pb-5 md:gap-0 gap-5" data-aos="fade-up">
        <button className={activeTab === 'services' ? 'text-maincolor' : ''} onClick={() => handleTabClick('services')}>Services</button>
          <button className={activeTab === 'engagement' ? 'text-maincolor' : ''} onClick={() => handleTabClick('engagement')}>Engagement</button>
          <button className={activeTab === 'privacy' ? 'text-maincolor' : ''} onClick={() => handleTabClick('privacy')}>Privacy</button>
          <button className={activeTab === 'terms' ? 'text-maincolor' : ''} onClick={() => handleTabClick('terms')}>Terms of Services</button>
        </div>
        <div className="flex pt-20 gap-10 md:flex-row flex-col content">
          <div className="basis-1/2" data-aos="fade-right">
            <img src={image} alt="" className='w-full'/>
          </div>
          <div className="basis-1/2 flex justify-center flex-col" data-aos="fade-left">
          <h1 className="font-extrabold all-bold md:text-4xl text-xl capitalize text-white">
          {title}
            </h1>
            <p className='text-text-gray md:text-lg text-sm  hind text-left pt-3' >{text}</p>


            <div className=" flex gap-5 input-for-number md:flex-row flex-col pt-8 mb-9" data-aos="fade-up">
            <a class="animate-bounce group border-2 border-maincolor   yatra_one hover:border-maincolor text-maincolor px-8 justify-center text-center items-center flex rounded hover:bg-maincolor hover:text-white hover-class1 uppercase py-2 lg:text-base text-sm " href="/mint">mint now</a>
      
            <div className="flex items-center justify-center space-x-4 border-maincolor text-white py-2 uppercase  border-2 rounded-lg yatra_one px-8 lg:text-base text-sm">
      <button
        className=""
        onClick={decrement}
      >
        -
      </button>
      <span className="px-4">{count}</span>
      <button
        className=""
        onClick={increment}
      >
        +
      </button>
    </div>

      {/* <input type="number" name="" id="" placeholder='enter number' className='border border-maincolor py-2 px-4 rounded-lg bg-transparent capitalize text-maincolor appearance-none focus:outline-none placeholder-maincolor '/> */}
      
    </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Mint_section;
