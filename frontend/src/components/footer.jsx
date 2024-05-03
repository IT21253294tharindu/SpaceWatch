// Footer.js
import React from "react";
import { AiFillCaretUp } from "react-icons/ai";

// Footer component to display the title and date of the images
export default function Footer({ handleToggleModal, data }) {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-purple-950 py-4 px-6 flex justify-between items-center shadow-lg rounded-t-lg">
      <div>
        <h1 className="text-xl font-bold text-white">{data?.title}</h1>
        <h2 className="text-sm text-white">{data?.date}</h2>
      </div>
      <button
        onClick={handleToggleModal}
        className="text-white bg-black hover:bg-blue-600 rounded-full p-2" 
      >
        <i className="arrow-up"><AiFillCaretUp className="size-5" /></i>
      </button>
      
    </footer>
  );
}
