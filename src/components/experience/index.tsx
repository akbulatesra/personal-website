import React from 'react';
import { CodeXml, BriefcaseBusiness } from 'lucide-react';
import Image from 'next/image';

const listItemsFigo = [
  'Redux and Context API for state management',
  'RTK query for connecting backend services',
  'Typescript as project language',
  'Mui material components customised to the project design',
  'React Hook Form for form validation',
  'It can be summarised as i18n for the integration of different languages. In addition, various hook developments have been provided depending on the project needs.',
];
const listItemsKlinikya = [
  'Redux for state management',
  'Next.js and TypeScript for project optimisation',
  'React Native for the development of the Klinikya mobile application',
  "SignalR's Hub Connection for real-time communication",
  'Twilio for users to make video calls',
  'Moka payment system for payments',
  'I worked with Microsoft Cognitive Search technologies for users to access the offered services',
];

const Experience = () => {
  return (
    <div
      className="flex flex-col lg:gap-12 md:gap-8 gap-4 xl:mb-40 2xl:mb-32 xl:pt-10"
      id="experience"
    >
      <h2 className="text-3xl lg:text-6xl mb-0">Experience</h2>
      <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-8 gap-4 relative">
        <Image
          src="/icons/blob.svg"
          alt=" "
          width={600}
          height={600}
          className="hidden lg:block absolute left-0 right-0 mx-auto bottom-0 top-0 my-auto animate-blobAnimate dark:hidden"
        />
        <div className="shadow-lg dark:shadow-darkMode lg:px-8 lg:py-4 p-4 flex flex-col">
          <div className="text-base lg:text-xl flex mb-4 items-center gap-4">
            <BriefcaseBusiness
              className="lg:w-8 lg:h-8 w-6 h-6"
              color="orange"
            />
            <div>
              <h2>Frontend Developer at Figopara</h2>
              <div className="text-sm md:text-base lg:text-base">
                February 2024 - August 2024
              </div>
            </div>
          </div>
          <p className="text-base lg:text-xl lg:mb-4 mb-2 text-justify">
            Figopara is a financial technology company that provides trade
            finance solutions to businesses, enabling them to convert their
            invoiced receivables into cash before they become due. During the
            specified period, I worked as a front-end developer on two main
            projects of the software team. One of these projects consisted of
            function-based components using a modern React structure and the
            other consisted of a traditional class-based React structure. The
            main technologies I used were;
          </p>
          <div className="text-sm md:text-base lg:text-xl ml-2">
            {listItemsFigo.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <CodeXml
                    width={30}
                    height={30}
                    className="flex-shrink-0 lg:mr-3 mr-1.5 w-4 lg:w-auto"
                    color="purple"
                  />
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="shadow-lg dark:shadow-darkMode lg:px-8 lg:py-4 p-4 flex flex-col">
          <div className="text-base lg:text-xl flex mb-4 items-center gap-4">
            <BriefcaseBusiness
              className="lg:w-8 lg:h-8 w-6 h-6"
              color="orange"
            />
            <div>
              <h2>Frontend Developer at Klinikya Tech</h2>
              <div className="text-sm md:text-base lg:text-base">
                November 2022 - January 2024
              </div>
            </div>
          </div>
          <p className="text-base lg:text-xl lg:mb-4 mb-2 text-justify">
            Klinikya is a healthcare technology company that connects people
            with healthcare providers. In this company I played an active role
            in the development of the Klinikya web application and the
            preparation of the administration pages. At the same time, I created
            landing pages for Klinikya and Vepturn, focusing on professional
            design and functionality. Within the framework of the projects I was
            involved in;
          </p>
          <div className="text-sm md:text-base lg:text-xl ml-2">
            {listItemsKlinikya.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <CodeXml
                    width={30}
                    height={30}
                    className="flex-shrink-0 lg:mr-3 mr-1.5 w-4 lg:w-auto"
                    color="purple"
                  />
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
