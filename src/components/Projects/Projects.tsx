import React from 'react';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <div className="h-screen relative flex flex-cols items-center justify-evenly text-left md:flex-row max-w-full mx-auto px-10 z-0">
      <h3 className="absolute ml-4 top-24 text-2xl text-gray-500 uppercase tracking-[19px]">
        Projects
      </h3>

      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory relative z-20">
        {projects.map((project, key) => (
          <div
            key={key}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-0 md:p-20"
          >
            <img
              src="/static/projects/weather-app.jpg"
              alt="project-image"
              className="object-cover w-96 h-96 max-sm:w-64 max-sm:h-64 max-md:w-80 max-md:h-80 rounded-lg"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl max-md:text-3xl max-sm:text-2xl font-semibold text-center">
                Simple Weather App
              </h4>

              <p>Project Description</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] skew-y-12 z-0" />
    </div>
  );
}
