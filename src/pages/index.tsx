'use client';

import SoftAurora from "./component/SoftAurora"; // npm install ogl
import SplitText from "./component/SplitText"; // npm install @gsap/react
import TextType from "./component/TextType"; // npm install gsap

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
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
            className="glow-cinematic text-4xl font-bold tracking-tight text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
      </div>
      <div className="text-center">
        <TextType 
            as="p"
            text={["Welcome to Landingpage!", "Build some amazing experiences!", "Happy coding!"]}
            className="mt-2 text-lg text-zinc-600 dark:text-zinc-400"
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
      </div>
    </main>
  );
}
