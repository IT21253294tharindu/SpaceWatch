import React from "react";
import ParticlesBackground from "../components/particlesbackground";
import Home from "../components/home";
import Header from "../components/header";

// Landing page component
export default function LandingPage() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <Home />
    </>
  );
}
