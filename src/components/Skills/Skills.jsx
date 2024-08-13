import React from "react";
import "./Skills.css";
import { Container } from "@mui/material";
import skillsData from "./SkillsData";

function Skills() {
  return (
    <div className="skillsSection">
      <Container className="section">
        <h2>Tools I work with</h2> 

        <div className="divider div-transparent div-arrow-down white"></div>

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
                {/* <div class="progress-segment">
                  <div className={`item ${skill.level >= 1 ? 'red-common' : 'grey-common'}`}></div>
                  <div className={`item ${skill.level >= 2 ? 'orange-common' : 'grey-common'}`}></div>
                  <div className={`item ${skill.level >= 3 ? 'yellow-common' : 'grey-common'}`}></div>
                  <div className={`item ${skill.level >= 4 ? 'green-light-common' : 'grey-common'}`}></div>
                  <div className={`item ${skill.level >= 5 ? 'green-common' : 'grey-common'}`}></div>
                </div> */}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Skills;
