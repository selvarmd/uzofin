import React from "react";
import Container from "../container/container";

import "./footer..scss";

import Logo from "../../assets/icons/logo-large.svg";
import LinkedIn from "../../assets/icons/linked-in.svg";
import XIcon from "../../assets/icons/x.svg";
import InstaIcon from "../../assets/icons/insta.svg";
import FbIcon from "../../assets/icons/fb.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img alt="" src={Logo} />
            </a>
            <p className="footer-description">
              Experience the new age of payments with UzOFin and explore new
              growth opportunities to reach greater heights.
            </p>
          </div>
          <div className="footer-column-wrapper">
            <div className="footer-column">
              <h4 className="footer-heading">PRODUCTS</h4>
              <ul>
                <li>
                  <a href="#">AI Banking</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Payout</a>
                </li>
                <li>
                  <a href="#">Merchant Onboarding</a>
                </li>
                <li>
                  <a href="#">FRM</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">COMPANY</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">LEGAL</h4>
              <ul>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">SOCIAL</h4>
              <ul className="footer-list">
                <li className="social-item">
                  <a href="#" className="social-link">
                    <img alt="" src={LinkedIn} />
                    <span>/uzofin</span>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <img alt="" src={XIcon} />
                    <span>/uzofin</span>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <img alt="" src={InstaIcon} />
                    <span>/uzofin</span>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <img alt="" src={FbIcon} />
                    <span>/uzofin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 UzOFin. All rights reserved</p>
          <p>India (EN)</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
