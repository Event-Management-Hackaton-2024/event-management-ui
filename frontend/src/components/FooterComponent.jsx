import React from "react";
import "./FooterComponent.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="footer mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Logo</h5>
            <p>Some text about your company</p>

            <div className="social-media-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">Contact</h5>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
