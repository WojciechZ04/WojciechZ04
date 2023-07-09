import React from "react";
import { Container, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#a9a9a9',
    },
  },
});

function About() {
  return (
    <Container id="about" sx={{ pt: "50px" }}>
      <h2>O mnie</h2>
      <p>
        Tutaj znajdziesz więcej informacji o mnie i moich umiejętnościach
        wykorzystywanych w programowaniu.
      </p>
      <Grid container spacing={2}>
        <Grid item sx={{ width: "50%" }}>
          <h3>Poznaj mnie</h3>
          <p>
            Jestem początkującym programistą o ambicji zostania Fullstack Web
            Developerem. Stale się rozwijam, ucząc się wszelkich nowych
            technologii, narzędzi oraz frameworków wykorzystywanych w
            programowaniu aplikacji internetowych. Jeśli chciałbyś dowiedzieć
            się wiecej, lub masz jakieś pytania, zapraszam do kontaktu!
          </p>
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained" href="#contact">
              Kontakt
            </Button>
          </ThemeProvider>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <h3>Umiejętności</h3>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">Node.js</div>
            <div className="skill">React</div>
            <div className="skill">SQL</div>
            <div className="skill">noSQL</div>
            <div className="skill">środowisko VSC</div>
            <div className="skill">jQuery</div>
            <div className="skill">EJS</div>
            <div className="skill">MUI</div>
            <div className="skill">RESTful API</div>
            <div className="skill">Bootstrap</div>
            <div className="skill notLearned">Angular</div>
            <div className="skill notLearned">Typescript</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
