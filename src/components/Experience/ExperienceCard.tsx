import { motion } from 'framer-motion';
import React from 'react';
import GoItIcon from 'public/static/projects/GoItIcon';
import MaIcon from 'public/static/projects/MaIcon';
import FramerMotionIcon from 'public/static/skills/FramerMotionIcon';

type Props = {
  // icon: any;
};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 rounded-lg w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] hover:opacity-100 opacity-60 snap-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      >
        {/* <GoItIcon /> */}
        <FramerMotionIcon />
        {/* <img
          className="w-10 h-10 rounded-full"
          src="/static/skills/framer-motion.svg"
        /> */}
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Student</h4>
        <p>Front-End Development</p>

        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full"
            src="/static/skills/html-5.svg"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="/static/skills/css3.svg"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="/static/skills/javascript.svg"
          />

          <img
            className="w-10 h-10 rounded-full"
            src="/static/skills/react.svg"
          />
          {/* Technologies */}
          {/* Technologies */}
          {/* Technologies */}
        </div>
        <p className="uppercase py-5 text-gray-300 tracking-[3px]">
          Started at... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Responsibilities</li>
          <li>Responsibilities</li>
          <li>Responsibilities</li>
          <li>Responsibilities</li>
        </ul>
      </div>

      {/* <motion.div>{icon}</motion.div> */}
      {/* <motion.div>{icon}</motion.div> */}
      {/* <h3>ExperienceCard</h3> */}
    </article>
  );
}
