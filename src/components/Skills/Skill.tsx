import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  icon: string;
  status: string;
};

export default function Skill({ directionLeft, icon, status }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        src={icon}
        // src="/static/skills/css3.svg"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white/80 rounded-full transition duration-300 ease-in-out max-md:w-24 max-md:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl text-black font-bold opacity-100">{status}</p>
        </div>
      </div>
    </div>
  );
}
