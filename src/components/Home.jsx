import React, {useState, useEffect} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "../assets/particles.json";


function Home() {

  const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

  return (
    <div id="home">
      {init && <Particles id="particles" options={particlesOptions}/>}
      <h1>Hi, I'm Wojciech Zieliński</h1>
      <div className="divider div-transparent div-arrow-down"></div>
      <p>A Frontend and Backend Junior Developer of Web Applications</p>
    </div>
  );
}

export default Home;
