import React, { Suspense, lazy, useEffect } from "react";
import ParticlesBackground from "../components/particlesbackground";
import Home from "../components/home";
import Header from "../components/header";

// Lazy load the ParticlesBackground component
const LazyParticlesBackground = lazy(() =>
  import("../components/particlesbackground")
);

// Landing page component
export default function LandingPage() {
  useEffect(() => {
    import("../components/particlesbackground");
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyParticlesBackground />
      </Suspense>
      <Header />
      <Home />
    </>
  );
}
