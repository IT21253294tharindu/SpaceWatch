import React from 'react'

// Main component to display the background image
export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer relative w-full h-screen" style={{
            backgroundImage: `url(${data.hdurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }} 
        >
           {/*  <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" /> */}
        </div>
    )
}