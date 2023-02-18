import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
// import Css from '../../../public/static/skills/css3.svg';
// import FMotion from '../../../public/static/skills/FramerMotionIcon'

type Props = {
  icon: string;
  status: string;
  key: number;
  icons: [];
};

const icons = [
  { url: '/static/skills/html-5.svg', progress: '80%' },
  { url: '/static/skills/css3.svg', progress: '80%' },
  { url: '/static/skills/sass.svg', progress: '70%' },
  { url: '/static/skills/figma-transparent.svg', progress: '70%' },
  { url: '/static/skills/github.svg', progress: '80%' },
  { url: '/static/skills/javascript.svg', progress: '70%' },
  { url: '/static/skills/typescript.svg', progress: '50%' },
  { url: '/static/skills/react.svg', progress: '65%' },
  { url: '/static/skills/next.js.svg', progress: '60%' },
  { url: '/static/skills/framer-motion.svg', progress: '60%' },
  { url: '/static/skills/tailwindcss.svg', progress: '70%' },
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

      <h3 className="absolute top-36 text-gray-500 text-sm tracking-[3px] uppercase">
        Some text here
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-4">
        {icons?.map(({ url, progress }, idx) => (
          <Skill key={idx} icon={url} status={progress} />
        ))}
      </div>
    </motion.div>
  );
}
