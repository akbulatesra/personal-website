'use client';
import { Carousel, FlowbiteCarouselTheme } from 'flowbite-react';
import Image from 'next/image';
const images = ['cat', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7'];
const customTheme: Partial<FlowbiteCarouselTheme> = {
  root: {
    base: 'relative h-full w-full',
    leftControl:
      'absolute -left-16 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl:
      'absolute -right-16 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full dark:bg-white/30 dark:group-hover:bg-white/50 dark:group-focus:outline-none group-focus:ring-4 group-focus:ring-white bg-gray-200 group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
  },
};

const CarouselComponent = () => {
  return (
    <div className="sm:h-64 md:h-96 mt-8 w-1/2 mx-auto">
      <Carousel pauseOnHover indicators={false} theme={customTheme}>
        {images.map((image, index) => {
          return (
            <Image
              src={`/images/${image}.JPG`}
              alt="cat"
              width={600}
              height={400}
              className="w-full object-contain h-[revert-layer]"
              key={index}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
