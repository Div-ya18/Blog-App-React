import React from "react";
import "./contact.css"; 

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
