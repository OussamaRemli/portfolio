import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiSpringboot,
} from "react-icons/si"; // Simple Icons from react-icons/si

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Limit the text length, only showing part of it initially
  const textPreview = isExpanded
    ? props.description
    : props.description.slice(0, 100) +
      (props.description.length > 100 ? "..." : "");

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
      {/* <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: "200px", objectFit: "cover" }}
      /> */}
      <Card.Body style={{ padding: "20px" }}>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {props.title}
        </Card.Title>

        {/* Project description with "Read More" feature */}
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

        <div
          style={{
            display: "flex",
            justifyContent: props.demoLink ? "space-between" : "center",
          }}
        >
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ borderRadius: "20px", padding: "10px 20px" }}
          >
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* Render Demo Button only if not a Blog and if demo link is provided */}
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
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
