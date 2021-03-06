import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import insta from "../assets/instagram.svg";
import logo from "../assets/logo.png";
export const Header = () => {
  const [showTime, setShowTime] = useState(0);
  useEffect(() => {
    const datum = new Date(Date.UTC(2022, 5, 4, 19, 0, 0));
    setShowTime(datum.getTime());
  }, []);
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="navbar-1"
      variant="dark"
    >
      <Container className="cont">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="links">
          <Nav.Link className="link" href="#story">
            Story
          </Nav.Link>
          <Nav.Link className="link" href="#roadmap">
            Roadmap
          </Nav.Link>
          <Nav.Link className="link" href="#team">
            Team
          </Nav.Link>
          <Nav.Link className="link" href="#faq">
            FAQ
          </Nav.Link>
        </Nav>

        <div className="socials links">
          <a
            href="https://twitter.com/boredlion_apes?s=21&t=O__E2OmJupaSL9E8csSUmQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://discord.gg/fPWMrWvPEX"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} alt="discord" />
          </a>
          <a
            href="https://www.instagram.com/boredlionapes"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="instagram" />
          </a>
        </div>
        {showTime < Date.now() && (
          <a
            className="btn button links"
            rel="noreferrer"
            target="_blank"
            href="https://mint.boredlionapes.com"
          >
            Mint Now
          </a>
        )}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton variant="dark">
            <span></span>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="link" href="#story">
                Story
              </Nav.Link>
              <Nav.Link className="link" href="#roadmap">
                Roadmap
              </Nav.Link>
              <Nav.Link className="link" href="#team">
                Team
              </Nav.Link>
              <Nav.Link className="link" href="#faq">
                FAQ
              </Nav.Link>
              {showTime < Date.now() && (
                <Nav.Link
                  href="https://mint.boredlionapes.com"
                  className="btn button"
                >
                  Mint Now
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
