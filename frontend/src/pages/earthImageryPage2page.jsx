import React, { useState, useEffect } from "react";
import ParticlesBackground from "../components/particlesbackground";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

// Earth Imagery component
const EarthImagery = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("2018");
  const [selectedMonth, setSelectedMonth] = useState("01");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    // Fetch Earth Imagery data
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=${selectedYear}-${selectedMonth}-01&dim=0.10&api_key=0MdZqelK9pxyd1JIeTT0Zl1d2AHLg4eKmWg6mcYB`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    // Redirect to landing page if user is not logged in
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <ParticlesBackground />
      <Header />
  
     <div className=" max-w-[1440px] grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 px-4 py-[48px] md:py-[96px]">
     <div className="w-full flex max-h-[600px] ">
            {data && !loading && (
              <img
                src={data.url}
                alt="Earth Imagery"
                className="w-auto aspect-1 h-auto rounded-lg lazyload"
              />
            )}
          </div>
      <div className=" flex flex-col gap-4 md:gap-8">
      <h1 className="md:text-4xl text-2xl font-bold text-white text-center  justify-center items-center  ">
              Earth Imagery Data
            </h1>
            <div className="flex gap-4 px-8 md:px-0 items-center justify-center text-white">
              <div>
                <label
                  htmlFor="year"
                  className="text-lg font-semibold text-gray-500 mr-2 "
                >
                  Select Year:
                </label>
                <select
                  id="year"
                  className="text-lg font-semibold bg-gray-800 text-white rounded-md px-8 py-2"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>

            
                </select>
              </div>
              <div>
                <label
                  htmlFor="month"
                  className="text-lg font-semibold text-gray-500 mr-2"
                >
                  Select Month:
                </label>
                <select
                  id="month"
                  className="text-lg font-semibold bg-gray-800 text-white rounded-md px-6 py-2"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
            </div>
            {data ? (
              <>
                <div className="bg-gradient-to-br from-black to-slate-900 shadow-md rounded-xl w-full px-4 md:px-8 py-8 flex flex-col justify-center items-center gap-4 relative text-white font-serif">
                  <p className="text-lg">
                    <span className="text-gray-500">Date:</span>{" "}
                    {data.date.split("T")[0]}
                  </p>
                  <p className="text-lg  ">
                    <span className="text-gray-500 ">Dataset:</span>{" "}
                    {data.resource.dataset}
                  </p>
                  <p className="text-lg font-semibold">
                    <span className="text-gray-500">Planet:</span>{" "}
                    {data.resource.planet}
                  </p>
                  <p className="text-lg font-semibold">
                    <span className="text-gray-500">Service Version:</span>{" "}
                    {data.service_version}
                  </p>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
      </div>
     </div>
    </>
  );
};

export default EarthImagery;
