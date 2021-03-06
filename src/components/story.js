import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import one from "../assets/1.png";
import two from "../assets/1000.png";
import three from "../assets/2500.png";
import four from "../assets/3900.png";
export const Story = () => {
  return (
    <div id="story" className="story">
      <Container>
        <Row className="story-row">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Row>
              <Col sm={2}></Col>
              <Col sm={4}>
                <img src={one} className="story-img" alt="" />
              </Col>
              <Col sm={4}>
                <img src={two} className="story-img" alt="" />
              </Col>
              <Col sm={2}></Col>
            </Row>
            <Row>
              <Col sm={2}></Col>
              <Col sm={4}>
                <img src={three} className="story-img" alt="" />
              </Col>
              <Col sm={4}>
                <img src={four} className="story-img" alt="" />
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Col>
          <Col className="right" xs={12} sm={12} md={12} lg={6}>
            <h1>Project Explanation</h1>
            <p>
              The Bored Lion Apes (BLA) is a collection of 10,000 unique Bored
              Lion Ape NFTs hosted on the Ethereum blockchain. Each NFT is
              algorithmically generated using a combination of multiples
              attributes such as hair, eyes, clothing and much more. By joining
              the community, each holder will experience our P2E game on THE
              ISLAND. In addition to the different perks and prizes within our
              metaverse environment, holders will benefit from a BLA Chalet, a
              networking experience and airdrop surprises.
            </p>
            <a
              href="https://discord.gg/fPWMrWvPEX"
              target="_blank"
              rel="noreferrer"
              className="btn button"
            >
              Join Discord
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
