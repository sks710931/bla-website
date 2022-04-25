import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../assets/roadmap.png";
export const Roadmap = () => {
  return (
    <div id="roadmap" className="roadmap">
      <Container>
        <Row>
          <Col className="heading" sm={12}>
            <h1>Roadmap</h1>
          </Col>
        </Row>
        <Row>
          <Col className="subtitle" sm={12}>
            <p>
              When you join the Bored Lion Apes - by purchasing an NFT or just
              by joining our Discord - you’re instantly part of our community. A
              global community that empowers each other on the Web 3.0. We’re
              focused on building authentic connections as we dive into the
              metaverse together.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={3}></Col>
          <Col sm={12} md={12} lg={6} className="item-box">
            <div className="content">
              <div className="icon">
                <img src={icon} alt="icon" />
              </div>
              <h3>Q2 2022</h3>
              <div className="points">
                <ul>
                  <li>Massive marketing and Pre-Sale NFT mint.</li>
                  <li>NFT Air Drops + Whitelist giveaways on our socials.</li>
                  <li>Public Sale minting.</li>
                  <li>
                    Community raffles among our holders, massive collabs,
                    prizes.{" "}
                  </li>
                  <li>
                    Everyone will voice their opinion in the development of this
                    project, we’re all booooored lions & lionesses who want to
                    play and thrive together.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3}></Col>
        </Row>

        <Row>
          <Col sm={12} md={12} lg={3}></Col>
          <Col sm={12} md={12} lg={6} className="item-box">
            <div className="content">
              <div className="icon">
                <img src={icon} alt="icon" />
              </div>
              <h3>Q3 2022</h3>
              <div className="points">
                <ul>
                  <li>Start development of a Bored Lion Ape Play-to-Earn game on our private Island on Sandbox.</li>
                  <li>At the end of summer, all BLA holders will get the opportunity to wrap their Bored Lion Ape into a 3D version. You will need your BLA to be in 2D and sometimes in 3D.</li>
                  <li>Community will have exclusive access to events. There will be good vibes and amazing people!</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3}></Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={3}></Col>
          <Col sm={12} md={12} lg={6} className="item-box">
            <div className="content">
              <div className="icon">
                <img src={icon} alt="icon" />
              </div>
              <h3>Q4 2022</h3>
              <div className="points">
                <ul>
                    
                  <li>Starting Fall,
                      <ul itemType="bullet">
                          <li>Launch of our Play-to-Earn game.</li>
                          <li>Launch of Merch Collection and partnerships.</li>
                          <li>Full % of trading fees redistributed to players through in-game contests.</li>
                      </ul>
                  </li>
                  </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3}></Col>
        </Row>
        <Row>
          <Col className="subtitle" sm={12}>
            <p>
              YOU ARE STILL VERY EARLY.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
