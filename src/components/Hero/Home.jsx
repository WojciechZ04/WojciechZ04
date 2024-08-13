import React, { useState, useEffect } from "react";
import "./Hero.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/particles.json";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div id="home">
      <div className={`loading-screen ${loading ? "" : "hidden"}`}></div>
      <Particles id="particles" options={particlesOptions} />
      <h1>Hi, I'm Wojciech Zieliński</h1>
      <div className="divider div-transparent div-arrow-down white"></div>
      <p>A Frontend and Backend Junior Developer of Web Applications</p>
    </div>
  );
}

export default Home;
