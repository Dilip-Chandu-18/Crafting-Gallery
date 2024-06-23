import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dilipchandu187@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/dilip_chandu_187/">
            <Insta color="maroon" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/dilip-chandu-b35b56229/">
            <Linkedin color="maroon" size={"3rem"} />
          </a>
          <a href="https://github.com/Dilip-Chandu-18">
            <Gitub color="maroon" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
