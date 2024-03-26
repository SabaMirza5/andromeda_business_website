
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/imgs/logo.png";
import twitter from "../assets/imgs/icons/twitter.svg";
import discord from "../assets/imgs/icons/discord.svg";
import instagram from "../assets/imgs/icons/instagram.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className='bg-black fixed py-3 px-5 navbar lg:flex hidden border-t-4 border-maincolor z-50'>
      <div className="className flex items-center">
        <div className="basis-1/5">
          <a href=""><img src={logo} alt="" className='w-full'/></a>
        </div>
        <div className="basis-[35%]">
          <ul className=' lg:gap-5 xl:gap-10 flex text-white justify-center yatra_one capitalize lg:text-[14px] xl:text-lg'>
            <li><a href="#our_cards" id=''>Our cards</a></li>
            <li><a href="#our_team">Our team</a></li>
            <li><a href="#road_map">road map</a></li>
            <li><a href="#faq">faq</a></li>
          </ul>
        </div>
        <div className="basis-[45%] flex lg:gap-5 xl:gap-10 justify-end yatra_one">
          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
          <Link to="/claim" className="animate-bounce group border-2 border-maincolor bg-black  yatra_one hover:border-maincolor text-maincolor px-8 py-1 rounded hover:bg-maincolor hover:text-white hover-class1">
                  
                    Claim
                 
                </Link>
                <Link to="/mint" className="animate-pulse group hover-class12  border-2 border-maincolor bg-black hover:border-maincolor text-maincolor px-8 py-1 rounded capitalize">mint 
                </Link>
        </div>
      </div>
    </nav>


  

<nav className="bg-black p-4 lg:hidden border-t-4 border-maincolor">
      <div className="flex items-center justify-between">
        <div className="">
        <a href=""><img src={logo} alt="" className='w-full h-9'/></a>
        </div>
        <button
          className="flex text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} lg:items-center text-center mt-6`}>

          <ul className='items-center justify-between text-base text-white yatra_one capitalize text-[14px] space-y-6'>
            <li><a href="">Our cards</a></li>
            <li><a href="">Our team</a></li>
            <li><a href="">road map</a></li>
            <li><a href="">faq</a></li>
          </ul>
          <div className="flex justify-center gap-5 mt-5">
          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
          </div>
       <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
           <Link to="/claim" className="animate-bounce group border-2 border-maincolor bg-black  hover:border-maincolor text-maincolor px-8 py-1 rounded hover:bg-maincolor hover:text-text-white hover-class1 yatra_one">Claim
          </Link>
          <Link to="/mint" className="animate-bounce group hover-class12 border-2 border-maincolor bg-black yatra_one  hover:border-maincolor text-maincolor px-8 py-1 rounded capitalize">mint
          </Link>
       </div>
      </div>
</nav>

      
    </>
  );
};

export default Navbar;
