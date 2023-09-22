import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/public/images/images";

const FAQSection = () => {
  return (
    <div
      id="FAQ"
      className="relative flex flex-col-reverse space-y-0 min-[1300px]:space-x-8 min-[1300px]:flex-row-reverse min-[1300px]:items-center items-center justify-center min-[1300px]:my-28 my-20 min-[1300px]:mx-28"
    >
      <Image
        src={faq}
        width={490}
        height={477}
        alt="faq-section"
        className="object-center object-cover w-1/2 z-10"
      />
      {/* <div className="flex justify-center relative space-y-8 w-1/2 z-10">
        
      </div> */}
      <div className="flex flex-col items-center min-[1300px]:items-start justify-center space-y-14 w-1/2 z-10">
        <div className="flex flex-col space-y-8 min-[1300px]:items-start items-center">
          <h3 className="text-white leading-relaxed text-center min-[1300px]:text-left text-3xl min-[1300px]:text-4xl font-bold">
            Frequently Ask
            <br />
            <span className="text-secondary3">Question</span>
          </h3>
          <p className="text-white text-base min-[1300px]:text-left text-center min-[1300px]:w-[60%] w-full">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="min-[1300px]:w-4/5 w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">
              Can I work on a project I started before the hackathon?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">
              What happens if I need help during the hackathon?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">
              What happens if I don&apos;t have an idea for a project?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white">
              Can I join a team or do I have to come with one?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-white">
              What happens after the hackathon ends
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-white">
              Can I work on a project I started before the hackathon?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
