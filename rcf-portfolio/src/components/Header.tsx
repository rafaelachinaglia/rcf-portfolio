import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  setCurrentPage: (page: "home" | "about" | "projects" | "contact") => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex w-full px-5 pt-5 justify-between">
      <div>
        <span className="font-extrabold text-2xl text-primary">RCF</span>
      </div>
      <div className="text-right">
        <Button variant="link" onClick={() => setCurrentPage("home")}>Home</Button>
        <Button variant="link" onClick={() => setCurrentPage("about")}>Sobre</Button>
        <Button variant="link" onClick={() => setCurrentPage("projects")}>Projetos</Button>
        <Button variant="link" onClick={() => setCurrentPage("contact")}>Contato</Button>
        <Button variant="link" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <SunIcon className="font-extrabold" /> : <MoonIcon className="font-extrabold" />}
        </Button>
      </div>
    </div>
  );
};

export default Header;
