import { arrow, bigIdea } from "@/public/images/images";
import Image from "next/image";

const IdeaSection = () => {
  return (
    <div
      id="overview"
      className="flex flex-col space-y-16 min-[1300px]:space-y-0 min-[1300px]:flex-row min-[1300px]:items-center items-center justify-center min-[1300px]:my-28 my-20 min-[1300px]:mx-28"
    >
      <div className="flex min-[1300px]:justify-start justify-center relative space-y-8 w-1/2">
        <Image
          src={bigIdea}
          width={490}
          height={477}
          alt="Idea"
          className="object-center object-cover"
        />
        <Image
          src={arrow}
          alt="arrow"
          className="absolute -bottom-10 right-52"
        />
      </div>
      <div className="flex flex-col items-center min-[1300px]:items-start justify-center space-y-8 w-1/2">
        <h3 className="text-white leading-relaxed text-center min-[1300px]:text-left text-3xl min-[1300px]:text-4xl font-bold">
          Introduction to getlinked <br />
          <span className="text-secondary3">tech Hackathon 1.0</span>
        </h3>
        <p className="text-white text-base font-medium leading-loose text-center min-[1300px]:text-left min-[1300px]:w-4/5 w-full">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&aps;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </div>
  );
};

export default IdeaSection;
