import React from 'react';
import { technicalSkilss } from '@/utils/technicalSkills';
import { FileCode2 } from 'lucide-react';
import Image from 'next/image';

const TechnicalSkills = () => {
  return (
    <div
      className="flex flex-col lg:gap-12 md:gap-8 gap-4 xl:h-[80vh] 2xl:h-auto lg:pt-10 2xl:mb-32"
      id="skills"
    >
      <h2 className="text-3xl lg:text-6xl mb-0">Technical Skills</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 text-base lg:text-xl self-center md:self-auto">
        {technicalSkilss.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 dark:shadow-darkMode p-1"
            >
              {skill.icon ? (
                <Image
                  alt={`${skill.name} icon`}
                  src={skill.icon}
                  width={20}
                  height={20}
                />
              ) : (
                <FileCode2 width={20} height={20} />
              )}
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TechnicalSkills;
