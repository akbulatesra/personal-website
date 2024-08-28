import { technicalSkilss } from '@/utils/technicalSkills';
import { FileCode2 } from 'lucide-react';

import Image from 'next/image';

const TechnicalSkills = () => {
  return (
    <div className="flex flex-col gap-12 h-[80vh] pt-10" id="skills">
      <h2 className="text-6xl mb-0">Technical Skills</h2>
      <div className="grid grid-cols-3 gap-5 text-xl">
        {technicalSkilss.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 dark:shadow-darkMode p-1"
            >
              {skill.icon ? (
                <Image
                  alt={skill.name}
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
