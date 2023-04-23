import React from "react";
import "./footer.css";
import FooterSocials from "./FooterSocials"
const Footer = () => {
  const componentsFooter = [
    { name: "Home", url: "#" },
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Contact", url: "#contact" },
  ];
  return (
    <footer>
      <a href="#" className="footer_logo">
        Benshabbat
      </a>
      <ul className="permalinks">
        {componentsFooter.map((comp) => {
          return (
            <li key={comp.name}>
              <a href={comp.url}>{comp.name}</a>
            </li>
          );
        })}
      </ul>
      <FooterSocials />
    </footer>
  );
};

export default Footer;
