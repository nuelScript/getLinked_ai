import { bronze, gold, silver, trophy } from "@/public/images/images";
import Image from "next/image";

const PrizeSection = () => {
  return (
    <div className="flex flex-col space-y-6 min-[1300px]:my-28 my-20 min-[1300px]:mx-28">
      <div className="flex flex-col min-[1300px]:items-end items-center space-y-4">
        <h3 className="text-white leading-snug text-center min-[1300px]:text-left text-3xl min-[1300px]:text-4xl font-bold">
          Prizes and
          <br />
          <span className="text-secondary3">Rewards</span>
        </h3>
        <p className="text-base text-white font-medium text-center min-[1300px]:text-left min-[1300px]:w-[30%] w-2/3">
          Highlights of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex space-x-4">
        <Image src={trophy} width={548} height={482} alt="trophy" />
        <div className="flex gap-x-4">
          <div className="border bg-transparent/50 opacity-30 backdrop-blur-sm rounded-md">
            <Image
              src={silver}
              alt="position"
              className="z-20 w-[180px] h-[180px] absolute top-0"
            />
            <p className="text-xl font-semibold ">
              <span className="font-bold text-lg"></span>
              Runner
            </p>
            <p className="text-xl font-bold">N300,000</p>
          </div>
          <div className="border bg-transparent/50 opacity-30 backdrop-blur-sm rounded-md">
            <Image
              src={gold}
              width={296}
              height={296}
              alt="position"
              className="z-20 absolute w-[296px] h-[296px] top-0"
            />
            <p className="text-xl font-semibold ">
              <span className="font-bold text-lg"></span>
              Runner
            </p>
            <p className="text-xl font-bold">N300,000</p>
          </div>
          <div className="border bg-transparent/50 opacity-30 backdrop-blur-sm rounded-md">
            <Image
              src={bronze}
              width={180}
              height={180}
              alt="position"
              className="z-20 absolute top-0"
            />
            <p className="text-xl font-semibold ">
              <span className="font-bold text-lg"></span>
              Runner
            </p>
            <p className="text-xl font-bold">N300,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;
