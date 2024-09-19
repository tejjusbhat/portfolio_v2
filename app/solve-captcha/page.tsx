"use client";

import { useState, ChangeEvent, DragEvent } from "react";
import Image from "next/image";
import uploadIcon from "@/public/images/upload.svg";
import Modal from "@/components/Modal"; // Import Modal component

const CaptchaSolver: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState<string>(uploadIcon);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // State to control modal visibility
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to control loading status
  const API_KEY = "1234567890";

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle the File input preview
  const previewImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = function () {
      if (reader.result) {
        setPreviewSrc(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle file drop event (Drag & Drop)
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      previewImage(files[0]);
    }
  };

  // Prevent default behavior when dragging over the element
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle file input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      previewImage(file);
    }
  };

  // Process image and send it to the FastAPI server
  const processImage = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    setIsLoading(true); // Start loading
    const formData = new FormData();
    formData.append("file", selectedFile); // Add the file to the FormData

    try {
      const response = await fetch(
        `https://captcha-solver-api-529689135074.us-central1.run.app/process_image?api_key=${API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      setPreviewSrc(objectUrl); // Update preview with the annotated image
    } catch (error) {
      console.error("Error processing the image:", error);
    } finally {
      setIsLoading(false); // Stop loading after the response
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background relative">
      <h1 className="text-text text-5xl font-extrabold mb-8">SOLVE CAPTCHA</h1>

      {/* Use the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <div
        className="inline-block relative text-text text-xl font-semibold text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor="image-input" className="cursor-pointer">
          <Image
            id="preview"
            src={previewSrc}
            alt="Upload"
            width={400}
            height={400}
            className="mb-2 w-full max-w-[300px] cursor-pointer"
          />
          <br />
          <p>Drag & Drop or Click to Upload</p>
        </label>
        <input
          type="file"
          accept="image/*"
          id="image-input"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      <button
        onClick={processImage}
        disabled={isLoading} // Disable button when loading
        className={`mt-8 px-6 py-2 bg-primary text-background rounded-md text-lg font-bold hover:scale-105 transform transition-transform duration-300 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Solve Captcha"}
      </button>
    </div>
  );
};

export default CaptchaSolver;
