import { useTheme } from "@/components/ui/theme-provider";
import { motion } from "framer-motion";
import memoji from '/rcf-memoji.png';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 md:gap-x-28 p-4 ${
        theme === "dark" ? "text-white" : "text-muted-foreground"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">olá!</h1>
        <span className="text-xl md:text-2xl block mb-2">
          Meu nome é Rafaela :)
        </span>
        <p className="font-extralight max-w-xs md:max-w-md mx-auto md:mx-0">
          Sou desenvolvedora Front-End com foco em React e TypeScript.
        </p>
      </motion.div>

      <div className="bg-primary flex items-center justify-center rounded-full w-40 h-40 md:w-48 md:h-48">
        <img
          src={memoji}
          alt="Rafaela Memoji"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
