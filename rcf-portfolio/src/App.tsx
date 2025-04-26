import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ui/theme-provider";

const pages = {
  home: <Home />,
  about: <About />,
  projects: <Projects />,
  contact: <Contact />,
};

const App = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "projects" | "contact">("home");

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="w-full h-screen flex flex-col">
        <Header setCurrentPage={setCurrentPage} />
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>
        </div>
        <Toaster richColors position="top-right" />
      </div>
    </ThemeProvider>
  );
};

export default App;
