import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import weather from "../../img/weather.png";
import convo from "../../img/convo.png";
import risc from "../../img/risc.png";
import { themeContext } from "../../Context";
import iit from "../../img/iit.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={convo} alt="ConvoFlow" />
          <div className="description-box rounded-sm">
            <p style={{ fontSize: "18px" }}>
              A MERN stack application offering secure user authentication,
              allowing users to sign up, log in, and access personalized chat
              rooms
              <br />
              <br /> Developed using React.js, Express, Node.js, MongoDb
            </p>
            {/* Add more descriptive content here */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={weather} alt="Weather Assist" />
          <div className="description-box rounded-sm">
            <p style={{ fontSize: "18px" }}>
              Weather Assist Project is a web application designed to provide
              with accurate and up-to-date weather information for any location.
              <br />
              <br /> Developed using HTML, CSS, and JavaScript.
            </p>
            {/* Add more descriptive content here */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={risc} alt="" />
          <div className="description-box rounded-sm">
            <p style={{ fontSize: "18px" }}>
              Implementation of RISC-V Simulator for Undergraduate Students.
              <br />
              <br /> Developed using C++, VS Code.
            </p>
            {/* Add more descriptive content here */}
          </div>
        </SwiperSlide>
      </Swiper>
      <br />

      <span style={{ fontSize: "40px" }}>InternShips</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={iit} alt="iit" style={{ height: 150, width: 250 }} />
          <div className="description-box rounded-sm">
            <p>ITT Hyderabad (Research Intern) </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
