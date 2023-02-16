import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row relative max-w-7xl mx-auto px-10"
    >
      <h3 className="absolute top-24 ml-4 text-gray-500 text-2xl tracking-[19px] uppercase">
        Skills
      </h3>

      <h3 className="absolute top-36 text-gray-500 text-sm tracking-[3px] uppercase">
        Some text here
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}