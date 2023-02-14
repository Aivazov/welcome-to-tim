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
    <header>
      {/* Social Icons */}
      <div>
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
    </header>
  );
}
