// components/Modal.tsx

import React from "react";
import Image from "next/image";
import gridCaptcha from "@/public/images/grid-captcha-example.png"; // Import captcha image

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-50 z-50">
      <div className="bg-background bg-opacity-80 border border-text p-8 rounded-lg text-text text-center max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">Note: Test API in Use</h2>
        <p className="text-lg mb-4">
          This is a test API, and it only works on grid-based captchas. Like the one below...

        </p>
        <Image
          src={gridCaptcha}
          alt="Grid-based captcha example"
          width={150}
          height={100}
          className="mx-auto mb-4"
        />
        <p className="text-lg mb-4">
          So... use it with a grain of salt!
        </p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-text text-2xl font-bold hover:text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
