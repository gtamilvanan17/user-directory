import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Button} from 'reactstrap';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
    font-family: 'Times New Roman', Times, serif;
  }
  div {
    color:black;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage className="tittle">
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <span>
            <strong>Tommy's Directory</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Friends Theraphy"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
          <br/>
          <Button color="warning" href="http://localhost:3000/adduser">
                +  ADD User
          </Button>
          <Button color="warning" href="http://localhost:3000/userdb">
                View Database
          </Button>
        </div>
        <br />
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
