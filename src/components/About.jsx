import React from "react";
import { Container, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a9a9a9",
    },
  },
});

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
];
let skillsEarly = ["Angular", "Typescript"];

function About() {
  return (
    <Container id="about" sx={{ pt: "50px" }}>
      <h2>About Me</h2>
      <p>
        Here are more information about me, what I do and my current skills used
        to create web apps.
      </p>
      <Grid container spacing={2}>
        <Grid item sx={{ width: "50%" }}>
          <h3>Get to know me!</h3>
          <p>
            I am a self-proclaimed programmer constantly improving my skills in
            terms of programming and technology. I really enjoy extending my
            knowledge in this categories. I'm learning from courses on Udemy and
            by creating my own projects (more info about my projects below). If
            you would like to know more or have any questions, feel free to
            contact me!
          </p>
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained" href="#contact">
              Contact
            </Button>
          </ThemeProvider>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <h3>Skills</h3>
          <div className="skills" style={{ justifyContent: "center" }}>
            <div className="skill">Advanced level of skill</div>
            <div className="skill notLearned">Beginner level of skill</div>
          </div>

          <hr />
          
          <div className="skills">
            {skills.map((skill, index) => {
              return <div key={index} className="skill">{skill}</div>;
            })}

            {skillsEarly.map((skill, index) => {
              return <div key={index} className="skill notLearned">{skill}</div>;
            })}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
