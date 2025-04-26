import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const AboutIcons = () => {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/uc?export=download&id=1Q0Mmj4z4aVtgOaiM60JG9A9biM7ELb8n";
    window.open(cvUrl, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/rafaela-chinaglia-ferreira/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleGithubClick = () => {
    window.open(
      "https://github.com/rafaelachinaglia",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex gap-x-8 items-center w-full">
      <Button onClick={handleDownloadCV}>
        <Download /> Baixar CV
      </Button>
      <Linkedin
        className="cursor-pointer text-primary"
        onClick={handleLinkedinClick}
      />
      <Github
        className="cursor-pointer text-primary"
        onClick={handleGithubClick}
      />
      {/* <div className="flex text-primary gap-x-2 items-center">
        <Mail />
        <span className="text-sm">rafaelachinaglia@hotmail.com</span>
      </div> */}
    </div>
  );
};

export default AboutIcons;
