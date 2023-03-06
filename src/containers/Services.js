import React, { useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import CenteredModal from "../components/CenteredModal";

const StyledSection = styled.section`
  background-color: black;
  padding: 9rem 0;
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

export default function Services() {
  const [modalShow, setModalShow] = useState(false);
  const [heading, setHeading] = useState("");
  return (
    <>
      <StyledSection id="services">
        <h1>Our Services</h1>
        <StyledContainer>
          <Card
            onClick={() => {
              setHeading("US IT/NON IT Recruitment");
              setModalShow(true);
            }}
            heading="US IT/NON IT Recruitment"
            // linkText="+91-7999888625"
            // link="tel:+917999888625"
            icon="fa fa-book"
          />
          <Card
            onClick={() => {
              setHeading("BPO Jobs");
              setModalShow(true);
            }}
            heading="BPO Jobs"
            // linkText="www.infinityoutsourcing.com"
            // link="mailto:www.infinityoutsourcing.com"
            icon="fa fa-users"
          />
          <Card
            onClick={() => {
              setHeading("English Classes");
              setModalShow(true);
            }}
            heading="English Classes"
            // linkText="Lorem ipsum dolor sit amet. Aut labore animi ad illum modi non
            //     galisum sequi ut soluta nisi."
            // link="https://www.google.com/maps/place/VIP+Road,+Bhopal,+Madhya+Pradesh/@23.2609122,77.3785381,17z/data=!3m1!4b1!4m5!3m4!1s0x397c67e3f3bdf80d:0x156e1875b3f5caf0!8m2!3d23.2609073!4d77.3807268"
            icon="fa fa-language"
          />
        </StyledContainer>
      </StyledSection>
      <CenteredModal
        heading={heading}
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        {heading === "US IT/NON IT Recruitment" ? (
          <>
            <p>
              We are having severals opening in US recruitment as we are in tie
              up with many US based entities majorly they are work from home and
              few of them are work from office for work from home we hire 35k
              ctc on an average in which you have to deal with the candidates
              you have to train the candidates before going ahead with the
              further rounds from there side as the candidates will be from US
              only so you will not be facing much issues regarding the language
              level of the candidate few of them will be having a different
              latin base language as their mother tongue they need to be train
              in that part too most of the time you just need to train the
              candidate for the creativity and logical answers also conducting
              the initial round of interview process for the candidate.{" "}
            </p>

            <h5>IT BD Profiles </h5>

            <p>
              IT profiles come under the BDD profiles and basically BDD profiles
              In reality, a "Business Development Director" should oversee and
              support the different go-to-market tasks. A BD Director should
              also be involved in the financial forecasting and work directly
              with management to predict near and long-term sales.
            </p>

            <p>
              BD simply means Business development and in IT developer hire a BD
              as a salesperson or academic counselor to counsel the US Clients
              and it is also called as a IT BD person and is a part of US
              recruitment currently we are hiring for many profiles for US IT
              like this only the major package we gonna be giving you starting
              from 3 LPA to 20 LPA depending on your communication skills, work
              experience, Alma Maters, etc.
            </p>

            <p>
              We also have training levels for US IT /NON IT JOB profiles use
              the link below to look into them.
            </p>
          </>
        ) : heading === "BPO Jobs" ? (
          <>
            <p>
              {" "}
              Business process outsourcing (BPO) is the delegation of one or
              more IT-intensive business processes to an external provider that,
              in turn, owns, administers and manages the selected processes
              based on defined and measurable performance metrics.
            </p>
            <p>
              BPO is the most growing sector as far as we are concerned with BPO
              . BPO opportunities are increasing day by day in India so it is
              not bad to say that you should be in BPO from now onwards only
              because many international BPO's are establishing their business
              in India and there are lots of opportunities in India and there
              will be more soon.
            </p>
            <p>
              As for BPO we are having lot's of job opportunities in Work from
              home (WFH) and work from office (WFO) in Bhopal, Indore, Chennai,
              Bangalore, Hyderabad, Mumbai, Gurgaon, Noida, Delhi and many more.
              We are having packages starting from 1.5 LPA to 20 LPA in BPO.
            </p>
            <p>
              We are hiring from many processes in BPO as for now most of the
              processes are confidential to publish publicly, call us for the
              details or fill out the form.
            </p>
          </>
        ) : (
          <p>Coming Soon...</p>
        )}
      </CenteredModal>
    </>
  );
}
