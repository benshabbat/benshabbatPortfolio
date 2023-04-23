import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_newqunt",
        "template_3lwfqau",
        form.current,
        "Ox4xk9_-rVoK8K1JW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  const contactMe = [
    {
      name: "Email",
      address: "Benshabbat27@gmail.com",
      icon: <MdOutlineEmail />,
      link: "mailto:benshabbat27@gmail.com",
    },
    {
      name: "Messenger",
      address: "Chen-David Benshabbat",
      icon: <RiMessengerLine />,
      link: "http://m.me/chen.benshabbat",
    },
    {
      name: "WhatsApp",
      address: "050-2284238",
      icon: <BsWhatsapp />,
      link: "http://api.whatsapp.com/send?phone=0502284238",
    },
  ];
  return (
    <section id="contact">
      <h5>Send Message</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {contactMe.map((contact) => {
            return (
              <article key={contact.name} className="contact_option">
                <div className="contact_option-icon">{contact.icon}</div>
                <h4>{contact.name} </h4>
                <h5>{contact.address} </h5>
                <a href={contact.link} target="_blank">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
