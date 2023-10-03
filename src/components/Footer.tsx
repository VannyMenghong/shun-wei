import React from "react";
import Logo from "./Logo";
import styles from "@/styles/Home.module.css";
import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <div>
            <Logo />
            <p style={{ lineHeight: "25px" }}>Phone: +855-12-955-552</p>
            <p style={{ lineHeight: "25px" }}>Email: yuthseng888@gmail.com</p>
            <p style={{ lineHeight: "25px" }}>
              Address: Prey Khvav Village, Roka Kaoh Commune, Kong Pisei
              District, Kampong Speu
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <h2>Find Us on Map</h2>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162747.1016956659!2d104.78988528884247!3d11.496096836785012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310940db1c157f5d%3A0x26a9533a75d03dac!2sPr%20130!5e0!3m2!1sen!2skh!4v1696226995291!5m2!1sen!2skh"
                style={{ height: "400px", width: "100%", marginTop: "20px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
