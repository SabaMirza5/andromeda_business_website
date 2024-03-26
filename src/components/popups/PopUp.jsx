// Popup.js

import React from 'react';

function PopUp({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black rounded-lg md:p-16 p-5 md:m-0 m-5 md:w-3/5 w-full model_content">
      <h1 data-aos="fade-right" className="text-white all-bold md:text-4xl text-xl font-extrabold text-center">LAUNCH THE MINT</h1>
      <p className="font-normal hind text-white md:text-lg text-base pt-5" data-aos="fade-up">
      Launch the minting of our 5,555 cards collection on our website (expected APRIL 2022). Join our discord to get whitelisted. This is the best way to reserve your place and be part of this project.
        </p>
        <button
          onClick={onClose}
          className="bg-maincolor  text-black all-bold font-bold py-2 px-4 rounded mt-5"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUp;
