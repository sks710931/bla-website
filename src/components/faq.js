import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";

export const FAQ = () => {
  return (
    <div id="faq" className="faq">
      <Container>
        <Row>
          <Col className="head">
            <h1>Frequently Asked Questions</h1>
          </Col>
        </Row>
        <Row>
          <Col className="box">
            <Accordion defaultActiveKey="-1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is an NFT?</Accordion.Header>
                <Accordion.Body>
                  <p>A non-fungible token (NFT) is a digital asset on a blockchain with a unique identification. Therefore, each NFT is unique to the buyer. </p>

                  <p>
                  It represents real-world items, like artwork. 
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can I purchase a Bored Lion Apes (BLA) NFT?</Accordion.Header>
                <Accordion.Body>
                  <p>
                  The BLA NFT will be available on this website until all the NFTS are sold out.
                  </p>{" "}
                  <ul>
                    <li>Download the MetaMask extension on your Chrome browser and link your Ethereum wallet. </li>
                    <li>
                    Make sure you have the full amount of ETH in your wallet to purchase the NFT + gas fees.
                    </li>
                    <li>Approve the transaction on MetaMask.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I choose the NFT I want? </Accordion.Header>
                <Accordion.Body>
                  <p>
                  No, you will mint a randomly selected NFT on the blockchain. 
                  </p>{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much is the mint price?</Accordion.Header>
                <Accordion.Body>
                  <p>The mint price is 0.085 ETH + gas fees.</p>{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                Where can I view my NFT after minting?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Your NFT will be delivered to your wallet and you will be able to view it in your OpenSea account. </p>{" "}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
