import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClass = "navbar navbar-expand-lg background";
  if (navBackground) {
    navbarClass += " navbar-scrolled navbar-light";
  } else {
    navbarClass += " navbar-transparent navbar-dark";
  }

  function handleScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={navbarClass}>
      <a className="" href="/WojciechZ04" style={{textDecoration: 'none'}}>
        Wojciech Zieliński
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-black"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ml-auto">
            <a className="list" href="#home" onClick={(event) => handleScroll(event, 'home')}>
              {/* Home <span className="sr-only">(current)</span> */}
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item ml-auto">
            <a className="list" href="#about" onClick={(event) => handleScroll(event, 'about')}>
              <span>About</span>
            </a>
          </li>
          <li className="nav-item ml-auto">
            <a className="list" href="#projects" onClick={(event) => handleScroll(event, 'projects')}>
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item ml-auto">
            <a className="list" href="#contact" onClick={(event) => handleScroll(event, 'contact')}>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
