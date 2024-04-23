import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a9a9a9",
    },
  },
});

const CustomGridContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 767px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const CustomGridItem = styled(Grid)({
  width: "100%",
  "@media (max-width: 767px)": {
    width: "100%",
  },
});

function About() {
  return (
    <Container id="about" className="section">
      <h2>About Me</h2>
      <p>
        Here are more information about me, what I do and my current skills used
        to create web apps.
      </p>
      <CustomGridContainer container spacing={1} sx={{ pt: "50px" }}>
        <CustomGridItem item>
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
            <Button
              color="primary"
              variant="contained"
              href="#contact"
              sx={{ margin: "0 auto", display: "block", width: "fit-content" }}
            >
              Contact
            </Button>
          </ThemeProvider>
        </CustomGridItem>
        {/* <CustomGridItem item>
          <h2>PHOTO OF ME</h2>
        </CustomGridItem> */}
      </CustomGridContainer>
    </Container>
  );
}

export default About;
