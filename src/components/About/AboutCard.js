import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  //  Utkarsh Gupta from the spiritual city of Ayodhya, India — a Computer Science
  //  engineer in the making, blending logic with creativity, and turning caffeine into clean code. 😎💻

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Utkarsh Gupta </span>
            from <span className="purple">the spiritual city of Ayodhya, India</span>
            <br />
             — a Computer Science  engineer in the making,
            <br />
             blending logic with creativity, and turning caffeine into clean code. 😎💻
            <br />
            <br />
              My Hobbies- 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Utkarshuv</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
