import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
// import Particle from "../Particle";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import Github from "./Github";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const headingVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const listVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content-skills">
          <motion.h1
            className="project-heading"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Professional <strong className="purple">Skillset </strong>
          </motion.h1>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <Techstack />
          </motion.div>

          <motion.h1
            className="project-heading"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <strong className="purple">Tools</strong> I use
          </motion.h1>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <Toolstack />
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <Github />
          </motion.div>
        </Container>
      </Container>
    </motion.section>
  );
}

export default Home;
