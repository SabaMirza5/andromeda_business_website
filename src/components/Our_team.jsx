import React, { useRef, useState } from 'react';
import teamimg1 from "../assets/imgs/teamimg1.png";
import teamimg2 from "../assets/imgs/teamimg2.png";
import teamimg3 from "../assets/imgs/teamimg3.png";
import teamimg4 from "../assets/imgs/teamimg4.png";
import twitter from "../assets/imgs/icons/twitter.svg";
import discord from "../assets/imgs/icons/discord.svg";
import instagram from "../assets/imgs/icons/instagram.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Navigation } from 'swiper/modules';








function Our_team() {
  const showName = (id) => {
    const nameElement = document.getElementById(id);
    if (nameElement) {
      nameElement.classList.remove("hidden");
    }
  };

  const hideName = (id) => {
    const nameElement = document.getElementById(id);
    if (nameElement) {
      nameElement.classList.add("hidden");
    }
  };

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <>
      <section id='our_team'>
        <div className="px-[5%] lg:px-[10%]">
          <div className="flex flex-col items-center justify-center">
            <div className="character-effects fifth-effect my-10 lg:my-24">
              <div className="letter-effect tubelight-effect text-center">
                <p className="like-text tubelight-text text-maincolor all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold capitalize md:tracking-[30px] tracking-[20px]">
                  <span>O</span>
                  <span>U</span>
                  <span>R</span>
                  <span>T</span>
                  <span>E</span>
                  <span>A</span>
                  <span>M</span>
                </p>
                <div className="flex justify-center">
                  <hr className="border-2 border-maincolor w-1/2 mt-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-10 md:flex-row flex-col">
            <div className="w-1/2 flex flex-col md:block hidden">
              <div className="flex justify-between gap-5" data-aos="fade-up">
                <div className="relative">
                  <img
                    src={teamimg1}
                    alt="Image 1"
                    className={`w-full h-auto cursor-pointer ${selectedMember === 'member1' ? 'activeImage' : ''}`}
                    onMouseEnter={() => showName("name1")}
                    onMouseLeave={() => hideName("name1")}
                    onClick={() => handleMemberClick("member1")}
                  />
                  <a
                    href=""
                    id="name1"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 1
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={teamimg2}
                    alt="Image 2"
                    className={`w-full h-auto cursor-pointer ${selectedMember === 'member2' ? 'activeImage' : ''}`}
                    onMouseEnter={() => showName("name2")}
                    onMouseLeave={() => hideName("name2")}
                    onClick={() => handleMemberClick("member2")}
                  />
                  <a
                    href=""
                    id="name2"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 2
                  </a>
                </div>
              </div>
              <div className="flex justify-between mt-4 gap-5" data-aos="fade-up">
                <div className="relative">
                  <img
                    src={teamimg3}
                    alt="Image 3"
                    className={`w-full h-auto cursor-pointer ${selectedMember === 'member3' ? 'activeImage' : ''}`}
                    onMouseEnter={() => showName("name3")}
                    onMouseLeave={() => hideName("name3")}
                    onClick={() => handleMemberClick("member3")}
                  />
                  <a
                    href=""
                    id="name3"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 3
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={teamimg4}
                    alt="Image 4"
                    className={`w-full h-auto cursor-pointer ${selectedMember === 'member4' ? 'activeImage' : ''}`}
                    onMouseEnter={() => showName("name4")}
                    onMouseLeave={() => hideName("name4")}
                    onClick={() => handleMemberClick("member4")}
                  />
                  <a
                    href=""
                    id="name4"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 4
                  </a>
                </div>
              </div>
            </div>

<div className="w-full md:hidden block">
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
                  <img
                    src={teamimg1}
                    alt="Image 1"
                    className="w-full h-auto cursor-pointer"
                    onMouseEnter={() => showName("name1")}
                    onMouseLeave={() => hideName("name1")}
                    onClick={() => handleMemberClick("member1")}
                  />
                  <a
                    href=""
                    id="name1"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 1
                  </a>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
                  <img
                    src={teamimg2}
                    alt="Image 2"
                    className="w-full h-auto cursor-pointer"
                    onMouseEnter={() => showName("name2")}
                    onMouseLeave={() => hideName("name2")}
                    onClick={() => handleMemberClick("member2")}
                  />
                  <a
                    href=""
                    id="name2"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 2
                  </a>
          </div>
          </SwiperSlide>
        <SwiperSlide>
               <div className="relative">
                  <img
                    src={teamimg3}
                    alt="Image 3"
                    className="w-full h-auto cursor-pointer"
                    onMouseEnter={() => showName("name3")}
                    onMouseLeave={() => hideName("name3")}
                    onClick={() => handleMemberClick("member3")}
                  />
                  <a
                    href=""
                    id="name3"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 3
                  </a>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                 <div className="relative">
                  <img
                    src={teamimg4}
                    alt="Image 4"
                    className="w-full h-auto cursor-pointer"
                    onMouseEnter={() => showName("name4")}
                    onMouseLeave={() => hideName("name4")}
                    onClick={() => handleMemberClick("member4")}
                  />
                  <a
                    href=""
                    id="name4"
                    className="absolute bottom-0 right-0 bg-zinc-700 text-maincolor p-2 hidden mb-2 pr-10"
                  >
                    Member 4
                  </a>
                </div>
        </SwiperSlide>
      </Swiper>
</div>











            <div className="md:w-1/2 w-full flex flex-col justify-center"
              data-aos="fade-left"
            >
              {selectedMember === null && (
                <div>
                  <div className="div">
                    <h2 className="md:text-4xl text-xl font-bold yatra_one uppercase text-maincolor">
                      MEET OUR TEAM MEMER
                    </h2>
                    <hr className="border-2 border-white w-1/2 mt-3" />
                  </div>

                  <h1 className="text-white all-bold md:text-3xl text-lg font-extrabold py-5">
                    Highly Certified & Qualified Team Member
                  </h1>
                  <p className="font-normal hind text-white md:text-lg text-base" data-aos="fade-up">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to In publishing and graphic
                    design, Lorem ipsum is a placeholder text commonly used to<br className='md:block hidden' />
                    <br className='md:block hidden' />
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to In publishing and graphic
                    design, Lorem ipsum is a placeholder text commonly used to
                    <br className='md:block hidden' />
                    <br className='md:block hidden' />
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly.
                  </p>
                </div>
              )}
              {/* MEMBER1 */}
              {selectedMember === "member1" && (
                <div>
                  {
                    <div className="" data-aos="fade-up">
                      <h2 className="md:text-4xl text-xl font-bold yatra_one uppercase text-maincolor">
                        MEMBER 1
                      </h2>
                      <hr className="border-2 border-white w-1/2 mt-5" />
                      <h1 className="text-white all-bold md:text-3xl text-lg font-extrabold py-5">
                      Member 1's subtitle here
                      </h1>
                      <p className="font-normal hind text-white md:text-lg text-base">
                        Member 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br className='md:block hidden' /><br className='md:block hidden' />
                        
                        Member 1 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                      </p>
                      <div className="flex gap-10 mt-10">
                          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
                      </div>
                    </div>
                  }
                </div>
              )}
              {/* MEMBER2 */}
              {selectedMember === "member2" && (
                <div>
                  {
                    <div className="" data-aos="fade-up">
                      <h2 className="md:text-4xl text-xl  font-bold yatra_one uppercase text-maincolor">
                      MCKEE,CEO
                      </h2>
                      <hr className="border-2 border-white w-1/2 mt-5" />
                      <h1 className="text-white all-bold md:text-3xl text-lg font-extrabold py-5">
                      Mckee,CEO's subtitle here
                      </h1>
                      <p className="font-normal hind text-white md:text-lg text-base">
                      Mckee,CEO Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, <br className='md:block hidden' /><br className='md:block hidden' />
                    
                        Mckee,CEO Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      </p>
                      <div className="flex gap-10 mt-10">
                          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
                      </div>
                    </div>
                  }
                </div>
              )}
                {/* MEMBER3 */}
                {selectedMember === "member3" && (
                <div>
                  {
                    <div className="" data-aos="fade-up">
                      <h2 className="md:text-4xl text-xl font-bold yatra_one uppercase text-maincolor">
                      MEMBER 3
                      </h2>
                      <hr className="border-2 border-white w-1/2 mt-5" />
                      <h1 className="text-white all-bold md:text-3xl text-lg font-extrabold py-5">
                      Member 3's subtitle here
                      </h1>
                      <p className="font-normal hind text-white md:text-lg text-base">
                      Member 3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br className='md:block hidden' /><br className='md:block hidden' />
                       
                        Member 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      </p>
                      <div className="flex gap-10 mt-10">
                          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
                      </div>
                    </div>
                  }
                </div>
                )}
                {/* MEMBER4 */}
                {selectedMember === "member4" && (
                <div>
                  {
                    <div className="" data-aos="fade-up">
                      <h2 className="md:text-4xl text-xl font-bold yatra_one uppercase text-maincolor">
                      MEMBER 4
                      </h2>
                      <hr className="border-2 border-white w-1/2 mt-5" />
                      <h1 className="text-white all-bold md:text-3xl text-lg font-extrabold py-5">
                      Member 4's subtitle here
                      </h1>
                      <p className="font-normal hind text-white md:text-lg text-base">
                      Member 4 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br className='md:block hidden' /><br className='md:block hidden' />
                        
                        Member 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      </p>
                      <div className="flex gap-10 mt-10">
                          <a href="" className='flex justify-center'><img src={twitter} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={discord} alt="" className='w-full'/></a>
                          <a href="" className='flex justify-center'><img src={instagram} alt="" className='w-full'/></a>
                      </div>
                    </div>
                  }
                </div>
                )}
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Our_team;
