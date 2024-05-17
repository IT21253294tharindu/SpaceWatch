import React from "react";
import { BsCheckLg } from "react-icons/bs";

// Main component to display the background image
export default function Main(props) {
  const { data } = props;

  console.log(data);
return (
    <>
        {data?.media_type === "video" ? (
            <div className="relative h-screen ">
                <iframe
                    src={data?.url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    className="w-full h-full rounded-md"
                    autoPlay
                />
            </div>
        ) : (
            <div
                className="imgContainer relative w-full h-screen"
                style={{
                    backgroundImage: `url(${data?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/*  <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" /> */}
            </div>
        )}
    </>
);
}
