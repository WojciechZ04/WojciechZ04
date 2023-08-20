import React from "react";
import { Grid, Container } from "@mui/material";

function Project(props) {
  return (
    <Container sx={{ py: "50px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={{ width: "30%" }}>
         
          <img src={props.img} alt="appLogo" />
        </Grid>
        <Grid item sx={{ width: "70%" }}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.more}>More about this project</a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;
