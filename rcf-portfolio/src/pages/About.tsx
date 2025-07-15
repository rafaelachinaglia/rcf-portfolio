import AboutIcons from "@/components/AboutIcons";
import AboutSkills from "@/components/AboutSkills";
import AboutText from "@/components/AboutText";

const About = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 xl:px-96 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-20 w-full">
        <div className="col-span-1 md:col-span-3 mb-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">sobre</h1>
        </div>

        <div className="col-span-1 mt-4">
          <AboutText />
        </div>

        <div className="col-span-1 md:col-span-2">
          <AboutSkills />
        </div>

        <div className="col-span-1 md:col-span-3">
          <AboutIcons />
        </div>
      </div>
    </div>
  );
};

export default About;
