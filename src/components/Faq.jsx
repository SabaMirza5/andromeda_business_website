
import React, { useState } from 'react';

function Faq() {
  const [isOpen, setIsOpen] = useState(0);

  const handleAccordion = (index) => {
    setIsOpen(index === isOpen ? -1 : index); 
  };

  const faqs = [
    {Q: 'Q', question: 'What is the difference between Pre-sale, of NFT ?' ,A: 'A.', answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to' },
    {Q: 'Q', question: 'How many eagles can i mint ?' ,A: 'A.', answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to' },
    {Q: 'Q', question: 'How do i register for the public-sale raffle ?' ,A: 'A.', answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to' },
    {Q: 'Q', question: 'Where are the founders behind the meta eafle club NFT ?' ,A: 'A.', answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to' },
  ];
  return (
    <>
      <section id='faq' className='mb-20'>
      <div className="px-[5%] lg:px-[10%]" >
       <div className="character-effects fifth-effect my-10  lg:my-28">
      <div className="letter-effect tubelight-effect text-center">
        <p className="like-text tubelight-text text-maincolor all-bold lg:text-[56px] md:text-4xl text-3xl font-extrabold capitalize md:tracking-[30px] tracking-[20px]">
          <span>F</span>
          <span>A</span>
          <span>Q</span>
        </p>
        <h2 className="md:text-4xl text-xl font-bold yatra_one uppercase text-white mt-6" data-aos="fade-up">Frequently Asked Questions</h2>
    </div>
      </div>


<div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="accordion" key={index}>
              <div className="accordion-item mb-5" data-aos="fade-up">
                <div className="accordion-title flex gap-6 items-center p-6 bg-[#353535] border-l-4 border-maincolor rounded-lg " onClick={() => handleAccordion(index)}>
                  <h1 className='text-maincolor md:text-3xl text-xl uppercase font-extrabold all-bold'>{faq.Q}</h1>
                  <p className="all-bold text-white capitalize font-bold md:text-base text-sm">{faq.question}</p>
                </div>
                {isOpen === index && (
                  <div className="accordion-content flex gap-6 items-center p-8 bg-[#212121]  transform origin-center transition duration-200 ease-out rounded-lg mt-1">
                   <h1 className='text-white md:text-3xl text-xl uppercase font-extrabold all-bold'>{faq.A}</h1>
                  <p className="hind text-white capitalize font-normal md:text-base text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div> 
     </div>
      </section>
    </>
  )
}

export default Faq





