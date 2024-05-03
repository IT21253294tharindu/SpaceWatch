import React, { useEffect, useState } from "react";
import axios from "axios";
import ParticlesBackground from "../components/particlesbackground";
import Header from "../components/header";

// Mars Photos Page component
export default function MarsPhotosPage() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem("marsPhotosPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const [loading, setLoading] = useState(false);

  // Typewriter effect
  const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <p>{displayText}</p>;
  };

  const useTypewriter = (text, speed = 200) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);

    return displayText;
  };

  useEffect(() => {
    // Fetch Mars Photos data
    async function fetchAPIData() {
      setLoading(true);
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}`;
      try {
        const res = await axios.get(url, {
          params: {
            api_key: "0MdZqelK9pxyd1JIeTT0Zl1d2AHLg4eKmWg6mcYB",
          },
        });
        const apiData = res.data;
        setData(apiData);
        setLoading(false);
        console.log("Fetched from API");
      } catch (err) {
        if (err.response && err.response.status === 429) {
          // Retry after waiting for a certain amount of time
          await wait(10000); // Wait for 5 seconds (adjust as needed)
          fetchAPIData(); // Retry the request
        } else {
          console.log(err.message);
        }
      }
      async function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    }

    fetchAPIData(); // Fetch data
  }, [page]);

  // Handle previous page
  const handlePrevPage = () => {
    const newPage = Math.max(page - 1, 1);
    setPage(newPage);
    localStorage.setItem("marsPhotosPage", newPage.toString());
  };

  // Handle next page
  const handleNextPage = () => {
    if (page < 10) {
      const newPage = page + 1;
      setPage(newPage);
      localStorage.setItem("marsPhotosPage", newPage.toString());
    }
  };

  return (
    <>
      <ParticlesBackground />
      <Header />
      <div
        className={`text-white py-8 ${
          loading ? "opacity-0" : "opacity-100 transition-all duration-1000 "
        }`}
      >
        <h1 className="text-4xl text-center font-bold mb-8">
          <Typewriter text="  Mars Rover Photos" />
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mr-2 ml-2">
          {data ? (
            data.photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative"
              >
                <img
                  src={photo.img_src}
                  alt={photo.id}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <h2 className="text-lg font-semibold text-yellow-300">
                      {photo.camera.full_name}
                    </h2>
                    <div className="flex flex-col text-right">
                      <p className="text-sm text-white font-bold mb-1 absolute  top-40 right-4">
                        <span className="font-bold">Launch Date:</span>{" "}
                        {photo.rover.launch_date}
                      </p>
                      <p className="text-sm text-gray-400 font-semibold absolute bottom-6 right-4">
                        <span className="font-bold">Landing Date:</span>{" "}
                        {photo.rover.landing_date}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2 top-1">
                    <span className="font-semibold">Earth Date:</span>{" "}
                    {photo.earth_date}
                  </p>
                  <p className="text-sm text-gray-400 font-semibold mb-2 ">
                    <span className="font-semibold">Rover Name:</span>{" "}
                    {photo.rover.name}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center justify-center">Loading...</p>
          )}
        </div>
        <div className=" flex flex-wrap gap-2 justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className={`${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            } mr-4 px-4 py-2 bg-gray-600 text-white rounded-md`}
            disabled={page === 1}
          >
            &lt; Previous
          </button>
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className={`${
                index + 1 === page ? "bg-blue-600" : "bg-gray-600"
              } px-4 py-2 text-white rounded-md cursor-pointer mx-1`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <button
            onClick={handleNextPage}
            className={`${
              page === 10 ? "opacity-50 cursor-not-allowed" : ""
            } px-4 py-2 bg-gray-600 text-white rounded-md`}
            disabled={page === 10}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </>
  );
}
