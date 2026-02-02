import React from "react";
import "./Footer.css";
import { Element } from 'react-scroll'

function Footer() {
  return (
    <Element name="footer">
      <footer className="footer">
        <h3>FLOWERS SHOP</h3>
        <p>Buy A Beautyful Flowers</p>

        <div className="social">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>

        <span>© 2026 All rights reserved</span>
      </footer>
    </Element>
  );
}

export default Footer;
