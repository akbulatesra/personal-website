import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-6 py-4 lg:px-36 lg:py-8 flex flex-col gap-8 dark:bg-special_black dark:text-special_white 2xl:max-w-[1536]">
      <section className="flex gap-12 mx-auto">
        <Link href={'https://github.com/akbulatesra'} target="_blank">
          <Image
            alt="github"
            src={'/icons/github.svg'}
            width={40}
            height={40}
            className="w-7 lg:w-10 dark:bg-special_white dark:p-1.5 dark:rounded-full"
          />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/esra-akbulat/'}
          target="_blank"
        >
          <Image
            alt="linkedin"
            src={'/icons/linkedin.svg'}
            width={40}
            height={40}
            className="w-7 lg:w-10 dark:bg-special_white dark:p-1.5 dark:rounded-full"
          />
        </Link>
        <Link href={'https://medium.com/@a.esra.akbulat'} target="_blank">
          <Image
            alt="medium"
            src={'/icons/medium.svg'}
            width={40}
            height={40}
            className="w-7 lg:w-10 dark:bg-special_white dark:p-1.5 dark:rounded-full"
          />
        </Link>
      </section>
      <p className="text-sm md:text-base text-center">© 2024 Esra Akbulat</p>
    </footer>
  );
};
export default Footer;
