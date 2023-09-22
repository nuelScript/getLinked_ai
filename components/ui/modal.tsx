"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { congratulation } from "@/public/images/images";
import Image from "next/image";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="bg-transparent border border-secondary3 p-12">
        <DialogHeader className="flex flex-col space-y-4">
          <Image
            src={congratulation}
            alt="congrats"
            width={700}
            height={665}
            className="object-cover object-center"
          />
          <DialogTitle className="leading-normal text-xl w-full text-white text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="leading-snug font-medium text-base text-white text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
