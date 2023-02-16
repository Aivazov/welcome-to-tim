import React from 'react';

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative h-screen max-w-7xl px-10 max-auto flex flex-col justify-evenly items-center text-center md:flex-row md:text-left z-0">
      <h3 className="absolute top-24 ml-4 text-gray-500 text-2xl tracking-[19px] uppercase">
        Contact
      </h3>

      {/* <div className='flex flex-col space-y-10'> </div> */}

      <form className="flex flex-col space-y-2 w-fit mx-auto">
        <div className="flex space-x-2">
          <input className="contact-input" type="text" placeholder="Name" />
          <input className="contact-input" type="number" placeholder="Phone" />
        </div>

        <input className="contact-input" type="email" placeholder="Email" />

        <input className="contact-input" type="text" placeholder="Subject" />

        <textarea className="contact-input" placeholder="Message"></textarea>
        <button
          type="submit"
          className="bg-[#f7ab0a] py-5 rounded-md text-black text-lg font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
