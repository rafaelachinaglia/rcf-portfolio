import { Download, Linkedin } from "lucide-react";
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

  return (
    <div className="flex gap-x-8 items-center w-full">
      <Button onClick={handleDownloadCV}>
        <Download /> Baixar CV
      </Button>
      <Linkedin
        className="cursor-pointer text-primary"
        onClick={handleLinkedinClick}
      />
    </div>
  );
};

export default AboutIcons;
