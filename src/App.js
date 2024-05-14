import "./App.css";
import React from "react";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Home from "./components/Hero/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home className="home" />
      <About />
      <Skills />
      <Projects />
      <div className="divider div-transparent div-arrow-down"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
