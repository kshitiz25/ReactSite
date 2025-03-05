import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact our team</h2>
      <p>
        Got any questions about the product or scaling on our platform? <i>We're here to help.</i><br />
        Chat to our friendly team 24/7 and get onboard in less than <b>5 minutes.</b>
      </p>

      <div className="contact-us-content">
        {/* Left Section - Contact Form */}
        <div className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="First name" required />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Last name" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@company.com" required />
          </div>

          <div className="form-group">
            <label>Phone number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Leave us a message..." required></textarea>
          </div>

          <button className="submit-btn">Send message</button>
        </div>

        {/* Right Section - Contact Info */}
        <div className="contact-info">
  <h3>Chat with us</h3>
  <p>Speak to our friendly team via live chat.</p>
  <a href="https://yourwebsite.com/livechat">💬 Start a live chat</a>
  <a href="mailto:support@yourcompany.com">📧 Shoot us an email</a>
  <a href="https://x.com/yourprofile">❌ Message us on X</a>

  <h3>Call us</h3>
  <p>Call our team Mon-Fri from 8am to 5pm.</p>
  <a href="tel:+15550000000">📞 +1 (555) 000-0000</a>

  <h3>Visit us</h3>
  <p>Chat to us in person at our Melbourne HQ.</p>
  <a href="https://goo.gl/maps/example">📍 100 Smith Street, Collingwood VIC 3066</a>
</div>
      </div>
    </div>
  );
};

export default ContactUs;
