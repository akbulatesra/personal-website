'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AppWindowMac, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}`;
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav
      className="bg-special_white drop-shadow-md dark:shadow-darkMode py-3 lg:px-6 px-3 font-roboto text-lg dark:bg-special_black dark:text-special_white"
      id="home"
    >
      <div className="flex justify-between items-center 2xl:max-w-[1536px] 2xl:mx-auto">
        <div className="relative z-10">
          <p className="text-xl md:text-2xl lg:text-3xl">Esra Akbulat</p>
        </div>
        <div className="relative" ref={menuRef}>
          <AppWindowMac
            className="md:hidden"
            role="button"
            onClick={() => setShowMenu(!showMenu)}
          />
          <div
            className={`${
              showMenu ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row lg:gap-6 md:gap-4 gap-2 items-center absolute md:relative right-0 shadow-lg bg-[#dddddd] p-2 w-max rounded-md lg:rounded-none md:w-auto lg:p-0 md:bg-inherit md:shadow-none dark:text-special_black md:dark:text-special_white`}
          >
            <Link
              href={'#about'}
              scroll
              onClick={() => setShowMenu(false)}
              aria-label="Navigate to the about me section on the website"
            >
              About me
            </Link>
            <Link
              href={'#experience'}
              scroll
              onClick={() => setShowMenu(false)}
              aria-label="Navigate to the experience section on the website"
            >
              Experience
            </Link>
            <Link
              href={'#skills'}
              scroll
              onClick={() => setShowMenu(false)}
              aria-label="Navigate to the technical skills section on the website"
            >
              Technical Skills
            </Link>
            <Link
              href={'#articles'}
              scroll
              onClick={() => setShowMenu(false)}
              aria-label="Navigate to the articles section on the website"
            >
              Articles
            </Link>
            <Link
              href={'#contact'}
              scroll
              onClick={() => setShowMenu(false)}
              aria-label="Navigate to the contact form on the website"
            >
              Get in touch
            </Link>
            {!mounted ? (
              <div className="w-6 h-6 animate-spin border-2 border-r-special_red rounded-full"></div>
            ) : (
              <>
                <button
                  className="w-6 h-6"
                  onClick={changeTheme}
                  aria-describedby="theme_button"
                >
                  {theme === 'light' ? (
                    <Moon aria-label="moon icon" />
                  ) : (
                    <Sun aria-label="sun icon" />
                  )}
                </button>
                <span id="theme_button">
                  {theme === 'light'
                    ? 'button for change theme light to dark'
                    : 'button for change theme dark to light'}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
