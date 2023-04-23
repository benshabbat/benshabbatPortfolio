import React from "react";
import "./header.css";
import { CTA, HeaderSocials } from "../../components";
import ME from "../../assets/myFamily.jpeg";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>David-Chen Benshabbat</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials className='header_socials' />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="scroll_down">
          <a href="#contact">Scroll Down</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
