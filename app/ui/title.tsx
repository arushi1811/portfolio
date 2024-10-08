"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import me from '@/public/memoji.svg'

export function Title() {
  return (
    <div className="flex flex-col gap-6 items-center">
    <Image
      src={me}
      width={200}
      height={200}
      alt="Arushi Gupta"
    />
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
        className="text-4xl px-4 md:text-6xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center"
        >
       Hi! I&apos;m{" "}
        <Highlight className="text-black dark:text-white">
          Arushi
        </Highlight>
      <p className="font-normal pt-4 text-sm md:text-base lg:text-lg">
      Front-End | Full-Stack | AWS Certified Solutions Architect
      </p>
      </motion.h1>
    </HeroHighlight>
        </div>
  );
}
