'use client';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Spinner, Button } from 'flowbite-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className="bg-special_white drop-shadow-md dark:shadow-darkMode flex justify-between items-center py-3 px-6  font-roboto text-lg dark:bg-special_black dark:text-special_white"
      id="home"
    >
      <section className="relative z-10">
        <p className="text-3xl">Esra Akbulat</p>
      </section>
      <section>
        <div className="flex gap-6 items-center">
          <Link href={'#about'} scroll replace>
            About me
          </Link>
          <Link href={'#experience'} scroll>
            Experience
          </Link>
          <Link href={'#skills'} scroll>
            Technical Skills
          </Link>
          <Link href={'#articles'} scroll>
            Articles
          </Link>
          <Link href={'#contact'} scroll>
            Get in touch
          </Link>
          {!mounted ? (
            <div className="w-6 h-6 animate-spin border-2 border-r-special_red rounded-full">
              {''}
            </div>
          ) : (
            <button className="w-6 h-6" onClick={changeTheme}>
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          )}
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
