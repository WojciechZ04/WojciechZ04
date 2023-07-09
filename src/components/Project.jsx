import React from "react";
import { Grid, Container } from "@mui/material";

function Project(props) {
  return (
    <Container sx={{ py: "50px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={{ width: "30%" }}>
         
          <img src={props.img} alt="weatherAppLogo" />
        </Grid>
        <Grid item sx={{ width: "70%" }}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.more}>Więcej o projekcie</a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;
