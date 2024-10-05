import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion"; // Import Framer Motion

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start animation from opacity 0 and y-axis offset
            animate={{ opacity: 1, y: 0 }} // End animation with opacity 1 and normal position
            transition={{ duration: 1.5 }}  // Animation duration
          >
            <p style={{ textAlign: "justify" }}>
              Welcome, I am <span className="purple">Oussama Remli</span>
              <br />
              a 5th-year Software Engineering student at the National School of
              Applied Sciences of Oujda.
              <br />
              I’m passionate about creating impactful software solutions and
              pushing the boundaries of technology.
              <br />
              <br />
              With a strong foundation in Java, JavaScript, and web development, I
              thrive in problem-solving and love turning complex challenges into
              creative, efficient code.
            </p>
          </motion.div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
