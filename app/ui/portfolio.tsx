import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import orbis from "./orbis.svg";
import asl from "./asl.svg";

export function Portfolio() {
  return (
    <BentoGrid className="max-w-4xl mx-auto pt-20">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

function Orbis() {
  return (
    <Suspense fallback={<Skeleton />}>
      <a className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" href="https://github.com/arushi1811/orbis" target="_blank">
        <Image src={orbis} alt="Orbis company logo" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
      </a>
    </Suspense>
  );
}

function Blendo() {
  return (
    <Suspense fallback={<Skeleton />}>
      <a className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" href="https://github.com/arushi1811/blendr" target="_blank">
        <Image src='/blendo.jpg' alt="Blendo company logo" width={200} height={200} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
      </a>
    </Suspense>
  );
}

function ASL() {
  return (
    <Suspense fallback={<Skeleton />}>
      <a className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" href="https://devpost.com/software/aslplay" target="_blank">
        <Image src={asl} alt="ASLPlay company logo" width={200} height={200} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
      </a>
    </Suspense>
  );
}

function Acme() {
  return (
    <Suspense fallback={<Skeleton />}>
      <a className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center items-center bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" href="https://arushi1811.github.io/acme/#" target="_blank">
      <h2 className="md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 " >
        Acme Co.
      </h2>
      </a>
    </Suspense>
  );
}

function Elsa() {
  return (
    <Suspense fallback={<Skeleton />}>
      <a className="px-10 flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center items-center bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" href="https://www.elsaevents.com/" target="_blank">
      <h2 className="md:text-5xl font-bold text-amber-900 dark:text-neutral-500" >
        Elsa Events
      </h2>
      </a>
    </Suspense>
  );
}

function Email() {
  return (
    <Suspense fallback={<Skeleton />}>
      <a className="px-10 flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center items-center bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" href="https://github.com/arushi1811/grid-featured-component" target="_blank">
      <h2 className="md:text-5xl font-bold text-neutral-800 dark:text-neutral-500" >
        Email Marketing
      </h2>
      </a>
    </Suspense>
  );
}

const items = [
  {
    title: "Orbis",
    description:
      "A platform to study with friends | Winner: Tech Together Boston",
    header: <Orbis />,
  },
  {
    title: "Blendo",
    description: "An algorithm that creates diverse and high-performing teams | Winner: Hydrangea Hacks",
    header: <Blendo />,
  },
  {
    title: "ASL Play",
    description: "An app to learn sign language | Winner: Best Gamification by Microsoft",
    header: <ASL />,
  },
  {
    title: "Acme Tech Landing Page",
    description:
      "A hyper-responsive landing page for tech companies.",
    header: <Acme />,
  },
  {
    title: "Elsa Events",
    description: "An SEO optimized application for an events company",
    header: <Elsa />,
  },
  {
    title: "Email Template",
    description: "A responsive email template for marketing",
    header: <Email />,
  },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
];
