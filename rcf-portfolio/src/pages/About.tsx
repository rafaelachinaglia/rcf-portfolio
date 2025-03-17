import AboutIcons from "@/components/AboutIcons";
import AboutSkills from "@/components/AboutSkills";
import AboutText from "@/components/AboutText";

const About = () => {
  return (
    <div className="px-96">
      <h1>sobre</h1>
      <div className="space-y-8 mt-8">
        <AboutText />
        <AboutSkills />
        <AboutIcons />
      </div>
    </div>
  );
};

export default About;
