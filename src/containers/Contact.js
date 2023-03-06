import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: black;
  padding: 9rem 0rem;
  h1 {
    color: white;
    text-transform: uppercase;
    text-align: center;
    padding: 0 0 2.75rem 0;
    font-size: 2.5rem;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default function Contact() {
  return (
    <StyledSection id="contact">
      <h1>Contact Us</h1>
      <StyledContainer>
        <Card
          heading="Phone number"
          linkText="+919343151193"
          link="tel:+919343151193"
          icon="fa fa-phone-alt"
        />
        <Card
          heading="Email"
          linkText="subhanayyub@infinityoutsourcing.in"
          link="mailto:subhanayyub@infinityoutsourcing.in"
          icon="fas fa-paper-plane"
        />
        <Card
          heading="Address"
          linkText="Infinity Outsourcing, H no. 73, Bismillah Manzil, Near Bhandari Auto Parts, Budhwaara, Bhopal (M.P.)"
          link="https://maps.app.goo.gl/RxbyDUexwajLMGuK8"
          icon="fas fa-map-signs"
        />
      </StyledContainer>
    </StyledSection>
  );
}
