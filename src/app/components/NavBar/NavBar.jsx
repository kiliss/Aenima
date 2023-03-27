"use client"
import { useState } from "react";
import "./NavBar.css";
import Logo from "../Svgs/LogoViajesNav/Logo";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden";
  };

  return (
    <nav className="navbar">
      <Logo />
      <button className="menu-btn" onClick={handleMenu}>
        {open ? <span></span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${open ? "open" : ""}`}>
        <div className="menu-branding">
        <button className="close-btn" onClick={handleMenu}>
          <span>&times;</span>
        </button>
        </div>
        <ul>
          <li className="select">
            HOME
          </li>
          <li className="noselect">
            TENDENCIAS
          </li>
          <li className="noselect">
            BLOG
          </li>
        </ul>
      </div>
      {open && <div className="modal-backdrop"></div>}
    </nav>
  );
};

export default Navbar;