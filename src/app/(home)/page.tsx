import { ProjectForm } from "@/Modules/home/ui/components/project-form";
import { ProjectsList } from "@/Modules/home/ui/components/projects-list";
import Image from "next/image";


const page = () => {


  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Vide"
            width={50}
            height={50}
            className="hidden md:block"
          />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          Build Smarter with BrainBolt
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          Turn ideas into apps and websites — instantly with AI
        </p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
      <ProjectsList />
    </div>
  );
};

export default page;
