import React from 'react';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen relative flex flex-cols items-center justify-evenly md:flex-left md:flex-row max-w-7xl mx-auto px-10 z-0">
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[19px]">
        Projects
      </h3>

      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory relative z-20">
        {projects.map((project) => (
          <div></div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] skew-y-12" />
    </div>
  );
}
