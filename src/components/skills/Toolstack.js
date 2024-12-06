import React from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "IntelliJ IDEA", icon: "devicon-intellij-plain" },
    { name: "Eclipse", icon: "devicon-eclipse-plain" },
    { name: "Android Studio", icon: "devicon-androidstudio-plain" },

    { name: "Postman", icon: "devicon-postman-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "GitHub", icon: "devicon-github-original" },

  ];

  return (
    <Swiper
      spaceBetween={10}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[A11y, Autoplay, Navigation, Pagination]}
      loop={true}
      rtl={false}
      direction="horizontal"
      breakpoints={{
        320: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
    >
      {tools.map((tool, index) => (
        <SwiperSlide key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <Col xs={4} md={2} className="tech-icons">
              <i className={tool.icon}></i>
            </Col>
          </OverlayTrigger>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
}

export default Toolstack;
