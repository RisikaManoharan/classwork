import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Contact Us</h4>
        <p>ABC Main Street</p>
        <p> USA 654321</p>
        <p>Phone: 666-555-7777</p>
        <p>Email: XYZ@company.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;