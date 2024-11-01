import React from 'react';
import CarouselComponent from '../carousel';

const About = () => {
  return (
    <section className="xl:mb-40 2xl:mb-32 xl:pt-10" id="about">
      <h2 className="text-3xl lg:text-6xl lg:mb-8 mb-4">About me</h2>
      <p className="text-base lg:text-xl mb-4 text-justify">
        In my professional life, I develop web applications using various
        frontend technologies, especially React and Typescript. In the process,
        I code the designs presented to me using tools such as figma etc.,
        adhering to clean code principles. I have worked with agile
        methodologies such as Scrum and Kanban in my projects. I believe that I
        contribute to myself and the teams I work with with my
        development-oriented perspective.
      </p>
      <p className="text-base lg:text-xl text-justify">
        My main goal is to have command of the technologies in my field and
        after this, to gain new knowledge in the side areas that will support my
        work.
      </p>
      <p className="text-base lg:text-xl text-justify mt-6">
        On a personal note, I have a tendency to pick on any cat that I see. See
        some examples below!
      </p>
      <CarouselComponent />
    </section>
  );
};
export default About;
