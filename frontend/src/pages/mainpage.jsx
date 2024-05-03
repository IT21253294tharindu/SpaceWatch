import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Main from "../components/main";
import SideBar from "../components/sidebar";
import Header from "../components/header";

// Main Page component
function MainPage() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    // Fetch data from NASA API
    async function fetchAPIData() {
      const url = "https://api.nasa.gov/planetary/apod";
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      // Check if data is present in local storage
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await axios.get(url, {
          params: {
            api_key: "0MdZqelK9pxyd1JIeTT0Zl1d2AHLg4eKmWg6mcYB", //API key
          },
        });
        const apiData = res.data;
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
      }
    }
    // Fetch data
    fetchAPIData();
  }, []);

  return (
    <>
      <Header />
      <div
        className={`transition-opacity duration-300 ${
          showModal ? "opacity-50" : "opacity-100"
        }`}
      >
        {data ? (
          <Main data={data} />
        ) : loading ? (
          <div className="flex justify-center items-center h-screen">
            <i className="fas fa-cog animate-spin text-4xl text-gray-700"></i>
          </div>
        ) : null}
      </div>

      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} /> //Sidebar
      )}

      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default MainPage;
