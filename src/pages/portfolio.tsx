'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProfileContent from "./component/Profile";
import Slide from "./component/Slide";
import Price from "./component/Price";
import Footer from "./component/Footer";

/**
 * MAIN PORTFOLIO PAGE
 */
const Portfolio = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-black scroll-smooth min-h-screen">
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen w-full z-0 overflow-hidden flex items-center justify-center">
          <ProfileContent />
        </div>

        <div className="sticky top-0 h-screen w-full z-10 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full pointer-events-auto">
            <MeteorSection scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <section className="relative z-20 min-h-screen bg-black flex items-center justify-center">
        <Price />
      </section>

      <Footer />
    </div>
  );
};

/**
 * SLIDE Content
 */
const MeteorSection = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);

  return (
    <motion.div 
      style={{ scale, y }}
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black font-sans selection:bg-emerald-500/30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <Slide />
    </motion.div>
  );
};

export default Portfolio;