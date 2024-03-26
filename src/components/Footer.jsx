
import React, { useState } from 'react';
import logo from "../assets/imgs/logo.png";
import twitter from "../assets/imgs/icons/twitter.svg";
import discord from "../assets/imgs/icons/discord.svg";
import facebook from "../assets/imgs/icons/facebook.svg";
import instagram from "../assets/imgs/icons/instagram.svg";

function Footer() {
  // const [isFocused, setIsFocused] = useState(false);
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };
  return (
    <>
      <section className="px-[5%] lg:px-[10%] bg-[#212121]">
        <div className=" flex  justify-between pt-20 items-center md:flex-row flex-col">
          <div className="div">
            <a href=""> <img src={logo} alt="" className="h-[60px]" /></a>
           
          </div>
          <div className="flex gap-5 items-center md:mt-0 mt-5">
            <p className="all-bold font-normal md:text-lg text-sm text-white capitalize">
              ready to get started?
            </p>
            <button className="animate-bounce uppercase text-maincolor text-sm font-normal yatra_one border border-maincolor px-6 py-2 rounded-lg">
              buy nft
            </button>
          </div>
        </div>
        <hr className="border-maincolor my-10" />
        <div className=" flex  justify-between  items-center md:flex-row flex-col">
          <div className="flex gap-8">
          <p className="all-bold font-normal md:text-lg text-sm text-white capitalize">
          Subscribe to our <br className='md:block hidden'/>newsletter
            </p>
            <div className="border-b border-maincolor py-2 input-for-mail">
            <input class="appearance-none bg-transparent border-none w-full md:text-base text-sm text-white leading-tight focus:outline-none " type="email" placeholder="Gmail" aria-label="Full name"/>
            </div>
          </div>
          <div className="flex gap-5 items-center md:mt-0 mt-10">
          <a href="" className='flex justify-center'><img src={facebook} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
          
          </div>
        </div>
        <div className="flex text-center justify-center gap-5 py-10">
        <a href=""><p className="hind font-normal md:text-lg text-sm text-white capitalize">
        Terms & Conditions
            </p></a>
            <a href=""><p className="hind font-normal md:text-lg text-sm text-white capitalize">
            Privacy Policy
            </p></a>
        </div>
      </section>
    </>
  );
}

export default Footer;
