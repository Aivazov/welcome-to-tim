import React, { Component } from 'react';
import Photo from '../../public/static/about-picture.jpg';
import { motion } from 'framer-motion';

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col justify-evenly items-center text-center md:text-left xl:flex-row relative max-w-7xl mx-auto px-10"
      >
        <h3 className="title">About</h3>

        <div className="flex flex-row max-xl:flex-col max-xl:justify-center max-xl:items-center justify-center items-center">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            src={'/static/about-picture.jpg'}
            alt="about-tim"
            className="flex-shrink-0 max-md:rounded-full object-cover md:w-72 md:h-72 max-xl:mt-24 max-md:-mb-6 max-md:w-60 max-md:h-60 rounded-lg lg:w-[400px] lg:h-[400px] max-[440px]:w-36 max-[440px]:h-36 lg:mb-6"
          />

          <div className="flex flex-col items-center justify-start">
            {/* <h4 className="max-xl:hidden text-4xl font-semibold max-sm:text-2xl max-[380px]:text-lg">
              Some details about me
            </h4> */}
            <div className="space-y-7 px-0 md:px-10 md:text-sm max-lg:mt-8 max-sm:text-xs max-[380px]:text-xs xl:mt-12 xl:text-base">
              <p>Former auto mechanic, sales manager, and project manager. </p>

              <p>
                After studying programming at a computer college, where I
                learned computer systems programming and studied the
                architecture of the C and Java languages, I went into my
                favorite area of work at that time, which was car servicing.
                Ever since I was a kid, I had an affinity for complex,
                sophisticated, and useful systems. Besides, the sound of the
                engine starting, the smell of oil and gasoline - what boy in his
                childhood could not like it? So I started working where I
                pleased.
              </p>

              <p>
                But, over time, it began to take a toll on my health. In
                addition, the Covid-19 pandemic made it necessary to change the
                workplace. So I took up IT because I had always been interested
                in the world of digital technology. For the last two years, I
                worked as a project manager in a small team.{' '}
              </p>

              <p>
                But when I stumbled across a Javascript tutorial seven months
                ago, I knew exactly what I most wanted to do next: Software
                Development. Since then, I've been studying the front-end
                development stack relentlessly. I enjoy communicating with the
                interpreter in "his" language and making interesting
                functionality on my own. I get a kick out of applying new
                technologies and incorporating them into my projects. It reminds
                me that any problem is solvable, you just need a little more
                diligence and desire to find a solution. Therefore I have a
                strong motivation to continue to grow in this direction, to be
                what I see myself as - a full-fledged Software Engineer.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
