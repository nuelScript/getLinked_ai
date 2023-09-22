import { rules } from "@/public/images/images";
import Image from "next/image";

const RulesSection = () => {
  return (
    <div className="relative flex flex-col space-y-0 min-[1300px]:flex-row-reverse min-[1300px]:items-center items-center justify-center min-[1300px]:my-20 my- min-[1300px]:mx-28 z-10">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary1 rounded-full filter blur-3xl opacity-30 z-10 animate-blob"></div>
      <div className="absolute -bottom-64 right-0 w-[400px] h-[400px] bg-primary1 rounded-full filter blur-3xl opacity-30 z-10 animate-blob"></div>
      <Image
        src={rules}
        width={490}
        height={477}
        alt="Idea"
        className="object-center object-cover w-1/2 z-10"
      />
      {/* <div className="flex justify-center relative space-y-8 w-1/2 z-10">
        
      </div> */}
      <div className="flex flex-col items-center min-[1300px]:items-start justify-start space-y-8 w-1/2 z-10">
        <h3 className="text-white leading-relaxed text-center min-[1300px]:text-left text-3xl min-[1300px]:text-4xl font-bold">
          Rules and <br />
          <span className="text-secondary3">Guidelines</span>
        </h3>
        <p className="text-white text-base font-medium leading-loose text-center min-[1300px]:text-left min-[1300px]:w-4/5 w-full">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </div>
  );
};

export default RulesSection;
