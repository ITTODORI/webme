import { motion } from "framer-motion"; // npm install framer-motion
import { 
  Code2, 
  Layers, 
  Layout, 
  Video, 
  PenTool, 
  Scissors, 
  Palette 
} from "lucide-react";

const skills = [
  { name: "Python", icon: <Code2 size={18} /> },
  { name: "Javascript", icon: <Code2 size={18} /> },
  { name: "NextJS", icon: <Layers size={18} /> },
  { name: "PHP", icon: <Layout size={18} /> },
  { name: "Laravel", icon: <Layout size={18} /> },
  { name: "Adobe Illustrator", icon: <Palette size={18} /> },
  { name: "Adobe After Effect", icon: <Video size={18} /> },
  { name: "Capcut", icon: <Scissors size={18} /> },
  { name: "Davinci Resolve", icon: <Video size={18} /> },
  { name: "Figma", icon: <PenTool size={18} /> },
];

export default function TechLoop() {
  // Split skills into two halves for two rows
  const half = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, half);
  const secondRow = skills.slice(half);

  const Row = ({ items, reverse = false }: { items: typeof skills, reverse?: boolean }) => (
    <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      <motion.div
        animate={{ x: reverse ? ["-50%", 0] : [0, "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-4 py-2"
      >
        {[...items, ...items, ...items, ...items].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 border border-zinc-200 
            dark:border-zinc-800 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
            text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-teal-500/50 
            hover:text-black dark:hover:text-white transition-all duration-300"
          >
            <span className="text-zinc-400 group-hover:text-teal-500">
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="mt-5 flex flex-col gap-1 w-full max-w-2xl mx-auto">
      <Row items={firstRow} />
      <Row items={secondRow} reverse={true} />
    </div>
  );
}