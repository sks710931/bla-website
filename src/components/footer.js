import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import insta from "../assets/instagram.svg";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h4>Bored Lion Apes</h4>
      <div className="socials">
        <a
          href="https://twitter.com/boredlion_apes?s=21&t=O__E2OmJupaSL9E8csSUmQ"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://discord.gg/fPWMrWvPEX" target="_blank" rel="noreferrer">
          <img src={discord} alt="discord" />
        </a>
        <a
          href="https://www.instagram.com/boredlionapes/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="instagram" />
        </a>
      </div>
    </div>
  );
};
