import ContactForm from "@/components/contact-form";
import { Instagram, Facebook, Linkedin, ChevronLeft } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-[915px]:space-y-0 space-y-10 items-center min-[915px]:flex-row min-[915px]:justify-between min-[915px]:items-start p-4 min-[915px]:p-20">
      <div className="flex-col space-y-8 pt-10 min-[915px]:flex hidden">
        <h1 className="font-bold text-2xl text-secondary3">Get in Touch</h1>
        <p className="flex flex-col text-white text-sm font-medium space-y-8">
          <span className="w-1/3">Contact Information</span>
          <span className="w-1/3">27,Alara Street Yaba 100012 Lagos State</span>
          <span>Call Us : 07067981819</span>
          <span className="w-4/6">
            we are open from Monday-Friday 08:00am - 05:00pm
          </span>
        </p>
        <h3 className="text-base font-medium text-secondary3">Share on</h3>
        <div className="inline-flex space-x-4 text-white">
          <Instagram />
          <Facebook />
          <Linkedin />
        </div>
      </div>
      <div className="w-full min-[915px]:hidden block sm:px-24 px-14 md:px-32 py-4">
        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b rounded-full from-primary2 to-primary1">
          <div className="w-7 h-7 flex justify-center items-center rounded-full bg-secondary1">
            <Link href="/">
              <ChevronLeft className="text-white h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="inline-flex min-[915px]:hidden flex-col space-y-2 items-center">
        <h3 className="text-base font-medium text-secondary3">Share on</h3>
        <div className="inline-flex min-[915px]:hidden space-x-4 text-white">
          <Instagram />
          <Facebook />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
