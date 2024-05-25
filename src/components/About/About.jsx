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
  function handleScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Container id="about" className="section">
      <CustomGridContainer container spacing={1} sx={{ pt: "50px" }}>
        <CustomGridItem item xs={12} sm={8}>
          <h2>Get to know me!</h2>
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
              onClick={(event) => handleScroll(event, 'contact')}
              sx={{ margin: "0 auto", display: "block", width: "fit-content" }}
            >
              Contact
            </Button>
          </ThemeProvider>
        </CustomGridItem>
        <CustomGridItem item xs={12} sm={4}>
          <img src="https://img.freepik.com/premium-photo/portrait-successful-software-developer-eyeglasses-standing-with-arms-crossed-smiling-camera-office_249974-4145.jpg"/>
        </CustomGridItem>
      </CustomGridContainer>
    </Container>
  );
}

export default About;
