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
                  <p>NFT stands for 'non-fungible token'.</p>

                  <p>
                    A NFT is basically data that is accounted for in a digital
                    ledger, and that data represents something specific and
                    unique.
                  </p>

                  <p>
                    A NFT can, for example, represent a unique piece of art or a
                    game token.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can i ghet an NFT?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    It will be available for purchase on our website through an
                    initial sale.
                  </p>{" "}
                  <p>
                    At the time of purchase, a randomly selected NFT will be
                    minted on the blockchain and delivered to your wallet and
                    OpenSea account.
                  </p>{" "}
                  <p>
                    Once the public sale is closed, you can get a Lion Ape on
                    the secondary market (on OpenSea).
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How to purchase one?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    The easiest way is to install a MetaMask extension in your
                    Chrome browser and link your Ethereum wallet to it.
                  </p>{" "}
                  <p>
                    Ensure you have enough ETH in your wallet to cover the cost
                    of a NFT plus the associated transaction (gas) fees.
                  </p>{" "}
                  <p>
                    Approve the transaction on MetaMask and you are all set.
                  </p>
                  <p>
                    The Lion Ape will be available to mint on our official
                    website.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is the total supply?</Accordion.Header>
                <Accordion.Body>
                  <p>10,000 unique NFT's will be created.</p>{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How much does it cost to mint an NFT ?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Mint Price will be 0.2 ETH + Gas.</p>{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Where can i view my NFT ?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Once minted, you'll just need to login into your OpenSea
                    account to view your NFTs.
                  </p>{" "}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
