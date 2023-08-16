import React from "react";
import Navigation from "./Navigation";
import "../css/Header.css";

function Header({ activeSection, setActiveSection }) {
  return (
    <header>
      <div>
        <h1>Austin Shook</h1>

        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </header>
  );
}

export default Header;