import React from 'react';

import './Newsletter.css';
import { SubHeading } from '../../components';
const Newsletter = () => (
  <div className="app__newsletter" style={{ zIndex: '1' }}>
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss Latest Updates!</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter Your Email Address" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
