import React from "react";
import { Container, Grid } from "@mui/material";

function About() {
  return (
    <Container id="about" sx={{pt: "50px"}}>
      <h2>O mnie</h2>
      <p>
        Tutaj znajdziesz więcej informacji o mnie i moich umiejętnościach
        wykorzystywanych w programowaniu.
      </p>
      <Grid container spacing={2}>
        <Grid item sx={{ width: "50%" }}>
          <h3>Poznaj mnie</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sapien elit, lacinia non mollis ac, rutrum vel est. Morbi tortor
            massa, consequat vitae posuere ut, vehicula sit amet dolor.
            Vestibulum blandit justo tempus neque porta, vitae ultrices quam
            tempor. Vivamus dapibus velit nec varius volutpat. Vestibulum ac sem
            quis nunc fringilla accumsan cursus non ante.
          </p>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <h3>Umiejętności</h3>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill notLearned">JavaScript</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;