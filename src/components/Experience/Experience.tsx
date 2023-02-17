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
      className="h-screen relative flex flex-col justify-evenly items-center text-left md:flex-row  max-w-full mx-auto px-10 overflow-hidden"
    >
      <h3 className="ml-4 absolute top-24 text-2xl text-gray-500 tracking-[19px] uppercase">
        Experience
      </h3>

      <div>
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
