import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { Title } from "./ui/title";
import { Navbar } from "./ui/navbar";
import { Subtitle } from "./ui/subtitle";
import { Stack } from "./ui/stack";
import { Workexp } from "./ui/workexp";
import { Portfolio } from "./ui/portfolio";

const aboutMeDescr = [
  "My name is Arushi Gupta and I'm a Software Engineer with 6 years of experience. My specialization is in Front-End development, mainly with React/Typescript.",
  "I have also single-handedly deployed serverless applications on AWS (Lambda, DynamoDB, S3 stack) and enjoy discussions on architecture and the trade-offs associated with it.",
  "I first started coding in 8th grade when I got my hands on a web-development textbook- I haven't looked back since. My passion is building, so whether it's assembling furniture from IKEA or developing a social-media platform from the ground up, you can count on me!"
]


export default function Home() {
  return (
    <main>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Title />
      </div>
      <div className="px-20 pt-6 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
        <Subtitle highlight="About" after=" me." descr={aboutMeDescr} />
        <Stack/>
      </div>
      <div className="px-20 pt-40 flex flex-col justify-center items-center gap-4">
        <Subtitle before="Work " highlight="Experience." />
        <Workexp/>
      </div>
      <div className="px-20 pt-40 flex flex-col justify-center items-center gap-4">
        <Subtitle highlight="Portfolio" after='Projects.' />
        <Portfolio/>
      </div>
    </main>
  );
}
