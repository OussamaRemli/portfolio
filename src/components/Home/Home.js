import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Importer framer-motion
import illustration from "../../Assets/home-photo.svg";
import Type from "./Type";
// import Particles from "../Particle";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// Variants d'animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const headingVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* <Particles /> */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="home-entete">
            <Col md={7} className="home-header">
              <motion.h1
                style={{ paddingBottom: 15 }}
                className="heading"
                variants={headingVariants}
              >
                Hello World!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1 className="heading-name" variants={headingVariants}>
                I'm
                <strong className="main-name"> Oussama Remli</strong>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                variants={containerVariants}
              >
                <Type />
              </motion.div>
              <motion.div className="social-icons-container">
                <motion.div
                  whileHover={{
                    scale: 1.2, // Scale effect on hover
                  }}
                  initial={{ scale: 1 }} // Initial scale
                  transition={{ duration: 0.3 }} // Smooth transition
                  style={{ display: "inline-block", marginRight: "20px" }}
                >
                  <a
                    href="https://www.linkedin.com/in/oussamaremli"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin
                      style={{ fontSize: "30px", color: "#0e76a8" }}
                    />
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.2, // Scale effect on hover
                  }}
                  initial={{ scale: 1 }} // Initial scale
                  transition={{ duration: 0.3 }} // Smooth transition
                  style={{ display: "inline-block" }}
                >
                  <a
                    href="https://github.com/OussamaRemli"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      style={{ fontSize: "30px", color: "#FFFFFF" }}
                    />
                  </a>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={5} className="d-none d-md-block">
              <motion.img
                src={illustration}
                alt="about"
                className="img-fluid"
                variants={imgVariants}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.section>
  );
}

export default Home;
