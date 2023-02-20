import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const icons = [
  { site: 'linkedin', url: 'https://linkedin.com/in/timur-aivazov' },
  { site: 'instagram', url: 'https://www.instagram.com/aivazov_t/' },
  { site: 'telegram', url: 'https://t.me/Timur_Av' },
  { site: 'github', url: 'https://github.com/aivazov' },
];

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center z-20 hover:text-gray-100"
      >
        {icons.map((icon, key) => (
          <SocialIcon
            key={key}
            url={icon.url}
            target="_blank"
            className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 rounded-full transition-all duration-300 ease-in-out"
            fgColor="gray"
            bgColor="transparent"
            style={{width: 32}}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div className=" hover:bg-gray-700 focus:bg-gray-700 rounded-full transition-all duration-300 ease-in-out">
          {/* <Link href="#contact"> */}
          <SocialIcon
            target="_blank"
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 pr-2">
            Get in Touch
          </p>
          {/* </Link> */}
        </div>
      </motion.div>
    </header>
  );
}
