"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

export function Subtitle({before, highlight, after, descr}: {
    readonly before?: string 
    readonly highlight?: string 
    readonly after?: string;
readonly descr?: ReadonlyArray<string>}) {
  return (
    <HeroHighlight>
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
        className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug"
      >
        {before ? before : ''}
        <Highlight className="text-black dark:text-white">{highlight ? highlight : ''}</Highlight> {after ? after : ''}
        {descr?.map((desc, idx) => (
            <p key={idx} className="font-normal pt-4 text-sm md:text-base lg:text-lg antialiased text-justify">
                {desc}
            </p>
        ))}
      </motion.h1>
    </HeroHighlight>
  );
}
