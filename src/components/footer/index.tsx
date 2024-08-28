import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-36 py-8 flex flex-col gap-8">
      <section className="flex gap-12 mx-auto">
        <Link href={'https://github.com/akbulatesra'} target="_blank">
          <Image
            alt="github"
            src={'/icons/github.svg'}
            width={40}
            height={40}
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
          />
        </Link>
        <Link href={'https://medium.com/@a.esra.akbulat'} target="_blank">
          <Image
            alt="medium"
            src={'/icons/medium.svg'}
            width={40}
            height={40}
          />
        </Link>
      </section>
      <p className="text-sm text-center">© 2024 Esra Akbulat</p>
    </footer>
  );
};
export default Footer;
