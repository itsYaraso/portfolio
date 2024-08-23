"use client";
import Timeline from "./components/timeline";
import aboutMeSection from "./sections/aboutme";
import projectsSection from "./sections/projects";
import skillsSection from "./sections/skills";
import socialSection from "./sections/socialsection";
import namingSection from "./sections/naming";
import { BackgroundBeams } from "./components/backgroundBeams";
import { Background } from "./components/backgroundBoxes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36 ">
      <BackgroundBeams className="min-h-screen" />
      <Background />
      <section>
        {socialSection()}
      </section>

      <section className="">
        {namingSection()}
      </section>

      <section className="p-28">
        {aboutMeSection()}
      </section>

      <section className="pb-28" data-aos="fade-up">
        {skillsSection()}
      </section>

      <section className="pb-36">
        <Timeline />
      </section>

      <section className="pb-36">
        {projectsSection()}
      </section>
    </main>
  );
}
