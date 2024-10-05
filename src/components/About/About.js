import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Importer framer-motion
import Aboutcard from "./AboutCard";
import Timeline from "./Timeline";

// Variants d'animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const headingVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const timelineVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

function About() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Container fluid className="about-section">
        {/* <Particle /> */}
        <Container>
          <Row
            style={{ justifyContent: "center", padding: "10px", paddingBottom: "70px" }}
          >
            <Col
              md={7}
              style={{
                justifyContent: "center",
              }}
            >
              <motion.h1
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                variants={headingVariants}
              >
                Know Who <strong className="purple">I'M</strong>
              </motion.h1>
              <motion.div variants={cardVariants}>
                <Aboutcard />
              </motion.div>
            </Col>
          </Row>
          <motion.div variants={timelineVariants}>
            <Timeline />
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
}

export default About;
