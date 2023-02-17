import { motion } from 'framer-motion';
import React from 'react';
import GoItIcon from 'public/static/projects/GoItIcon';
import MaIcon from 'public/static/projects/MaIcon';

type Props = {
  icon: any;
};

export default function ExperienceCard({ icon }: Props) {
  return (
    <article>
      <motion.div>
        {/* <GoItIcon /> */}
      </motion.div>
      <motion.div>{icon}</motion.div>
      {/* <h3>ExperienceCard</h3> */}
    </article>
  );
}
