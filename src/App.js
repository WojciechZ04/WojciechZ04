import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home className="home" />
      <About />
      <Skills />
      <div className="divider div-transparent div-arrow-down"></div>
      <Projects />
      <div className="divider div-transparent div-arrow-down"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
