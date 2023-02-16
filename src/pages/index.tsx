import Head from 'next/head';
import type { NextPage } from 'next';
import { Inter } from '@next/font/google';

import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About';
import Experience from '@/components/Experience';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0">
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
      </main>
    </div>
  );
};

export default Home;
