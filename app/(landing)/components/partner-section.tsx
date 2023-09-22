import Image from "next/image";

import {
  liberty,
  libertyCompany,
  paybox,
  vizualPlus,
  winwise,
  wisper,
} from "@/public/images/images";

const PartnerSection = () => {
  return (
    <div className="flex flex-col space-y-12 min-[1300px]:my-20 my-10">
      <div className="flex flex-col items-center space-y-8">
        <h3 className="text-2xl text-white font-semibold">
          Partners and Sponsors
        </h3>
        <p className="text-base text-white font-medium text-center min-[1300px]:w-[30%] w-2/3">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="flex flex-col border border-secondary3 min-[1300px]:px-20 py-10 ">
        <div className="flex flex-col space-y-6 items-center ">
          <div className="flex items-center space-x-14">
            <Image
              src={liberty}
              width={121}
              height={114}
              alt="company1"
              className="object-cover object-center"
            />
            <div className="h-28 border-2 border-secondary3"></div>
            <Image
              src={libertyCompany}
              width={214}
              height={41}
              alt="company2"
              className="object-cover object-center"
            />
            <div className="h-28 border-2 border-secondary3"></div>
            <Image
              src={winwise}
              width={132}
              height={107}
              alt="company3"
              className="object-cover object-center mx-10"
            />
          </div>
          <div className="flex space-x-20">
            <div className="w-64 border-2 border-secondary3"></div>
            <div className="w-64 border-2 border-secondary3"></div>
            <div className="w-64 border-2 border-secondary3"></div>
          </div>
          <div className="flex items-center space-x-14 ml-24">
            <Image
              src={wisper}
              width={121}
              height={114}
              alt="company1"
              className="object-cover object-center"
            />
            <div className="h-28 border-2 border-secondary3"></div>
            <Image
              src={paybox}
              width={214}
              height={41}
              alt="company2"
              className="object-cover object-center"
            />
            <div className="h-28 border-2 border-secondary3"></div>
            <Image
              src={vizualPlus}
              width={231}
              height={107}
              alt="company3"
              className="object-cover object-center mx-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
