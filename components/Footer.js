// Footer.js

import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Travel Itinerary Planner &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
