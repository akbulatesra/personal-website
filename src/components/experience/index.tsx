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
    <div className="flex flex-col gap-12 mb-40 pt-10" id="experience">
      <h2 className="text-6xl mb-0">Experience</h2>
      <div className="grid grid-cols-2 gap-12 relative">
        <Image
          src="/icons/blob.svg"
          alt="blob"
          width={600}
          height={600}
          className="absolute left-0 right-0 mx-auto bottom-0 top-0 my-auto animate-blobAnimate dark:hidden"
        />
        <section className="shadow-lg dark:shadow-darkMode px-8 py-4 flex flex-col">
          <div className="text-xl flex mb-4 items-center gap-4">
            <BriefcaseBusiness className="w-8 h-8" color="orange" />
            <div>
              <div>Frontend Developer at Figopara</div>
              <div className="text-base">February 2024 - August 2024</div>
            </div>
          </div>
          <p className="text-xl mb-4 text-justify">
            Figopara is a financial technology company that provides trade
            finance solutions to businesses, enabling them to convert their
            invoiced receivables into cash before they become due. During the
            specified period, I worked as a front-end developer on two main
            projects of the software team. One of these projects consisted of
            function-based components using a modern React structure and the
            other consisted of a traditional class-based React structure. The
            main technologies I used were;
          </p>
          <div className="text-xl ml-2">
            {listItemsFigo.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <CodeXml
                    width={30}
                    height={30}
                    className="flex-shrink-0 mr-3"
                    color="purple"
                  />
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="shadow-lg dark:shadow-darkMode px-8 py-4 flex flex-col">
          <div className="text-xl flex mb-4 items-center gap-4">
            <BriefcaseBusiness className="w-8 h-8" color="orange" />
            <div>
              <div>Frontend Developer at Klinikya Tech</div>
              <div className="text-base">November 2022 - January 2024</div>
            </div>
          </div>
          <p className="text-xl mb-4 text-justify">
            Klinikya is a healthcare technology company that connects people
            with healthcare providers. In this company I played an active role
            in the development of the Klinikya web application and the
            preparation of the administration pages. At the same time, I created
            landing pages for Klinikya and Vepturn, focusing on professional
            design and functionality. Within the framework of the projects I was
            involved in;
          </p>
          <div className="text-xl ml-2 mt-auto">
            {listItemsKlinikya.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <CodeXml
                    width={30}
                    height={30}
                    className="flex-shrink-0 mr-3"
                    color="purple"
                  />
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Experience;
