import React from "react";
import "./Skills.css";
import { Container } from "@mui/material";
import skillsData from "./SkillsData";

// let skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "Node.js",
//   "React",
//   "SQL Databases",
//   "noSQL Databases",
//   "VSC env",
//   "jQuery",
//   "EJS",
//   "MUI",
//   "RESTful API",
//   "Bootstrap",
//   "Git",
//   "Angular",
//   "Typescript",
// ];
// let skillsEarly = ["Cloud Engineering"];

function Skills() {
  return (
    <div className="skillsSection">
      <Container className="section">
        <h2>Skills</h2>
        <div className="skills" style={{ justifyContent: "center" }}>
          <div className="skill">Advanced level of skill</div>
          <div className="skill notLearned">Beginner level of skill</div>
        </div>

        <hr />

        <div className="skills">
          {skillsData.map((skill, index) => {
            return (
              <div key={index} className="skill">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    className="icon"
                    src={skill.icon}
                    alt={skill.name}/>
                  <div className="skillName">{skill.name}</div>
                </div>
                <div class="progress-segment">
                  <div class="item red-common"></div>
                  <div class="item orange-common"></div>
                  <div class="item yellow-common"></div>
                  <div class="item green-light-common"></div>
                  <div class="item green-common"></div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Skills;
