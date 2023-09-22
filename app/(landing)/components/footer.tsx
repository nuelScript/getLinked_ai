import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import SectionList from "./section-list";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-12 py-10 px-10 sm:px-14 md:px-16 lg:px-20 xl:px-32">
      <div className="flex min-[1300px]:flex-row flex-col min-[1300px]:justify-between min-[1300px]:space-y-0 space-y-8 min-[1300px]:items-start items-center">
        <div className="flex flex-col space-y-6 md:space-y-12 min-[1300px]:w-3/5 min-[1300px]:items-start items-center">
          <div className="flex flex-col space-y-2 min-[1300px]:items-start items-center text-center min-[1300px]:text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              get<span className="text-secondary3">linked</span>
            </h3>
            <p className="text-base text-white font-medium min-[1300px]:w-2/3 lg:w-2/3 md:w-5/6">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="flex items-center space-x-4 text-white text-base font-medium">
            <span>Terms of Use</span>{" "}
            <div className="h-4 border border-secondary3"></div>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="flex flex-col min-[1300px]:w-1/3 w-full min-[1300px]:items-start items-center">
          <SectionList className="space-y-4" title="Useful Links">
            <Link
              className="text-white text-base font-medium hover:text-secondary3"
              href="#"
            >
              Overview
            </Link>
            <Link
              className="text-white text-base font-medium hover:text-secondary3"
              href="#"
            >
              Timeline
            </Link>
            <Link
              className="text-white text-base font-medium hover:text-secondary3"
              href="#"
            >
              FAQs
            </Link>
            <Link
              className="text-white text-base font-medium hover:text-secondary3"
              href="/register"
            >
              Register
            </Link>
            <Link href="#">
              <div className="flex space-x-4 items-center">
                <p className="text-base text-secondary3">Follow us</p>
                <Instagram className="h-6 w-6 text-white" />
                <Twitter className="h-6 w-6 text-white" />
                <Facebook className="h-6 w-6 text-white" />
                <Linkedin className="h-6 w-6 text-white" />
              </div>
            </Link>
          </SectionList>
        </div>
        <div className="flex flex-col min-[1300px]:w-1/3 min-[1300px]:items-start items-center">
          <SectionList className="space-y-8 w-[235px]" title="Contact Us">
            <p className="space-x-4 text-base text-white font-medium">
              <PhoneCall className="h-5 w-5 text-white inline-block" />
              <span className="">+234 6707653444</span>
            </p>
            <p className="space-x-4 text-base text-white font-medium md:w-2/3 w-2/3">
              <MapPin className="h-5 w-5 text-white inline-block" />
              <span className="">27,Alara Street Yaba 100012 Lagos State</span>
            </p>
          </SectionList>
        </div>
      </div>
      <footer className="flex justify-center text-white text-base font-medium">
        All rights reserved. © getlinked Ltd.
      </footer>
    </div>
  );
};

export default Footer;
