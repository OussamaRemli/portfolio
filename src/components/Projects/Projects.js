import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Import framer-motion for animations
import ProjectCard from "./ProjectCards"; // Updated ProjectCard
import project1 from "../../Assets/Projects/projet1.png";
import project2 from "../../Assets/Projects/projet2.png";
import project3 from "../../Assets/Projects/projet3.png";
import project4 from "../../Assets/Projects/projet4.png";
import project5 from "../../Assets/Projects/projet5.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="project-section"
    >
      <Container fluid>
        <motion.h1 className="project-heading" variants={headingVariants}>
          My Recent <strong className="purple">Works</strong>
        </motion.h1>
        <motion.p style={{ color: "white" }} variants={headingVariants}>
          Here are a few projects I've worked on recently.
        </motion.p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                title="WonderLab"
                description="Wonderlab is a dynamic blogging platform designed specifically for science enthusiasts to discover, share, and engage with posts related to various scientific topics. Built using HTML, CSS, and native PHP, with a MySQL database, Wonderlab provides users the ability to post articles, share updates, and comment on the latest scientific trends. This project played a crucial role in deepening my understanding of several core web development concepts, including database management, front-end styling with CSS, and the fundamentals of server-side programming with PHP"
                ghLink="https://github.com/OussamaRemli/WonderLab/tree/master"
                techStack={["HTML", "CSS", "PHP", "MySQL"]} // Tech stack icons
              />
            </motion.div>
          </Col>
          {/* Project 2 */}
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project4}
                isBlog={false}
                title="BlogApp"
                description="I developed a blogging application using Node.js for the backend and React for the frontend. The app allows users to create, edit, and manage blogs, providing a platform for content sharing. This project helped me solidify my understanding of the fundamentals of Node.js, including server-side development, API creation, and handling database operations. On the frontend, working with React improved my skills in building dynamic and responsive user interfaces. Through this experience, I gained practical knowledge in full-stack development, RESTful API integration, and managing data flows between the client and server."
                ghLink="https://github.com/MouadMakkour/BlogApp"
                techStack={["React", "Node.js"]}
              />
            </motion.div>
          </Col>
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project5}
                isBlog={false}
                title="SchoolReg "
                description="I developed a desktop application using JavaFX to manage student registrations for a school. The application allows administrators to add, update, and manage student information efficiently through an intuitive graphical interface. This project helped me strengthen my skills in Java, particularly in building desktop applications with JavaFX, handling user input, and creating dynamic UI components. Additionally, I gained experience in managing data persistence and ensuring smooth user interactions within a desktop environment. This project enhanced my understanding of object-oriented programming and GUI development."
                ghLink="https://github.com/MouadMakkour/BlogApp"
                techStack={["java"]}
              />
            </motion.div>
          </Col>
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                title="WeatherApp"
                description="I developed an Android application that provides real-time weather updates based on the user's current location. The app features weather forecasting and allows users to search and navigate weather conditions in different cities. It integrates with a weather API to fetch accurate data and uses Firebase for user authentication and cloud storage. This project enabled me to deepen my understanding of Java for Android development, API integration, and managing real-time data. I also gained experience in handling geolocation services, building intuitive user interfaces, and working with cloud technologies like Firebase."
                ghLink="https://github.com/OussamaRemli/QRABS"
                techStack={["Android", "Firebase"]}
              />
            </motion.div>
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                title="QRABS"
                description="For my PFA, I developed a web-based absence management application that integrates QR code scanning and facial recognition technology to streamline the process of tracking student attendance. The application is designed to be user-friendly and efficient, catering to administrators, professors, and students. Administrators can manage departments, schedules, and track absences, while professors can record and review attendance data in real-time. Students register their presence using QR codes or facial recognition, enhancing both accuracy and speed.The project uses a microservices architecture, integrating the facial recognition module via Flask, while the backend is built using Spring Boot, the frontend with React.js, and data stored in MySQL/SQLite. This solution addresses the inefficiencies of manual attendance management, offering a more reliable and automated system for educational institutions, and exemplifies my ability to design and implement full-stack solutions with modern technologies."
                ghLink="https://github.com/OussamaRemli/QRABS"
                techStack={[
                  "React",
                  "Material UI",
                  "Spring Boot",
                  "Python",
                  "MySQL",
                  "SQLite",
                ]}
              />
            </motion.div>
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project3}
                isBlog={false}
                title="ADM projet"
                description="During my summer internship, I contributed to a project focused on managing infrastructure projects for a highway company. The application was developed to facilitate the oversight and tracking of procedures related to highway construction, ensuring efficient management of project timelines and milestones. I utilized React combined with MUI to create an intuitive and responsive user interface, while Spring Boot served as the backbone for our backend services. A MySQL database was employed to manage project data and monitor progress effectively. We also utilized Azure for deployment, ensuring a scalable and reliable environment for our application. This role provided me with valuable insights into full-stack development, project tracking methodologies, and the operational challenges within the infrastructure sector."
                ghLink="https://github.com/RezBadr/app-gestion-suivi-des-projets"
                techStack={[
                  "React",
                  "Material UI",
                  "Spring Boot",
                  "MySQL",
                  "Azure",
                ]}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Projects;