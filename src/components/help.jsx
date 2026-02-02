import React from "react";
import "./help.css";
import { Element } from 'react-scroll'

function Help() {
  return (
    <Element name="help" className="help-container">
      <h2>Help & Support</h2>
      
      <div className="help-content">
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4>How do I place an order?</h4>
            <p>Browse our flower collection, click "Add to Cart" on your desired items, and proceed to checkout.</p>
          </div>
          
          <div className="faq-item">
            <h4>What are your delivery hours?</h4>
            <p>We deliver flowers from 9 AM to 8 PM, Monday through Sunday.</p>
          </div>
          
          <div className="faq-item">
            <h4>Do you offer same-day delivery?</h4>
            <p>Yes! Orders placed before 2 PM can be delivered the same day within our service area.</p>
          </div>
          
          <div className="faq-item">
            <h4>How do I care for my flowers?</h4>
            <p>Keep flowers in fresh water, trim stems regularly, and place in a cool location away from direct sunlight.</p>
          </div>
        </div>
        
        <div className="contact-info">
          <h3>Need More Help?</h3>
          <p>📞 Call us: +91 98765 43210</p>
          <p>📧 Email: support@flowershop.com</p>
          <p>🕒 Support Hours: 9 AM - 6 PM</p>
        </div>
      </div>
    </Element>
  );
}

export default Help;
