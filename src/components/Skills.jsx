import { Container } from "@mui/material";
import React from "react";

let skills = [
	"HTML",
	"CSS",
	"JavaScript",
	"Node.js",
	"React",
	"SQL Databases",
	"noSQL Databases",
	"VSC env",
	"jQuery",
	"EJS",
	"MUI",
	"RESTful API",
	"Bootstrap",
	"Git",
	"Angular",
	"Typescript",
  ];
  let skillsEarly = ["Cloud Engineering"];

function Skills() {
  return (
    <Container>
      <h3>Skills</h3>
      <div className="skills" style={{ justifyContent: "center" }}>
        <div className="skill">Advanced level of skill</div>
        <div className="skill notLearned">Beginner level of skill</div>
      </div>

      <hr />

      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill">
              {skill}
            </div>
          );
        })}

        {skillsEarly.map((skill, index) => {
          return (
            <div key={index} className="skill notLearned">
              {skill}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Skills;