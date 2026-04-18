import { Briefcase, Gamepad2, FolderOpen, Mail } from "lucide-react"; // npm install lucide-react

const navItems = [
  { name: "Portfolio", icon: <Briefcase size={20} />, href: "#" },
  { name: "Games", icon: <Gamepad2 size={20} />, href: "#" },
  { name: "Project", icon: <FolderOpen size={20} />, href: "#" },
  { name: "Contact Me", icon: <Mail size={20} />, href: "#" },
];

export default function NavbarBottom() {
  return (
    <nav className="fixed bottom-8 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-2xl">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:bg-white/20 dark:text-white"
        >
          {item.icon}
          <span className="hidden sm:block">{item.name}</span>
        </a>
      ))}
    </nav>
  );
}