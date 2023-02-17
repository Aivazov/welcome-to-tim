import React from 'react';

type Props = {};

export default function FramerMotionIcon({}: Props) {
  return (
    <div className="mt-2">
      <svg
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center "
        xmlns="http:www.w3.org/2000/svg"
        viewBox="0 0 14 21"
        role="presentation"
      >
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path>
      </svg>
    </div>
  );
}
