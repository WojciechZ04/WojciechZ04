import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <Home />
      <About />
      <div className="divider div-transparent div-arrow-down"></div>
      <Projects />
      <div className="divider div-transparent div-arrow-down"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
