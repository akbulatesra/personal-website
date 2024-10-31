'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/utils/projects';
import esra from '../../../public/images/esra.jpg';
import { useTheme } from 'next-themes';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { theme } = useTheme();
  const [clientTheme, setClientTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

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
    <div
      className="text-start flex flex-col gap-6 lg:gap-12 md:gap-8 xl:h-[80vh] 2xl:h-auto 2xl:mb-32"
      ref={homeRef}
    >
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 items-center">
        <aside className="flex flex-col col-span-4 gap-2">
          <h1 className="text-5xl lg:text-8xl mb-2 lg:mb-4">
            Hi, I am{' '}
            <span
              className={
                clientTheme === 'light'
                  ? 'text-special_purple'
                  : 'text-special_orange'
              }
            >
              Esra!
            </span>
          </h1>
          <p className="text-2xl lg:text-5xl mb-2 lg:mb-8">
            A Frontend Developer
          </p>
          <p className="text-xl lg:text-3xl italic">
            I love realising your ideas in the web world.
          </p>
          <p className="text-xl lg:text-3xl italic -mb-2">
            We can work together if you want to
            <span className="relative">
              {projects.map((project, index) => {
                return (
                  <span
                    key={index}
                    className={`lg:absolute transition-opacity duration-1000 text-special_orange font-semibold lg:w-max ml-3 ${
                      index === currentIndex
                        ? isVisible
                          ? 'opacity-100'
                          : 'opacity-0'
                        : 'opacity-0 hidden lg:block'
                    }`}
                  >
                    {project}
                  </span>
                );
              })}
            </span>
          </p>
          <span className="text-xl lg:text-3xl italic">
            that make an impact.
          </span>
        </aside>
        <Image
          alt="image of esra akbulat"
          src={esra}
          width={280}
          height={280}
          placeholder="blur"
          className="border-8 rounded-full border-t-yellow-400 border-l-yellow-400 border-r-orange-500 border-b-orange-500 mx-auto col-span-2 w-2/5 h-2/5 md:w-52 md:h-52 xl:h-auto xl:w-auto mb-4 lg:mb-0"
        />
      </div>
      <Link
        href="#contact"
        className="px-4 py-1 lg:px-6 lg:py-2 bg-yellow-400 w-fit text-base lg:text-xl rounded-md"
        aria-label="Navigate to the contact form on the website"
      >
        Lets talk
      </Link>
      {showScrollButton && (
        <Link href={'#home'} scroll aria-label="Navigate to top of the page">
          <Image
            alt="scroll-up icon"
            src={'/icons/up.svg'}
            className="hidden lg:block fixed right-10 bottom-10 dark:bg-special_white dark:rounded-full dark:p-2 dark:w-10"
            width={30}
            height={30}
          />
        </Link>
      )}
    </div>
  );
};
export default Home;
