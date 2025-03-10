import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex gap-x-28 h-full mt-[500px] justify-center text-muted-foreground w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 2.0, ease: "easeOut" }}
      >
        <h1>olá!</h1>
        <span className="text-2xl">Meu nome é Rafaela :)</span>
        <p className="font-extralight">Sou desenvolvedora Front-End com foco em React e TypeScript.</p>
      </motion.div>

      <div className="bg-primary flex h-48 items-center justify-center rounded-full w-48">
        <img src="/rcf-memoji.png" height={120} width={120} />
      </div>
    </div>
  );
};

export default Home;
