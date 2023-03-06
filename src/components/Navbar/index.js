import React from "react";
import "./navbar.css";
import styled from "styled-components";
import logo from "./images/logo.png";

const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: var(--accentLightColor);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
  min-height: 12vh;
  @media screen and (max-width: 768px) {
    div {
      z-index: 4;
    }
  }
`;

const Ham = styled.div`
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  div {
    background-color: var(--accentColor);
    width: 25px;
    height: 3px;
    margin: 5px;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: grid;
  place-items: center;
`;

function Navbar() {
  const navSlide = () => {
    const ham = document.querySelector(".ham");
    const nav = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");
    links.forEach((link, idx) => {
      link.style.animation = link.style.animation
        ? ""
        : `fade 0.5s ease-in forwards ${idx / 6 + 0.5}s`;
    });
    ham.classList.toggle("trigger");
  };

  return (
    <Header>
      <div className="site-logo">
        {/* <h1 style={{ color: "#ffffff" }}>Logo</h1> */}
        <img src={logo} style={{ maxHeight: "70px" }}></img>
      </div>
      <Nav>
        <ul className="nav-links">
          <li>
            <a href="./">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="./#services">
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="./#about">
              <span>About Us</span>
            </a>
          </li>
          <li>
            <a href="./#contact">
              <span>Contact Us</span>
            </a>
          </li>
          <li>
            <a href="./#register">
              <span>Register</span>
            </a>
          </li>
        </ul>
      </Nav>
      <Ham className="ham" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Ham>
    </Header>
  );
}

export default Navbar;
