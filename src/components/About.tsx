import React, { Component } from 'react';
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
        className="h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row relative max-w-7xl mx-auto px-10"
      >
        <h3 className="title">About</h3>
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
          src="/static/about-picture.jpg"
          alt="about-tim"
          className="flex-shrink-0 max-md:rounded-full object-cover md:w-80 md:h-80 max-md:mt-24 max-md:-mb-6 max-md:w-60 max-md:h-60 rounded-lg xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-7 px-0 md:px-10 max-sm:text-sm">
          <h4 className="text-4xl font-semibold max-sm:text-2xl">
            Some details about me
          </h4>
          <p>
            Former Sales Manager and Project Manager with a passion for
            Front-End Dev. At first, it was a hobby of mine. Then I took a
            seven-month training course. During this interesting dive into the
            world of web development, I realized that I knew nothing about
            computer technology :) This motivated me viciously to work even
            harder to master as many different technology stacks as possible and
            solve various complex tasks at the highest level of quality.
          </p>

          <p>
            I don&apos;t like to leave work unfinished. Learn fast. Motivated.
            Tech Enthusiast. Honest and decent. Without bad habits. Have
            experience working in a team. English - something between B1 - B2.
            Ready to deliver real value.
          </p>
        </div>
      </motion.div>
    );
  }
}
