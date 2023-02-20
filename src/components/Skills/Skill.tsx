import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  icon: string;
  status: string;
  stack: string;
};

export default function Skill({ directionLeft, icon, status, stack }: Props) {
  return (
    <motion.div
      className="group relative flex cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <motion.img
        // initial={{
        //   // x: directionLeft ? -200 : 200,
        //   x: -200,
        //   opacity: 0,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   x: 0,
        // }}
        // transition={{
        //   duration: 1,
        // }}
        // viewport={{ once: true }}

        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{
        //   duration: 1,
        // }}
        // initial={{ x: directionLeft ? 100 : -100, opacity: 0 }}
        // initial={{ y: 20, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}

        viewport={{ once: true }}
        src={icon}
        className="rounded-full border border-gray-500 object-cover max-[374px]:w-12 max-[374px]:h-12 max-sm:w-16 max-sm:h-16 sm:w-24 sm:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        // className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white/95 rounded-full transition duration-300 ease-in-out max-[374px]:w-14 max-[374px]:h-14 max-sm:w-20 max-sm:h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32">
        {/* <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white/95 rounded-full transition duration-300 ease-in-out max-md:w-24 max-md:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"> */}
        <div className="flex flex-col items-center justify-center h-full">
          <p className="max-sm:hidden text-xs text-black font-bold opacity-100">
            {stack}
          </p>
          <p className="max-sm:text-sm text-2xl text-black font-bold opacity-100">
            {status}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
