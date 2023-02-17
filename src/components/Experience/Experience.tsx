import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';
import MaIcon from 'public/static/projects/MaIcon';
import GoItIcon from 'public/static/projects/GoItIcon';
import { JsxAttribute } from 'typescript';

const icons = [
  {
    icon: MaIcon,
    title: 'Mate Academy',
    link: 'https://nextjs-dashboard-test-task-git-main-aivazov.vercel.app/',
  },
  {
    img: GoItIcon,
    title: 'GoIt Academy',
    link: 'https://weather-responsive-app-nextjs.vercel.app/',
  },
];

type Props = {
  // icon: any;
  // title: string;
  // MaIcon: JsxAttribute;
  // GoItIcon: JsxAttribute;
};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      // className="h-screen relative flex flex-col justify-evenly items-center text-left md:flex-row  max-w-full mx-auto cursor-pointer transition-opacity duration-300 overflow-hidden"
      className="h-screen relative flex overflow-hidden flex-cols text-left md:flex-row max-w-full items-center justify-evenly mx-auto z-0"
    >
      <h3 className="ml-4 title">Experience</h3>

      {/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"> */}
      <div className="w-full flex overflow-x-scroll space-x-5 overflow-y-hidden snap-x snap-mandatory relative z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {/* Expereince Card */}
        {/* {icons.map(({ icon, title }, idx) => {
          return <ExperienceCard icon={icon} key={idx} />;
        })} */}

        {/* {/* <ExperienceCard icon={MaIcon} /> */}

        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />

        {/* <ExperienceCard icon={GoItIcon} /> */}
      </div>
    </motion.div>
  );
}
