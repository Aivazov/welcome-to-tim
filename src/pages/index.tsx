import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Inter } from '@next/font/google';

import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Tim&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        {/* Hero  */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Experience  */}

        <section id="experience" className="snap-center">
          <Experience />
        </section>

        {/* Skills  */}

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact */}

        <section id="contact" className="snap-start">
          <Contact />
        </section>

        {/* Home button */}
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-end">
              {/* // eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/static/circle_up_icon.svg"
                alt="home button"
                className="w-10 h-10 rounded-full mr-10"
              />
            </div>
          </footer>
        </Link>
      </main>
    </div>
  );
};

export default Home;
