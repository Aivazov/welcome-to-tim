import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row relative max-w-7xl mx-auto px-10"
    >
      <h3 className="ml-4 absolute top-24 text-2xl text-gray-500 tracking-[19px] uppercase">
        Experience
      </h3>

      <div>
        {/* Expereince Card */}
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
      </div>
    </motion.div>
  );
}
