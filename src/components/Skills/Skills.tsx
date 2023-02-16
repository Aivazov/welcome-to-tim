import React from 'react';
import { motion } from 'framer-motion';

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
    </motion.div>
  );
}
