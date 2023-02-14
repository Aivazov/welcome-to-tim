import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Tech-Enthusiast', 'Front-End Developer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCircles />
      <h1 className="text-gray-400">
        <span>{text}</span>
        <Cursor cursorColor="text-gray-400" />
      </h1>
    </div>
  );
}
