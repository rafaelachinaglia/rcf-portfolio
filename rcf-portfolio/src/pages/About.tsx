import AboutIcons from "@/components/AboutIcons";
import AboutSkills from "@/components/AboutSkills";
import AboutText from "@/components/AboutText";

const About = () => {
  return (
    <div className="px-96 items-center justify-center">
      <div className="grid grid-cols-3 gap-x-20">
        <div className="col-span-3 mb-6">
          <h1>sobre</h1>
        </div>
        <div className="col-span-1 mt-4">
          <AboutText />
        </div>
        <div className="col-span-2">
          <AboutSkills />
        </div>
        <div className="col-span-3">
          <AboutIcons />
        </div>
      </div>
    </div>
  );
};

export default About;
