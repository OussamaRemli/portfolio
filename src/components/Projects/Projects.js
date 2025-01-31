import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Import framer-motion for animations
import ProjectCard from "./ProjectCards"; // Updated ProjectCard
import project1 from "../../Assets/Projects/projet1.png";
import project2 from "../../Assets/Projects/projet2.png";
import project3 from "../../Assets/Projects/projet3.png";
import project4 from "../../Assets/Projects/projet4.png";
import project5 from "../../Assets/Projects/projet5.png";
import adm1 from "../../Assets/Projects/ADM (1).png";
import adm2 from "../../Assets/Projects/ADM (2).png";
import adm3 from "../../Assets/Projects/ADM (3).png";
import adm4 from "../../Assets/Projects/ADM (4).png";
import adm5 from "../../Assets/Projects/ADM (5).png";
import adm6 from "../../Assets/Projects/ADM (6).png";
import adm7 from "../../Assets/Projects/ADM (7).png";
import adm8 from "../../Assets/Projects/ADM (8).png";
import adm9 from "../../Assets/Projects/ADM (9).png";
import adm10 from "../../Assets/Projects/ADM (10).png";
import adm11 from "../../Assets/Projects/ADM (11).png";
import screen_1 from "../../Assets/Projects/screen_1.jpg";
import screen_2 from "../../Assets/Projects/screen_2.jpg";
import { SiFirebase } from "react-icons/si";


///

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
          Recent{" "}
          <strong className="purple">Academic & Professional Projects</strong>
        </motion.h1>
        <motion.p style={{ color: "white" }} variants={headingVariants}>
          Below are some of the academic and professional projects I’ve worked
          on.
        </motion.p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                title="WonderLab"
                demoLink="https://drive.google.com/file/d/1NpPNqJuVzS2QPKlPiqFRO9tre3bBX5Iy/view?usp=sharing"
                description="Wonderlab is a dynamic blogging platform designed specifically for science enthusiasts to discover, share, and engage with posts related to various scientific topics. Built using HTML, CSS, and native PHP, with a MySQL database, Wonderlab provides users the ability to post articles, share updates, and comment on the latest scientific trends. This project played a crucial role in deepening my understanding of several core web development concepts, including database management, front-end styling with CSS, and the fundamentals of server-side programming with PHP"
                ghLink="https://github.com/OussamaRemli/WonderLab/tree/master"
                techStack={["HTML", "CSS", "PHP", "MySQL"]} // Tech stack icons
              />
            </motion.div>
          </Col>
          {/* Project 2 */}
   
          {/* <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project5}
                isBlog={false}
                title="Student Management System"
                description="I developed a desktop application using JavaFX to manage student registrations for a school. The application allows administrators to add, update, and manage student information efficiently through an intuitive graphical interface. This project helped me strengthen my skills in Java, particularly in building desktop applications with JavaFX, handling user input, and creating dynamic UI components. Additionally, I gained experience in managing data persistence and ensuring smooth user interactions within a desktop environment. This project enhanced my understanding of object-oriented programming and GUI development."
                ghLink="https://github.com/OussamaRemli/Student-Management-System"
                techStack={["java"]}
              />
            </motion.div>
          </Col> */}
      -
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project5}
                isBlog={false}
                title="Weather App"
                description="Weather App is an Android application that provides real-time weather information for any city. The app uses the WeatherAPI to fetch current weather conditions and forecasts, and integrates Firebase Realtime Database for data persistence."
                ghLink="https://github.com/OussamaRemli/WeatherApp.git"
                techStack={["java","Android","Firebase"]}
                imgPaths={[screen_2,screen_1]}
                
              />
            </motion.div>
          </Col>
          {/* <Col md={4} className="project-card">
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
          </Col> */}

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <motion.div variants={projectCardVariants}>
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                title="QRABS"
                description="For my PFA, I developed a web-based absence management application that integrates QR code scanning and facial recognition technology to streamline the process of tracking student attendance. The application is designed to be user-friendly and efficient, catering to administrators, professors, and students. Administrators can manage departments, schedules, and track absences, while professors can record and review attendance data in real-time. Students register their presence using QR codes or facial recognition, enhancing both accuracy and speed.The project uses a microservices architecture, integrating the facial recognition module via Flask, while the backend is built using Spring Boot, the frontend with React.js, and data stored in MySQL/SQLite. This solution addresses the inefficiencies of manual attendance management, offering a more reliable and automated system for educational institutions, and exemplifies my ability to design and implement full-stack solutions with modern technologies."
                ghLink="https://github.com/OussamaRemli/QRABS"
                demoLink="https://www.linkedin.com/posts/activity-7232040563653443586-HH4W?utm_source=share&utm_medium=member_desktop"
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
                imgPaths={[
                  adm1,
                  adm2,
                  adm3,
                  adm4,
                  adm5,
                  adm6,
                  adm7,
                  adm8,
                  adm11,
                  adm9,
                  adm10,
                ]}
                description="During my summer internship, I contributed to a project focused on managing infrastructure projects for a highway company. The application was developed to facilitate the oversight and tracking of procedures related to highway construction, ensuring efficient management of project timelines and milestones. I utilized React combined with MUI to create an intuitive and responsive user interface, while Spring Boot served as the backbone for our backend services. A MySQL database was employed to manage project data and monitor progress effectively. We also utilized Azure for deployment, ensuring a scalable and reliable environment for our application. This role provided me with valuable insights into full-stack development, project tracking methodologies, and the operational challenges within the infrastructure sector."
                // ghLink="https://github.com/RezBadr/app-gestion-suivi-des-projets"
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
