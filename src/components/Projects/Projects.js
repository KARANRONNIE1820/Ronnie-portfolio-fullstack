import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Realestate from "../../Assets/Projects/Realestate.jpeg"
import calculatorlogo from "../../Assets/Projects/calculatorlogo.jpeg"
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import todolist from "../../Assets/Projects/todolist.png"
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png"
import emojisearch from "../../Assets/Projects/emojisearch.jpeg"
import suicide from "../../Assets/Projects/suicide.png";
import eleganceeat from "../../Assets/Projects/eleganceeat.png"
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Realestate}
              isBlog={false}
              title="RealEstate"
              description="Charming colonial-style home nestled in a tranquil wooded setting, offering both serenity and convenience in one perfect package."
              ghLink="https://github.com/KARANRONNIE1820/Full-stack-real-estate-app"
              demoLink="https://marvelous-lollipop-5970a2.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eleganceeat}
              isBlog={false}
              title="EleganceEat"
              description="Discover a world of culinary delights with our recipe app. From mouthwatering mains to delectable desserts, we've got your cravings covered."
              ghLink="https://github.com/KARANRONNIE1820/EleganceEat-food-recipeapp"
              demoLink="https://64f1e8a7f4e4b06f602391c6--chipper-tartufo-818e15.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todolist"
              description="Stay organized and productive with our user-friendly to-do list app, your personal task manager for a more efficient day"
              ghLink="https://github.com/KARANRONNIE1820/Todo-list-application"
              demoLink="https://64f1efdf7069f67558a28d3e--superb-praline-06fe00.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculatorlogo}
              isBlog={false}
              title="Calculator"
              description="Unlock the power of precision and computation with our advanced calculator, your trusted companion for all your mathematical needs, from simple arithmetic to complex equations, making every calculation a breeze"
              ghLink="https://github.com/KARANRONNIE1820/react-calculator-app1820"
              demoLink="https://64f1fb269f249300aac24979--incredible-starlight-0b850e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emojisearch}
              isBlog={false}
              title="Emojisearch"
              description="Discover the perfect emoji to express your emotions and convey your message with our comprehensive emoji search tool, where every feeling, gesture, and symbol is just a click away"
              ghLink="https://github.com/KARANRONNIE1820/react-emoji-search"
              demoLink="https://64f1fe52298f3c00a25dac82--incredible-croquembouche-e8fc24.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
