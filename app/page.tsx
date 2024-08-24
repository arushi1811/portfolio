import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { Title } from "./ui/title";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Title />
        </div>
    </main>
  );
}
