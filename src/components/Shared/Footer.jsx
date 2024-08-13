import React, { useState } from "react";
import "./Footer.css";
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

const currentYear = new Date().getFullYear();

function Footer() {
  const [showNotification, setShowNotification] = useState(false);

  const copyEmailToClipboard = () => {
    const email = 'zielinski.wojciech04@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };
  return (
    <div className="content" id="footer">
      <ThemeProvider theme={theme}>
        <div className="socials">
          <IconButton
            sx={{ color: "#f5f5f5" }}
            href="https://www.linkedin.com/in/wojciech-zieli%C5%84ski-45205b268/"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: "#f5f5f5" }} href="https://github.com/WojciechZ04">
            <GitHubIcon />
          </IconButton>
        </div>
        {showNotification && <div className="notification">Email copied to clipboard!</div>}
        <div className="email" onClick={copyEmailToClipboard}>
            <EmailIcon />
          <p>zielinski.wojciech04@gmail.com</p>
        </div>

        <p>Copyright © {currentYear} | Made by Wojciech Zieliński</p>
      </ThemeProvider>
    </div>
  );
}

export default Footer;
