import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const icons = [
  { site: 'linkedin', url: 'https://linkedin.com/in/timur-aivazov' },
  { site: 'instagram', url: 'https://www.instagram.com/aivazov_t/' },
  { site: 'telegram', url: 'https://t.me/Timur_Av' },
  { site: 'github', url: 'https://github.com/aivazov' },
];

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-100">
      {/* Social Icons */}
      <div className="flex flex-row items-center">
        {icons.map((icon, key) => (
          <SocialIcon
            key={key}
            url={icon.url}
            target="_blank"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          target="_blank"
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div>
    </header>
  );
}
