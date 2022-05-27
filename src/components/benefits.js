import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Benefits = () => {
  return (
    <div id="benefits" className="benefits">
      <Container>
        <Row>
          <Col className="heading">
            <h1>Why you should hold BLA NFT's?</h1>
          </Col>
        </Row>
        <Row style={{marginBottom: "80px"}}>
          <Col sm={12} md={12} lg={2}></Col>
          <Col sm={12} md={12} lg={8}>
            <ul className="list">
              <li>
                <p className="item">
                  <b className="bold">
                    Joining one of the greatest NFT community:
                  </b>{" "}
                  <span className="text">
                    By committing to our game plan, you are gifting yourself a
                    jewel of fun and pleasure where the community is all about
                    creating adventures that are out of the ordinary.{" "}
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">BLA Prizes:</b>{" "}
                  <span className="text">
                    Owning BLA NFTs doesn’t only mean owning a piece of JPEG,
                    but rather a pearl that redeems rewards. Indeed, our buyers
                    who engage in our Discord and Twitter environments will
                    enjoy our frequent prizes that will be won based on draws,
                    games, and giveaways.{" "}
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">Play-to-Earn (P2E):</b>{" "}
                  <span className="text">
                    You will have a blast in our P2E experience on THE ISLAND
                    that will incorporate both beach and desert within the
                    Web3.0 Metaverse. THE ISLAND will unlock you many perks.
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">Teamwork:</b>{" "}
                  <span className="text">
                    As the communities are constantly evolving in digital
                    environments, we are more than happy to hear your thoughts.
                    We will hold AMA sessions to exchange ideas to help improve
                    our practices for more successful adventures and to make
                    sure we satisfy our community.
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">BLA CHALETS:</b>{" "}
                  <span className="text">
                    YES, you heard right!! We are excited to announce that the
                    success of our project will grant you your very own BLA
                    Chalet. Every BLA holder will receive their own airdropped
                    chalet for each NFT that will either have an ocean view or a
                    dune atmosphere, but don’t worry, your BLAs will be more
                    than happy to have their own cabin to relax!
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">Networking:</b>{" "}
                  <span className="text">
                    Who doesn’t love a chat with their friends and peers? Our
                    BLA community has the most open heart and welcomes
                    everybody. We believe that engaging with our investors,
                    newcomers and our community is important. We want to hear
                    everyone’s thoughts, whether it’s about NFT or Crypto, or
                    daily life matters!
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">Airdrop:</b>{" "}
                  <span className="text">
                    Behold BLA holders, our team is preparing many surprises
                    that will be airdropped to you in the near future!
                  </span>
                </p>
              </li>
              <li>
                <p className="item">
                  <b className="bold">BLA Rights:</b>{" "}
                  <span className="text">
                    Once you become a BLA NFT holder, you will own all the
                    rights of your property, whether you feel like integrating
                    it into your lifestyle or display it among your art
                    collection!
                  </span>
                </p>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={12} lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
};
