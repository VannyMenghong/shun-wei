import React from "react";
import Logo from "./Logo";
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Logo />
        <p>Phone: +855-12-955-552</p>
        <p>Email: yuthseng888@gmail.com</p>
        <p>
          Address: Prey Khvav Village, Roka Kaoh Commune, Kong Pisei District,
          Kampong Speu
        </p>
      </div>
      {/* <div className={`${styles.column} ${styles.quick_links}`}>
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
        </div> */}
      <div className={styles.column}>
        <h2>Find Us on Map</h2>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162747.1016956659!2d104.78988528884247!3d11.496096836785012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310940db1c157f5d%3A0x26a9533a75d03dac!2sPr%20130!5e0!3m2!1sen!2skh!4v1696226995291!5m2!1sen!2skh"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
          {/* <iframe
              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.990269262273!2d104.69652549999999!3d11.408252100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310940db1c157f5d%3A0x26a9533a75d03dac!2sPr%20130!5e0!3m2!1sen!2skh!4v1696226212306!5m2!1sen!2skh"}
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Google Maps"
              aria-hidden="false"
            ></iframe> */}
        </div>
      </div>
    </footer>
  );
}
