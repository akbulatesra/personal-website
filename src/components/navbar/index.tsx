"use client";
import Link from "next/link";
import { AppWindowMac, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav
      className="bg-special_white drop-shadow-md dark:shadow-darkMode  py-3 lg:px-6 px-3 font-roboto text-lg dark:bg-special_black dark:text-special_white"
      id="home"
    >
      <div className="flex justify-between items-center 2xl:max-w-[1536px] 2xl:mx-auto">
        <section className="relative z-10">
          <p className="text-xl md:text-2xl lg:text-3xl">Esra Akbulat</p>
        </section>
        <section className="relative" ref={menuRef}>
          <AppWindowMac
            className="md:hidden"
            role="button"
            onClick={() => setShowMenu(!showMenu)}
          />
          <div
            className={`${
              showMenu ? "flex" : "hidden"
            } flex-col md:flex md:flex-row lg:gap-6 md:gap-4 gap-2 items-center absolute md:relative right-0 shadow-lg bg-[#dddddd] p-2 w-max rounded-md lg:rounded-none md:w-auto lg:p-0 md:bg-inherit md:shadow-none dark:text-special_black md:dark:text-special_white`}
          >
            <Link href={"#about"} scroll onClick={() => setShowMenu(false)}>
              About me
            </Link>
            <Link
              href={"#experience"}
              scroll
              onClick={() => setShowMenu(false)}
            >
              Experience
            </Link>
            <Link href={"#skills"} scroll onClick={() => setShowMenu(false)}>
              Technical Skills
            </Link>
            <Link href={"#articles"} scroll onClick={() => setShowMenu(false)}>
              Articles
            </Link>
            <Link href={"#contact"} scroll onClick={() => setShowMenu(false)}>
              Get in touch
            </Link>
            {!mounted ? (
              <div className="w-6 h-6 animate-spin border-2 border-r-special_red rounded-full"></div>
            ) : (
              <button className="w-6 h-6" onClick={changeTheme}>
                {theme === "light" ? <Moon /> : <Sun />}
              </button>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
