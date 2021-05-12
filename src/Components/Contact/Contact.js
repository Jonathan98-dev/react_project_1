import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactStyle.scss";
import { useHistory } from "react-router";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const textMessage = { name, message, email };

    setIsPending(true);

    // console.log(textMessage);
    emailjs
      .sendForm(
        "service_as2wgya",
        "template_smia09l",
        e.target,
        "user_c53ILPCQjVBo8IBgEYRnW"
      )
      .then(
        (result) => {
          console.log("success");
          setIsPending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );

    fetch("http://localhost:8000/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(textMessage),
    }).then(() => {
      console.log("added to DB");
      setName("");
      setMessage("");
      setEmail("");
    });
  };

  return (
    <div className="contact">
      <form id="contactForm" onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input
          type="text"
          required
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Your Message:</label>
        <textarea
          name="message"
          rows="10"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>

        <label>Your Email:</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {!isPending && <button>Send Message</button>}
        {isPending && <button disabled>Sending Message</button>}
      </form>
    </div>
  );
};

export default Contact;
