import React from "react";
import Project from "./Project";
import { Container } from "@mui/material";
import projectsData from "./ProjectsData";

function Projects() {
  return (
    <Container id="projects" className="section">
      <h2>My Projects</h2>
      <p>
        Here you will find some of my projects that I recently finished or I am
        currently working on.
      </p>
      {projectsData.map((project, index) => {
        return (
          <div>
            <Project
              key={index}
              img={project.image}
              title={project.title}
              description={project.description}
              more={project.github}
              skills={project.skills}
              page={project.page}
            />
            <hr />
          </div>
        );
      })}
      <p className="text">
        More projects can be found{" "}
        <a href="https://github.com/WojciechZ04">here</a>.
      </p>
    </Container>
  );
}

export default Projects;
