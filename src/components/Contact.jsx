import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_347906d",
        "template_7xb192n",
        form.current,
        "49uuStra43V6sGSH8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact" className="section">
      <div className="contact" >
        <h2>Contact Me</h2>
        <p>Send a message using the form below</p>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>First and Last Name</label>
          <input type="text" name="user_name" autoComplete="off" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
