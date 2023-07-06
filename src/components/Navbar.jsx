import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark background" style={{position: "sticky"}}>
      <a class="navbar-brand" href="/WojciechZ04">
        Wojciech Zieliński
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">
              Strona główna <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              O mnie
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Moje projekty
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;