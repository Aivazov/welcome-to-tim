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
        <motion.img src='../assets/images/photo_2022-12-01_13-49-04.png' />
      </div>
    );
  }
}
