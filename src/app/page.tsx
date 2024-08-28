import About from '@/components/about';
import Experience from '@/components/experience';
import GetInTouch from '@/components/getInTouch';
import Home from '@/components/home';
import Medium from '@/components/medium';
import TechnicalSkills from '@/components/skills';

export default function Page() {
  return (
    <main className="flex flex-col">
      <Home />
      <About />
      <Experience />
      <TechnicalSkills />
      <Medium />
      <GetInTouch />
    </main>
  );
}
