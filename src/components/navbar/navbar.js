import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "./logo.jpg";
import { AiFillHome, AiTwotonePicture } from "react-icons/ai";
import { FaSnowman } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <Link
          to="/"
          className="navbar__logo bgImg"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        ></Link>
        <div className="navbar__nav">
          <div className="navbar__nav--item">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </div>
          <div className="navbar__nav--item">
            <NavLink to="/characters/">Characters</NavLink>
          </div>
          <div className="navbar__nav--item">
            <NavLink to="/episodes" exact>
              Episodes
            </NavLink>
          </div>
          <div className="navbar__nav--item">
            <NavLink to="/locations" exact>
              Locations
            </NavLink>
          </div>
        </div>

        <div className="navbar__mobile">
          <div className="navbar__mobile--item">
            <NavLink to="/" exact>
              <AiFillHome />
            </NavLink>
          </div>
          <div className="navbar__mobile--item">
            <NavLink to="/characters/">
              <FaSnowman />
            </NavLink>
          </div>
          <div className="navbar__mobile--item">
            <NavLink to="/episodes" exact>
              <AiTwotonePicture />
            </NavLink>
          </div>
          <div className="navbar__mobile--item">
            <NavLink to="/locations" exact>
              <MdAddLocation />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
