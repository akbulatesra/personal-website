'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/utils/projects';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = homeRef.current;
      if (homeElement) {
        const rect = homeElement.getBoundingClientRect();
        setShowScrollButton(rect.bottom < 90);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-start flex flex-col gap-12 h-[80vh]" ref={homeRef}>
      <section className="grid grid-cols-6 items-center">
        <aside className="flex flex-col col-span-4 gap-2">
          <h1 className="text-8xl mb-4">
            Hi, I am <span className="text-special_purple">Esra!</span>
          </h1>
          <p className="text-5xl mb-8">A Frontend Developer</p>
          <p className="text-3xl italic">
            I love realising your ideas in the web world.
          </p>
          <p className="text-3xl italic">
            We can work together if you want to
            <span className="relative">
              {projects.map((project, index) => {
                return (
                  <span
                    key={index}
                    className={`absolute transition-opacity duration-1000 text-orange-500 w-max ml-3  ${
                      index === currentIndex
                        ? isVisible
                          ? 'opacity-100'
                          : 'opacity-0'
                        : 'opacity-0'
                    }`}
                  >
                    {project}
                  </span>
                );
              })}
            </span>
          </p>
          <span className="text-3xl italic">that make an impact.</span>
        </aside>
        <Image
          alt="esra akbulat"
          src={'/images/esra.JPG'}
          width={280}
          height={280}
          className="border-8 rounded-full border-t-yellow-400 border-l-yellow-400 border-r-orange-500 border-b-orange-500 mx-auto col-span-2"
        />
      </section>
      <button className="px-6 py-2 bg-yellow-400 w-fit text-xl rounded-md">
        <Link href="/contact">Lets talk</Link>
      </button>
      {showScrollButton && (
        <Link href={'#home'} scroll>
          <Image
            alt="scroll-up"
            src={'/icons/up.svg'}
            className="fixed right-10 bottom-10 dark:bg-special_white dark:rounded-full dark:p-2 dark:w-10"
            width={30}
            height={30}
            role="button"
          />
        </Link>
      )}
    </div>
  );
};
export default Home;
