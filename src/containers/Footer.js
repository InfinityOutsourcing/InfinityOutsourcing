import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: black;
  color: white;
  padding-top: 20px;
  a {
    text-decoration: none;
    color: var(--primaryColor);
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  .col {
    min-width: 250px;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul.list-unstyled {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }
  ul.social {
    flex-direction: row;
    gap: 2rem;
  }
`;
const Copyright = styled.div`
  height: auto;
  width: 100%;
  font-family: "Poppins", Arial, sans-serif;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgb(130, 130, 130);
  line-height: 2rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  .colored-text {
    white-space: nowrap;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 500% 500%;
    -webkit-animation: bgcolor 5s ease infinite;
    -moz-animation: bgcolor 5s ease infinite;
    animation: bgcolor 5s ease infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <div className="col">
          <span>
            <h4>Head Office</h4>
            <ul className="list-unstyled">
              <li>Sehban Ayyub</li>
              <li>
                <a href="tel:+919343151193">+919343151193</a>
              </li>
              <li>Bhopal,M.P</li>
            </ul>
          </span>
        </div>
        <div className="col">
          <span>
            <h4>Branch 1</h4>
            <ul className="list-unstyled">
              <li>Subhan Ayyub</li>
              <li>
                <a href="tel:+916264334548">+916264334548</a>
              </li>
              <li>Indore, M.P</li>
            </ul>
          </span>
        </div>
        <div className="col">
          <span>
            <h4>Branch 2</h4>
            <ul className="list-unstyled">
              <li>Arham Khan</li>
              <li>
                <a href="tel:+919826294665">+919826294665</a>
              </li>
              <li>Delhi, NCR</li>
            </ul>
          </span>
        </div>
        <div className="col">
          <ul className="list-unstyled social">
            <li>
              <a href="https://www.facebook.com/KINGROCKZeE?mibextid=LQQJ4d">
                <i class="fa fa-facebook fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/infinity_out_sourcing/?igshid=YmMyMTA2M2Y%3D">
                <i class="fa fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/FsJTjWcf6WcJGcGRM3XKr5">
                <i class="fa fa-whatsapp fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </FooterContent>

      <Copyright>
        <p>
          Copyright &copy;
          {new Date().getFullYear()} Infinity Outsourcing | All rights reserved
          | This website is developed by{" "}
          <a href="https://www.linkedin.com/in/aditi-agrawal16/">
            <span class="colored-text">Aditi Agrawal</span>
          </a>
        </p>
      </Copyright>
    </FooterSection>
  );
}
