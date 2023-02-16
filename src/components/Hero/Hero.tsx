import React from 'react';
// import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Welcome, dear Guest!',
      'I am Tim Aivazov',
      'theGuyWhoLovesToCode.tsx',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="rounded-full relative h-32 w-32 object-cover"
        src="/static/tim-aivazov.png"
        alt="tim's hero image"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-1 tracking-[7px]">
          Front-End Developer
        </h2>
        <h1 className="px-10 font-semibold text-5xl lg:text-6xl">
          <span>{text}</span>
          <Cursor cursorColor="text-gray-400" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
