import React from "react";
import "./Tech.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/soft.jpeg";
import profilePic2 from "../../img/ai.jpeg";
import profilePic3 from "../../img/science.png";
import profilePic4 from "../../img/block.jpeg";

const Tech = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Software development is the process of designing, creating, testing, and maintaining software applications, frameworks, or other software components. ",
    },
    {
      img: profilePic2,
      review:
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are designed to think and learn like humans. These machines are programmed to perform tasks that typically require human intelligence, such as visual perception.",
    },
    {
      img: profilePic3,
      review:
        "Data science is an interdisciplinary field that focuses on extracting knowledge from structured and unstructured data. It involves a blend of statistics, mathematics, computer science, and domain-specific knowledge to analyze and interpret complex data.",
    },
    {
      img: profilePic4,
      review:
        "Blockchain is a decentralized, distributed ledger technology that securely records transactions across multiple computers in a way that ensures the integrity and immutability of the data.",
    },
  ];

  return (
    <div className="t-wrapper" id="tech">
      <div className="t-heading">
        <span>Harnessing the power of </span>
        <span>Technology </span>
        <span>to drive change.</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="tech">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Tech;
