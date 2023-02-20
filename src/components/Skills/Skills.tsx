import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {
  icon: string;
  status: string;
  skillName: string;
  key: number;
  icons: [];
};

const icons = [
  { skillName: 'HTML', url: '/static/skills/html-5.svg', progress: '80%' },
  { skillName: 'CSS', url: '/static/skills/css3.svg', progress: '80%' },
  { skillName: 'SASS', url: '/static/skills/sass.svg', progress: '70%' },
  {
    skillName: 'Bootstrap',
    url: '/static/skills/bootstrap.svg',
    progress: '60%',
  },
  {
    skillName: 'Figma',
    url: '/static/skills/figma-transparent.svg',
    progress: '70%',
  },
  { skillName: 'GitHub', url: '/static/skills/github.svg', progress: '80%' },
  {
    skillName: 'JavaScript',
    url: '/static/skills/javascript.svg',
    progress: '65%',
  },
  {
    skillName: 'TypeScript',
    url: '/static/skills/typescript.svg',
    progress: '50%',
  },
  { skillName: 'React', url: '/static/skills/react.svg', progress: '60%' },
  { skillName: 'NextJS', url: '/static/skills/nextjs.svg', progress: '50%' },
  {
    skillName: 'FramerMotion',
    url: '/static/skills/framer-motion.svg',
    progress: '50%',
  },
  {
    skillName: 'TailwindCSS',
    url: '/static/skills/tailwindcss.svg',
    progress: '70%',
  },
];

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row relative max-w-7xl mx-auto px-10"
    >
      <h3 className="title">Skills</h3>

      <h3 className="absolute top-36 text-gray-500 text-sm tracking-[3px]">
        Stacks of technology that I have studied and use in my work
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-4">
        {icons?.map(({ skillName, url, progress }, idx) => (
          <Skill key={idx} icon={url} status={progress} stack={skillName} />
        ))}
      </div>
    </motion.div>
  );
}
