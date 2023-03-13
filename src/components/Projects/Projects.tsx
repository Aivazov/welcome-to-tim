import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Props = {};

const projects = [
  {
    id: 1,
    img: '/static/projects/weather-app.jpg',
    title: 'Weather App',
    description:
      'A simple application to determine the weather conditions of the current time. The meteorological data comes from WeatherAPI. Built on Next.js',
    linkToProject: 'https://weather-responsive-app-nextjs.vercel.app/',
  },
  {
    id: 2,
    img: '/static/projects/movie-search-app.jpg',
    title: 'Movie Search App',
    description:
      'A simple movie search app. The user enters a keyword and selects the desired match. The information is taken from the OMDb API. Written with Next.js using Typescript & TailwindCSS',
    linkToProject: 'https://movie-search-app-nextjs.vercel.app/',
  },
  {
    id: 3,
    img: '/static/projects/simple-portfolio-spa.png',
    title: 'Simple Portfolio SPA',
    description:
      "This is my first experience with Vite.js Tools and Framer Motion. The Contact section also sends the filled-in data from the fields to my email. So send it to me, I'd be happy to get your feedback there :)",
    linkToProject: 'https://aivazov.github.io/portfolio-spa/',
  },
  {
    id: 4,
    img: '/static/projects/image-finder-react.jpg',
    title: 'ImageFinder App',
    description:
      'The app searches for images on demand. Works from the PixabayAPI. Built on React CRA. Shows experience with the classic API and pagination.',
    linkToProject: 'https://aivazov.github.io/react-hooks-images-gallery/',
  },
  {
    id: 5,
    img: '/static/projects/dashboard.jpg',
    title: 'Test Dashboard App',
    description:
      'A simple SPA that shows the possibilities of working with diagrams through the Chart.js library. Built on Next.js',
    linkToProject:
      'https://nextjs-dashboard-test-task-git-main-aivazov.vercel.app/',
  },
];

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-cols text-left md:flex-row max-w-full items-center justify-evenly mx-auto z-0"
    >
      <h3 className="title">Projects</h3>

      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory relative z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin max-sm:mt-10">
        {projects?.map(({ id, img, title, description, linkToProject }) => (
          <div
            key={id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-0 md:p-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="group relative flex cursor-pointer"
            >
              <motion.img
                initial={{
                  y: -50,
                }}
                whileInView={{
                  y: 0,
                }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img}
                alt="project-image"
                className="object-cover w-96 h-96 max-[400px]:w-48 max-[400px]:h-48 max-sm:w-64 max-sm:h-64 max-md:w-80 max-md:h-80 rounded-lg filter group-hover:blur-[2px] hover:brightness-75 transition duration-300 ease-in-out hover:drop-shadow-2xl"
              />

              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-80 group-hover:bg-white/95 rounded-full transition duration-300 ease-in-out">
                {/* <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> */}
                <Link href={linkToProject} target="_blank">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-200 border-gray-800 max-sm:text-sm">
                    Project&apos;s Page
                  </p>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className="text-4xl max-md:text-3xl max-sm:text-xl font-semibold text-center">
                {title}
              </h4>

              <p className="md:text-left text-center max-sm:text-sm text-lg max-md:max-w-md px-10">
                {description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] skew-y-12 z-0" />
    </motion.div>
  );
}
