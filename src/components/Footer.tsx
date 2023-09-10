import React from 'react'
import Logo from './Logo'
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.column}>
          <Logo />
          <p>Address: 123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className={`${styles.column} ${styles.quick_links}`}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#step1">Step 1: Collection of Textile Waste</a>
            </li>
            <li>
              <a href="#step2">Step 2: Sorting and Classification</a>
            </li>
            <li>
              <a href="#step3">Step 3: Shredding and Cleaning</a>
            </li>
            <li>
              <a href="#step4">Step 4: Fiber Blending and Spinning</a>
            </li>
            <li>
              <a href="#step5">Step 5: Quality Control</a>
            </li>
            <li>
              <a href="#step6">Step 6: Fabric Distribution and Usage</a>
            </li>
            <li>
              <a href="#step7">Step 7: End-of-Life Options</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Find Us on Map</h2>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62765.22442275337!2d104.91776859086463!3d11.533585976898872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951cb038982f9%3A0xc21b4b522ae49bc3!2sChip%20Mong%20271%20Mega%20Mall!5e0!3m2!1sen!2skh!4v1689576765695!5m2!1sen!2skh"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Google Maps"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </footer>
  )
}
