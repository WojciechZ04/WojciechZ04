import React from "react";
import styled from "@emotion/styled";
import { Grid, Container, Button, Tooltip } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomGridContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const CustomGridItem = styled(Grid)({
  textAlign: "center",
  "@media (max-width: 1200px)": {
    width: "100%",
  },
});

function Project(props) {
  const skills = props.skills;

  const handleButtonClick = () => {
    if (props.page !== "/") {
      window.open(props.page, "_blank");
    }
  };

  return (
    <Container>
      <CustomGridContainer
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ py: "50px" }}
      >
        <CustomGridItem item sx={{ width: "30%" }}>
          <img src={props.img} alt="appLogo" />
        </CustomGridItem>
        <CustomGridItem item sx={{ width: "70%" }}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Tooltip
            title={props.page === "/" ? "Sorry, this page is not available right now" : ""}
            arrow
          >
            <span>
              <Button
                color="primary"
                variant="contained"
                disabled={props.page === "/"}
                onClick={handleButtonClick}
                sx={{
                  margin: "0 auto",
                  display: "block",
                  width: "fit-content",
                }}
              >
                See online version
              </Button>
            </span>
          </Tooltip>
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
              {/* <p>[More about the project]</p> */}
              <h4>Tools used in this project:</h4>
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
                Complete documentation available on{" "}
                <a href={props.more} sx={{ textAlign: "center" }}>
                  {" "}
                  {props.more}{" "}
                </a>
              </p>
            </AccordionDetails>
          </Accordion>
        </CustomGridItem>
      </CustomGridContainer>
    </Container>
  );
}

export default Project;
