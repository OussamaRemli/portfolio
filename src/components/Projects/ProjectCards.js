import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation } from "swiper/modules"; // Ensure this is imported
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation'; // Import Swiper navigation CSS
import {
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiSpringboot,
} from "react-icons/si"; // Simple Icons from react-icons/si
const zoomStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "8px",
  marginRight: "10px",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
};

const swiperButtonStyle = {
  color: 'rgba(128, 128, 128, 0.7)',  // Gray with transparency
  backgroundColor: 'transparent',     // No background
  border: 'none',
  fontSize: '20px',
  width: 'auto',
  height: 'auto',
  transition: 'color 0.3s ease',
};

// Ensure hover effect to make buttons more visible on interaction
const swiperButtonHoverStyle = {
  color: 'rgba(128, 128, 128, 0.9)',
};

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const textPreview = isExpanded
    ? props.description
    : props.description.slice(0, 100) +
      (props.description.length > 100 ? "..." : "");

  const imgPaths = props.imgPaths || [];
  const thumbnail = props.thumbnail; // New prop for the miniature image

  const handlePreviewClick = () => {
    setSelectedImageIndex(0); // Default to the first image
    setShowModal(true); // Open modal
  };

  const renderMiniature = () => {
    if (!thumbnail) return null; // Return nothing if no thumbnail is provided

    // Render the thumbnail image as a miniature
    return (
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <img
          src={thumbnail} // Use the new thumbnail image
          alt="project-thumbnail"
          style={{
            width: "100%", // Full width
            height: "200px", // Fixed height
            objectFit: "cover", // Maintain aspect ratio
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={handlePreviewClick} // Open modal on click
        />
      </div>
    );
  };

  const handleClose = () => setShowModal(false);

  return (
    <Card
      className="project-card-view"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      {renderMiniature()} {/* Render the separate thumbnail */}

      <Card.Body style={{ padding: "20px" }}>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {props.title}
        </Card.Title>

        <Card.Text style={{ textAlign: "justify", marginBottom: "15px" }}>
          {textPreview}
          {props.description.length > 100 && (
            <span
              onClick={toggleExpand}
              style={{
                color: "#1e797d",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isExpanded ? " Read Less" : " Read More"}
            </span>
          )}
        </Card.Text>

   {/* Tech Stack Section */}
   <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {/* React */}
          {props.techStack.includes("React") && (
            <i
              className="devicon-react-original colored"
              title="React"
              style={{ fontSize: "28px" }}
            ></i>
          )}
          {/* Material UI */}
          {props.techStack.includes("Material UI") && (
            <i
              className="devicon-materialui-plain colored"
              title="Material UI"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* Node.js */}
          {props.techStack.includes("Node.js") && (
            <i
              className="devicon-nodejs-plain colored"
              title="Node.js"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* HTML */}
          {props.techStack.includes("HTML") && (
            <i
              className="devicon-html5-plain colored"
              title="HTML5"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* CSS */}
          {props.techStack.includes("CSS") && (
            <i
              className="devicon-css3-plain colored"
              title="CSS3"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* PHP */}
          {props.techStack.includes("PHP") && (
            <i
              className="devicon-php-plain colored"
              title="PHP"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* Spring Boot */}
          {props.techStack.includes("Spring Boot") && (
            <i
              className="devicon-spring-plain colored"
              title="Spring Boot"
              style={{ fontSize: "28px" }}
            ></i>
          )}
          {/* Python */}
          {props.techStack.includes("Python") && (
            <i
              className="devicon-python-plain colored"
              title="Python"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* Android */}
          {props.techStack.includes("Android") && (
            <i
              className="devicon-android-plain colored"
              title="Android"
              style={{ fontSize: "28px" }}
            ></i>
          )}
          {/* Android */}

          {props.techStack.includes("java") && (
            <i
              className="devicon-java-plain colored"
              title="Java"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* Firebase */}
          {props.techStack.includes("Firebase") && (
            <i
              className="devicon-firebase-plain colored"
              title="Firebase"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* MySQL */}
          {props.techStack.includes("MySQL") && (
            <i
              className="devicon-mysql-plain colored"
              title="MySQL"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* SQLite */}
          {props.techStack.includes("SQLite") && (
            <i
              className="devicon-sqlite-plain colored"
              title="SQLite"
              style={{ fontSize: "28px" }}
            ></i>
          )}
          {props.techStack.includes("Azure") && (
            <i
              class="devicon-azure-plain colored"
              title="Azure"
              style={{ fontSize: "28px" }}
            ></i>
          )}

          {/* Add more tech icons as per the project */}
        </div>

        <div style={{
          display: "flex",
          justifyContent: props.demoLink ? "space-between" : "center",
        }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ borderRadius: "20px", padding: "10px 20px" }}
          >
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginLeft: "10px",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {/* Add a Preview button */}
          {imgPaths.length > 0 && (
            <Button
              variant="outline-secondary"
              onClick={handlePreviewClick}
              style={{
                marginLeft: "10px",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
            >
              Preview
            </Button>
          )}
        </div>
      </Card.Body>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            initialSlide={selectedImageIndex}
            onSwiper={(swiper) => {
              // Apply custom styles to navigation buttons
              const nextButton = swiper.el.querySelector(".swiper-button-next");
              const prevButton = swiper.el.querySelector(".swiper-button-prev");

              if (nextButton) {
                Object.assign(nextButton.style, swiperButtonStyle);
                nextButton.addEventListener('mouseover', () => Object.assign(nextButton.style, swiperButtonHoverStyle));
                nextButton.addEventListener('mouseout', () => Object.assign(nextButton.style, swiperButtonStyle));
              }

              if (prevButton) {
                Object.assign(prevButton.style, swiperButtonStyle);
                prevButton.addEventListener('mouseover', () => Object.assign(prevButton.style, swiperButtonHoverStyle));
                prevButton.addEventListener('mouseout', () => Object.assign(prevButton.style, swiperButtonStyle));
              }
            }}
          >
            {imgPaths.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`project-img-modal-${index}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

ProjectCards.defaultProps = {
  imgPaths: [],
  thumbnail: "", // Default to an empty string if no thumbnail is provided
};

export default ProjectCards;
