import React from "react";

//sidebar component to display the details of the image
export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar fixed inset-0 flex justify-center items-center z-50">
      <div
        onClick={handleToggleModal}
        className="sidebarOverlay fixed inset-0 bg-black opacity-10"
      ></div>
      <div className="sidebarContents bg-gray-100 rounded-lg p-8 max-w-md shadow-lg flex flex-col  justify-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">{data?.title}</h2>
        <div className="descriptionContainer mb-4">
          <p className="descriptionTitle text-lg font-semibold mb-2 text-gray-800">
            {data?.date}
          </p>
          <p className="text-base text-gray-700">{data?.explanation}</p>
        </div>
        <button
          onClick={handleToggleModal}
          className="text-white bg-red-800 hover:bg-red-500 rounded-md px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}
