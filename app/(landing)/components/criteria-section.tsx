import { Button } from "@/components/ui/button";
import { criteria } from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";

const CriteriaSection = () => {
  return (
    <div className="relative flex flex-col space-y-0 min-[1300px]:space-x-8 min-[1300px]:flex-row min-[1300px]:items-center items-center justify-center min-[1300px]:my-28 my-20 min-[1300px]:mx-28 z-10">
      <div className="absolute -bottom-6 left-0 w-[350px] h-[350px] bg-primary1 rounded-full filter blur-3xl opacity-30 z-10 animate-blob"></div>
      <div className="absolute -bottom-64 right-0 w-[300px] h-[300px] bg-primary1 rounded-full filter blur-3xl opacity-30 z-10 animate-blob"></div>
      <Image
        src={criteria}
        width={490}
        height={477}
        alt="Idea"
        className="object-center object-cover w-1/2 z-10"
      />
      {/* <div className="flex justify-center relative space-y-8 w-1/2 z-10">
        
      </div> */}
      <div className="flex flex-col items-center min-[1300px]:items-start justify-center space-y-8 w-1/2 z-10">
        <h3 className="text-white leading-relaxed text-center min-[1300px]:text-left text-3xl min-[1300px]:text-4xl font-bold">
          Judging Criteria
          <br />
          <span className="text-secondary3">Key attributes</span>
        </h3>
        <div className="flex flex-col min-[1300px]:space-y-8 space-y-4">
          <p className="text-white text-base font-medium leading-loose text-center min-[1300px]:text-left min-[1300px]:w-4/5 w-full">
            <span className="text-lg text-secondary4">
              Innovation and Creativity
            </span>
            : Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="text-white text-base font-medium leading-loose text-center min-[1300px]:text-left min-[1300px]:w-4/5 w-full">
            <span className="text-lg text-secondary4">Functionality</span>:
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="text-white text-base font-medium leading-loose text-center min-[1300px]:text-left min-[1300px]:w-4/5 w-full">
            <span className="text-lg text-secondary4">
              Impact and Relevance
            </span>
            : Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="text-white text-base font-medium leading-loose text-center min-[1300px]:text-left min-[1300px]:w-4/5 w-full">
            <span className="text-lg text-secondary4">
              Technical Complexity
            </span>
            : Evaluate the technical sophistication of the solution. Judges
            would consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <div className="flex min-[1300px]:justify-start justify-center">
            <Link href="/register">
              <Button
                variant="custom"
                className="px-10 rounded-sm py-6 min-[912px]:flex hidden"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaSection;
