import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "./Logo";
import styles from "@/styles/Home.module.css";
import { Link, Menu, MenuItem, Stack } from "@mui/material";

const MENU_LIST = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
];

export default function Header() {
  const [active, setActive] = useState("/");

  const initActive = () => {
    const path = window.location.pathname;
    setActive(path);
  };

  useEffect(() => {
    initActive();
  }, []);

  return (
    <>
      <Head>
        <title>Shun Wei Fang Zhi Ke Ji Co., Ltd</title>
        <meta
          name="description"
          content="Welcome to Shun Wei Fang Zhi Ke Ji Co., Ltd Cambodia's leading recycling company revolutionizing the textile industry! We are committed to sustainability and environmental stewardship by transforming textile waste from garment factories into high-quality yarn, which is then used to create beautiful fabrics. Join us on this journey as we complete the lifecycle of a fabric, from cradle to grave, while making a positive impact on the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <header className={`${styles.header_sticky}`}>
        <div
          className={styles.header}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Logo />
        </div>

        {/* <div style={{ display: "flex", justifyContent: "end" }}>
          {MENU_LIST.map((menu, index) => (
            <Link href={menu.path} key={index} underline="none">
              <MenuItem sx={{ color: active == menu.path ? "white" : "#bebec8", fontSize: { xs: 12, md: 17 } }}>{menu.name}</MenuItem>
            </Link>
          ))}
        </div> */}
      </header>
    </>
  );
}
