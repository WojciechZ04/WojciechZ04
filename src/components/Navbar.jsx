import React, { useEffect, useState } from "react";

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

  let navbarClass = "navbar navbar-expand-lg navbar-dark background";
  if (navBackground) {
    navbarClass += " navbar-scrolled";
  }

  return (
    <nav className={navbarClass}>
      <a className="" href="/WojciechZ04">
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
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="list" href="#home">
              {/* Home <span className="sr-only">(current)</span> */}
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="list" href="#about">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="list" href="#projects">
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="list" href="#contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
