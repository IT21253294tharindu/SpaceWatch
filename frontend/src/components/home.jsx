import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      
        <div className=" mx-auto max-w-7xl  px-2 py-32  ">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 h-full ">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-4"> */}
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-fadeInUp">
                  {/* Add animation class */}
                  Embark on an interstellar journey with our innovative web
                  Application.
                  <br />
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300 animate-fadeInUp delay-2000">
                  {/* Add animation class with delay */}
                  From breathtaking space images to detailed astronomical data,
                  our platform offers an immersive experience for space
                  enthusiasts of all ages..
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-x-6 mb-4  ">
                  <Link
                    to="/register"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white animate-bounce "
                  >
                    {/* Add animation class */}
                    Get started now
                  </Link>
                </div>
              </div>

              <div className=" relative mt-16 h-80 lg:mt-8 hidden lg:block  ">
                <img
                  className="lg:absolute justify-center items-center  lg:h-[20rem] lg:w-[20rem] h:[10rem] w-[10rem] lg:ml-36 flex flex-row  object-cover top-20  max-w-none rounded-md bg-white/5 ring-1 ring-white/10 lg:mb-40"
                  src="images/Space.png"
                  alt="App screenshot"
                />
              </div>
           {/*  </div> */}
          </div>
        </div>
      
    </>
  );
}
