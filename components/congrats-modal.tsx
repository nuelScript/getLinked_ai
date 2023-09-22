"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface CongratsModalprops {
  isOpen: boolean;
  onClose: () => void;
}

export const CongratsModal = ({ isOpen, onClose }: CongratsModalprops) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Congratulations you have successfully Registered!"
      description="Yes, it was easy and you did it! check your mail box for next step 😉"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Button variant="custom" onClick={onClose}>
        Back
      </Button>
    </Modal>
  );
};
