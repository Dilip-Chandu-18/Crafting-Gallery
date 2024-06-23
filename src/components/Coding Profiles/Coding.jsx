import React, { useContext } from "react";
import "./Coding.css";
import leet from "../../img/leet.png";
import gfg from "../../img/gfg.jpeg";
import github from "../../img/github.png";
import code from "../../img/code.jpeg";
import force from "../../img/force.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Coding = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="coding" id="coding">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Coding</span>
          <span>Profiles</span>
          <spane>
            Explore my coding profiles to see my technical expertise and
            contributions across various platforms.
            <br />
            From open source projects to solving complex algorithms, discover
            the depth of my skills
            <br />
            and commitment to continuous learning.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://leetcode.com/u/dilip-chandu-187/">
              <img src={leet} alt="LeetCode" className="circular-image" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.geeksforgeeks.org/user/dilipchandu187/">
              <img src={gfg} alt="GeeksforGeeks" className="circular-image" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://github.com/Dilip-Chandu-18">
              <img src={github} alt="GitHub" className="circular-image" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.codechef.com/users/aqua_187">
              <img src={code} alt="Code" className="circular-image" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://codeforces.com/profile/dilipchandu">
              <img src={force} alt="Force" className="circular-image" />
            </a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Coding;
