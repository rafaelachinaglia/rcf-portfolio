import { useState } from "react";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ui/theme-provider";

interface HeaderProps {
  setCurrentPage: (page: "home" | "about" | "projects" | "contact") => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex flex-col lg:flex-row justify-between items-center p-5">
      {/* Logo e botão hambúrguer */}
      <div className="w-full flex justify-between items-center">
        <span className="font-extrabold text-2xl text-primary">RCF</span>
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Menu */}
      <nav
        className={`flex-col lg:flex-row lg:flex items-center gap-2 mt-4 lg:mt-0 ${
          isOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        <Button
          variant={theme === "dark" ? "dark" : "link"}
          onClick={() => {
            setCurrentPage("home");
            setIsOpen(false);
          }}
        >
          Home
        </Button>
        <Button
          variant={theme === "dark" ? "dark" : "link"}
          onClick={() => {
            setCurrentPage("about");
            setIsOpen(false);
          }}
        >
          Sobre
        </Button>
        <Button
          variant={theme === "dark" ? "dark" : "link"}
          onClick={() => {
            setCurrentPage("projects");
            setIsOpen(false);
          }}
        >
          Projetos
        </Button>
        <Button
          variant={theme === "dark" ? "dark" : "link"}
          onClick={() => {
            setCurrentPage("contact");
            setIsOpen(false);
          }}
        >
          Contato
        </Button>
        <Button
          variant={theme === "dark" ? "dark" : "link"}
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
