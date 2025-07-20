import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import diabestic from "../../Assets/Projects/diebitc ML.png";
import myntraclone from "../../Assets/Projects/myntraclone.webp";
import travelmanagement from "../../Assets/Projects/travelmanegementsystem.jpeg";
import watermanegemnt from "../../Assets/Projects/water manegement.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntraclone}
              isBlog={false}
              title="Myntra clone"
              description="A stylish and fully functional e-commerce fashion platform inspired by Myntra, offering seamless browsing, filtering, and shopping experiences."
              ghLink="https://github.com/codewithuv/myntra-clone"
              demoLink="https://codewithuv.github.io/myntra-clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelmanagement}
              isBlog={false}
              title="Travel and Tour app"
              description="A desktop-based Travel Management System designed to streamline bookings, itineraries, and customer details for hassle-free trip planning and management."
              ghLink="https://github.com/codewithuv/Travel-Management-System"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabestic}
              isBlog={false}
              title="Diabetes Prediction Model"
              description="A machine learning-based diabetes prediction model built using Python, Pandas, NumPy, Scikit-learn, and Streamlit to analyze health metrics and predict diabetes risk accurately."
              ghLink="https://github.com/codewithuv/gfg-hackthon"
              demoLink="https://drive.google.com/file/d/1TJm_iKP4gQ0zQ95nI3-mJE_UYfwrV0QG/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watermanegemnt}
              isBlog={false}
              title="Smart water Management System"
              description="A responsive and interactive Smart Water Management System that visualizes real-time water data and promotes efficient usage through alerts and insights."
              ghLink="https://github.com/codewithuv/Smart-water-management-System/"
              demoLink="https://codewithuv.github.io/Smart-water-management-System/"
            />
          </Col>
{/* 
          

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Uses Natural Language Processing to detect suicide-related posts and suicidal ideation in cyberspace to assist in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using the FER-2013 dataset with Keras and TensorFlow. Achieved 60.1% accuracy in emotion prediction. Used OpenCV for face detection and passed faces to the classifier to recognize emotions."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
