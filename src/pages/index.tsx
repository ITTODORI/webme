'use client';

import SoftAurora from "./component/SoftAurora"; // npm install ogl
import SplitText from "./component/SplitText"; // npm install @gsap/react

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <div className="fixed inset-0 z-0"></div>

      <div className="z-10 flex h-screen w-full flex-col items-center justify-center"></div>
      <div className="text-center"></div>
    </main>
  );
}
