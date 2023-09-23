import { bronze, gold, silver, trophy } from "@/public/images/images";
import Image from "next/image";

const PrizeSection = () => {
  return (
    <div className="flex flex-col space-y-6 min-[1300px]:my-28 my-20 min-[1300px]:mx-28">
      <div className="flex flex-col min-[1300px]:items-end items-center space-y-4">
        <div className="flex justify-start w-[510px]">
          <h3 className="text-white leading-snug text-left min-[1300px]:text-left text-3xl min-[1300px]:text-4xl font-bold">
            Prizes and
            <br />
            <span className="text-secondary3">Rewards</span>
          </h3>
        </div>
        <p className="text-base text-white font-medium text-center min-[1300px]:text-left min-[1300px]:w-[30%] w-2/3">
          Highlights of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex min-[1300px]:justify-center min-[1300px]:flex-row flex-col items-center space-x-16">
        <Image src={trophy} width={548} height={482} alt="trophy" />
        <div className="flex gap-x-4 items-center">
          <div className="relative border bg-secondary3/10 opacity-95 rounded-md flex flex-col justify-end p-8 h-[296px]">
            <Image
              src={silver}
              alt="position"
              className="z-20 w-[180px] h-[180px] absolute top-0 right-0"
            />
            <p className="text-xl font-semibold text-white text-center">
              <span className="font-bold text-3xl">2nd</span> <br />
              Runner
            </p>
            <p className="text-xl font-bold text-secondary3">N300,000</p>
          </div>
          <div className="relative border bg-secondary2/5 opacity-90 rounded-md flex flex-col justify-end p-8 h-[296px] mt-8">
            <Image
              src={gold}
              width={296}
              height={296}
              alt="position"
              className="z-20 absolute w-[500px] h-[500px] -top-60 right-0"
            />
            <p className="text-xl font-semibold text-white text-center">
              <span className="font-bold text-3xl">1st</span> <br />
              Runner
            </p>
            <p className="text-xl font-bold text-secondary3">N400,000</p>
          </div>
          <div className="relative border bg-secondary3/10 opacity-95 rounded-md flex flex-col justify-end p-8 h-[296px]">
            <Image
              src={bronze}
              width={180}
              height={180}
              alt="position"
              className="z-20 absolute top-0 right-0"
            />
            <p className="text-xl font-semibold text-white text-center">
              <span className="font-bold text-3xl">3rd</span> <br />
              Runner
            </p>
            <p className="text-xl font-bold text-secondary3">N150,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;
