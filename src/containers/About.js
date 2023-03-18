import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 9rem 1rem;
  background-color: white;
  min-height: 70vh;
  text-align: justify;
  h1 {
    color: black;
    text-transform: uppercase;
    text-align: center;
    padding: 0 0 2.75rem 0;
    font-size: 2.5rem;
  }
`;

const Toggler = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  cursor: pointer;
  li {
    display: block;
    padding: 10px 16px;
    border-radius: 4px;
    color: #230404;
    font-size: 14px;
    font-weight: 600;
  }
  .active-tab {
    background: #18dcff;
    position: relative;
  }
  .active-tab::before {
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #18dcff transparent transparent transparent;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 40%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    place-self: center;
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const tabs = document.querySelectorAll(".slide-toggler-tab");
    tabs.forEach((tab, idx) => {
      if (currentSlide === idx) {
        tab.classList.add("active-tab");
      } else {
        tab.classList.remove("active-tab");
      }
    });
  }, [currentSlide]);

  const slides = [
    {
      title: "Objective",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: [
        "In a world where customers consistently interact with your brand across multiple channels—including digital and social—we at Infinity Outsourcing value our ability to effectively garner those interactions and CX insights, analyzing, unlocking, and providing intelligence that drives digital transformation and further revenues for you, our client. Our main objective is to satisfy the client by giving the candidates excessively and close the vacancy for the particular process before the time so the companies can maintain their position in the market. We are already dealing with a bunch of entities and working as a consolidated entity in the market.",
        "We always train the candidate and go through a short verification about the academics and additional qualification of the candidate before sending him/her to the respective client. We also verify the language level of the candidate as per need before making him/her forward in the entity. These are some bizarre qualities of our organization by which we are maintaining an impressive position in the market rather than being mediocre.",
      ],
    },
    {
      title: "Expertise",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: [
        "We are already dealing with numerous processes such as  US IT Recruitment, US Recruitment, International BPO Processes, Domestic BPO  Processes, Sales processes, ETC. With various clients across the world.",
        "Our partnerships have always been about more than building emotional connections with customers; they are about using artificial intelligence, omnichannel orchestration and providing CX insights & technologies, that has the power for digital transformation We do this across 8 locations, and try our best to be in touch with the candidates and clients for every short change from our side if that is important for client.",
      ],
    },
    {
      title: "Founder",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: [
        "The company was found and established by Mr. Sehban Ayyub in 2019 started as a free lancer moving to the short clients and got the company registered with jurisdictional authorities. The Company also expanded in the form of grooming classes and IT fields we started from BPO's but now we are into many sectors. We Started in Bhopal and as of now we are having clients from all over India with 3 outlets our head office is in Bhopal and other two are in Mumbai and Indore. We started from the single client and now we are in a tie up with more than 100 clients as for now and many more soon.",
        "We are also into Web Development and dealing with the projects from USA, Canada, Australia and many more. We are having a separate team lead by Mr. Sehban Ayyub with Business developers, Web developers and more.",
      ],
    },
  ];
  return (
    <StyledSection id="about">
      <h1>About Us</h1>
      <Row>
        <Column>
          <img src={slides[currentSlide].image} />
        </Column>
        <Column>
          <Toggler>
            {slides.map((slide, idx) => {
              return (
                <li
                  key={"slide-toggler-" + idx}
                  className={"slide-toggler-tab"}
                  onClick={() => {
                    setCurrentSlide(idx);
                  }}
                >
                  {slide.title}
                </li>
              );
            })}
          </Toggler>

          <h3>{slides[currentSlide].title}</h3>
          {slides[currentSlide].content.map((para, idx) => {
            return <p key={"slide-" + currentSlide + "-para-" + idx}>{para}</p>;
          })}
        </Column>
      </Row>
    </StyledSection>
  );
}
