import React from "react";
import { Grid, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Project(props) {
  const skills = props.skills;
  return (
    <Container sx={{ py: "50px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={{ width: "30%" }}>
          <img src={props.img} alt="appLogo" />
        </Grid>
        <Grid item sx={{ width: "70%" }}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                display: "grid",
                justifyContent: "center",
                flexGrow: "0",
                alignItems: "center",
                width: "10%",
                margin: "auto",
              }}
            ></AccordionSummary>
            <AccordionDetails>
              <p>[More about the project]</p>
              <h4>Skills used in this project:</h4>
              <div className="skills">
                {skills.map((skill, index) => {
                  return (
                    <div key={index} className="skill">
                      {skill}
                    </div>
                  );
                })}
              </div>
              <p>
                Complete documentation available on <a href={props.more} sx={{ textAlign: "center" }}> {props.more} </a>
              </p>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;
