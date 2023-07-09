import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
  },
});

function Footer() {
  return (
    <div className="content">
      <ThemeProvider theme={theme}>
        <div className="socials">
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/wojciech-zieli%C5%84ski-45205b268/"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" href="https://github.com/WojciechZ04">
            <GitHubIcon />
          </IconButton>
        </div>
        <p>
          <EmailIcon color="primary" />
          zielinski.wojciech04@gmail.com
        </p>

        <p>Copyright © 2023 | Made by Wojciech Zieliński</p>
      </ThemeProvider>
    </div>
  );
}

export default Footer;
