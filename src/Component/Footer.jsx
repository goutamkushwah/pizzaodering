import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer>
  
  <section className="ft-main">
    <div className="ft-main-item">
      <h2 className="ft-title">Order Now</h2>
      <ul>
        <li><a href="/">Deals</a></li>
        <li><a href="/">Pizza</a></li>
        <li><a href="/">Sides</a></li>
        <li><a href="/">Drinks</a></li>
        <li><a href="/">Desserts</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">About</h2>
      <ul>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contactless delivery</a></li>
        <li><a href="/">Nutrition</a></li>
        <li><a href="/">Career</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">Our Policies</h2>
      <ul>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Terms & Conditions</a></li>
        <li><a href="/">FAQs & Help</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">Stay Updated</h2>
      <p>Subscribe to our newsletter to get our latest Menu.</p>
      <form>
        <input type="email" name="email" placeholder="Enter email address" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  </section>

  
  <section className="ft-legal">
    <ul className="ft-legal-list">
      <li><a href="/">Terms &amp; Conditions</a></li>
      <li><a href="/">Privacy Policy</a></li>
      <li>&copy; 2023 Copyright Goutam Kushwah.</li>
    </ul>
  </section>
</footer>
    </>
  )
}

export default Footer