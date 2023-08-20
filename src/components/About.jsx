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
            knowledge in this categories. I'm learing from courses on Udemy and
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
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">Node.js</div>
            <div className="skill">React</div>
            <div className="skill">SQL</div>
            <div className="skill">noSQL</div>
            <div className="skill">VSC env</div>
            <div className="skill">jQuery</div>
            <div className="skill">EJS</div>
            <div className="skill">MUI</div>
            <div className="skill">RESTful API</div>
            <div className="skill">Bootstrap</div>
            <div className="skill">Git</div>
            <div className="skill notLearned">Angular</div>
            <div className="skill notLearned">Typescript</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
