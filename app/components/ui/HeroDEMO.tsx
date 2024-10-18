"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import { useState } from "react";

export function HeroHighlightDemo({
  title,
  color,
}: {
  title: string;
  color: "red" | "blue";
}) {
  const [turnBlack, setTurnBlack] = useState(false);
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      onAnimationComplete={() => {
        setTimeout(() => setTurnBlack(true), 2000);
      }}
      className={`text-3xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-left my-5 font-Roboto`}
    >
      <Highlight
        className={`${color === "blue" ? "text-black" : "text-white"}`}
        color={color}
      >
        {title}
      </Highlight>
    </motion.h1>
  );
}
