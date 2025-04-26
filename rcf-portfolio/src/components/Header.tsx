import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ui/theme-provider";

interface HeaderProps {
  setCurrentPage: (page: "home" | "about" | "projects" | "contact") => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex w-full px-5 pt-5 justify-between">
      <div>
        <span className="font-extrabold text-2xl text-primary">RCF</span>
      </div>
      <div className="text-right">
        <Button variant={theme === "dark" ? "dark" : "link"} onClick={() => setCurrentPage("home")}>
          Home
        </Button>
        <Button variant={theme === "dark" ? "dark" : "link"} onClick={() => setCurrentPage("about")}>
          Sobre
        </Button>
        <Button variant={theme === "dark" ? "dark" : "link"} onClick={() => setCurrentPage("projects")}>
          Projetos
        </Button>
        <Button variant={theme === "dark" ? "dark" : "link"} onClick={() => setCurrentPage("contact")}>
          Contato
        </Button>

        <Button variant={theme === "dark" ? "dark" : "link"} onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunIcon className="font-extrabold" />
          ) : (
            <MoonIcon className="font-extrabold" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Header;
