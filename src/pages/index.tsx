'use client';

import Link from "next/link";
import SoftAurora from "./component/SoftAurora"; // npm install ogl
import SplitText from "./component/SplitText"; // npm install @gsap/react
import TextType from "./component/TextType"; // npm install gsap
import TechLoop from "./component/TechLoop"; // npm install framer-motion
import NavbarBottom from "./component/Navbar"; // npm install lucide-react
import BorderGlow from "./component/BorderGlow";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <main className="rrelative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <div className="fixed inset-0 z-0">
        <SoftAurora
          speed={0.8}
          scale={1.8}
          brightness={1.2}
          color1="#2fca56"
          color2="#03d3fc"
          noiseFrequency={3.0}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      <div className="z-10 flex h-screen w-full flex-col items-center justify-center">
        <SplitText
          text="Ustad Coding"
          className="glow-cinematic text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white"
          delay={50}
          duration={1.2}
          ease="power4.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

          <div className="text-center">
            <TextType 
              as="p"
              text={["Welcome to Landingpage!", "Build some amazing experiences!", "Happy coding!"]}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400"
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="/#"
                className="group relative px-8 py-3 rounded-full bg-zinc-900 text-white font-medium hover:scale-105 active:scale-95 dark:bg-white dark:text-black transition-all shadow-xl"
              >
                Portfolio
              </Link>

              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={10}
                animated={true}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <a 
                  href="https://wa.me/6285600447763" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                  className="flex px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md text-zinc-900 dark:text-white font-medium hover:bg-white/40 dark:hover:bg-zinc-800/40 transition-all"
                >
                  Contact Me
                </a>
              </BorderGlow>
            </div>
          </div>

          <div className="relative z-10 pb-15 w-full flex justify-center">
            <TechLoop />
          </div>
      </div>

      <NavbarBottom/>
    </main>
  );
}