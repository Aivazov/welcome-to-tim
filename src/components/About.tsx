import React, { Component } from 'react';
import { motion } from 'framer-motion';

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row relative max-w-7xl mx-auto px-10">
        <h3 className="absolute top-24 text-2xl text-gray-500 tracking-[20px] uppercase">
          About
        </h3>
        <motion.img
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          src="/static/about-picture.png"
          className="flex-shrink-0 max-md:rounded-full object-cover md:w-80 md:h-80 -pb-30 max-md:w-60 max-md:h-60 rounded-lg xl:w-[500px] xl:h-[600px]"
        />
      </div>
    );
  }
}
