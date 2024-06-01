import React, { useRef } from "react";
import "./Contact.css";
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
    <Container id="contact" className="section" maxWidth={false}>
      <div className="contact">
        <h2>Contact Me</h2>
        <p>Send a message using the form below</p>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>First and Last Name</label>
          <input type="text" name="user_name" autoComplete="off" required/>
          <label>Email</label>
          <input type="email" name="user_email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
          <label>Message</label>
          <textarea name="message" required/>
          <input type="submit" value="Send" />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
