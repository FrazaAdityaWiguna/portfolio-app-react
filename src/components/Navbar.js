import React from "react";
import logo from "../img/logo.png";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" class="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  about me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  how work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
