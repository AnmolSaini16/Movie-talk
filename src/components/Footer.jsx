import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>
        Made with ❤️ by{" "}
        <span>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anmol
          </a>
        </span>{" "}
      </h2>
    </div>
  );
};

export default Footer;
