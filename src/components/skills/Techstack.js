import React from "react";
import { Col, Tooltip, OverlayTrigger } from "react-bootstrap";
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

function Techstack() {
  // Function to render a tooltip
  const renderTooltip = (name) => (
    <Tooltip id={`tooltip-${name.toLowerCase()}`}>{name}</Tooltip>
  );

  return (
    <Swiper
      spaceBetween={10}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
      modules={[A11y, Autoplay, Navigation, Pagination]}
      cssMode={true} // Enable CSS mode for smooth continuous swiping
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 3, // for small mobile devices
        },
        576: {
          slidesPerView: 3, // for larger mobile devices
        },
        768: {
          slidesPerView: 4, // for tablets
        },
        992: {
          slidesPerView: 5, // for small desktops
        },
        1200: {
          slidesPerView: 6, // for larger desktops
        },
      }}
    >
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("Java")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-java-plain-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("JavaScript")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-javascript-plain"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("HTML5")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-html5-plain-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("CSS3")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-css3-plain-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("XML")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-xml-plain"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("Spring")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-spring-original-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("React")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-react-original-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("angular")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-angular-plain"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("MySQL")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-mysql-plain-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("mongodb")}>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-mongodb-plain"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("Git")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-git-plain-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
      <SwiperSlide>
        <OverlayTrigger placement="top" overlay={renderTooltip("Docker")}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="devicon-docker-plain-wordmark"></i>
          </Col>
        </OverlayTrigger>
      </SwiperSlide>
    </Swiper>
  );
}

export default Techstack;
