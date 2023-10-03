import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "../components/Logo";
import Menu2 from "./about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Menu2 />;
  // return (
  //   <>
  //     <main className={`${styles.main} ${inter.className}`}>
  //       <section className={`${styles.section}`} style={{ gap: "2rem" }}>
  //         <div className={styles.description}>
  //           <p>
  //             Welcome to <b>Shun Wei Fang Zhi Ke Ji Co., Ltd</b> Cambodia&apos;s leading recycling company revolutionizing the textile industry! We are committed to sustainability and environmental
  //             stewardship by transforming textile waste from garment factories into high-quality yarn, which is then used to create beautiful fabrics. Join us on this journey as we complete the
  //             lifecycle of a fabric, from cradle to grave, while making a positive impact on the world.
  //           </p>
  //         </div>
  //         <img alt="" className={styles.cover} src="/assets/home/p1.jpg" />
  //       </section>
  //       <section id="step1" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 1: Collection of Textile Waste</b>
  //             <br />
  //             Welcome to Shun Wei Fang Zhi Ke Ji Co., Ltd Cambodia&apos;s leading recycling company revolutionizing the textile industry! We are committed to sustainability and environmental
  //             stewardship by transforming textile waste from garment factories into high-quality yarn, which is then used to create beautiful fabrics. Join us on this journey as we complete the
  //             lifecycle of a fabric, from cradle to grave, while making a positive impact on the world.
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section1/p1.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section1/p2.jpg" />
  //           </div>
  //           <div
  //             style={{
  //               width: "100%",
  //             }}
  //           >
  //             <img style={{ width: "100%" }} alt="" src="/assets/section1/p3.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //       <section id="step2" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 2: Sorting and Classification</b>
  //             <br />
  //             Once the textile waste reaches our facility, our skilled team sorts and classifies the materials based on their composition, color, and quality. This meticulous process allows us to
  //             determine the best way to recycle and repurpose each type of textile waste, ensuring the highest level of efficiency in our operations.
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section2/p1.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section2/p2.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section2/p3.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section2/p4.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //       <section id="step3" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 3: Shredding and Cleaning</b>
  //             <br />
  //             The sorted textile waste then undergoes shredding, where it is transformed into smaller pieces to prepare it for the next stage. We also thoroughly clean the shredded material to remove
  //             any contaminants such as dirt, dyes, or chemicals, ensuring the yarn produced is of the highest quality.
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section3/p1.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section3/p2.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section3/p3.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section3/p4.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //       <section id="step4" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 4: Fiber Blending and Spinning</b>
  //             <br />
  //             In this crucial step, we blend the shredded textile waste with other fibers, such as cotton or polyester, to enhance the strength and durability of the resulting yarn. The blended fibers
  //             are then spun using advanced machinery to create yarn that meets the required specifications for fabric production.
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section4/p1.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section4/p2.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section4/p3.jpg" />
  //           </div>
  //           <div>
  //             <img style={{ width: "100%" }} alt="" src="/assets/section4/p4.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //       <section id="step5" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 5: Quality Control</b>
  //             <br />
  //             Quality control is paramount to us. Our dedicated team rigorously inspects the yarn for any flaws or defects, ensuring that only the finest products leave our facility. We perform
  //             various tests to guarantee that our yarns are durable, colorfast, and meet the specific requirements of our customers.
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div
  //             style={{
  //               width: "100%",
  //               height: "100%",
  //             }}
  //           >
  //             <img style={{ width: "100%" }} alt="" src="/assets/section5/p1.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //       <section id="step6" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 6: Fabric Distribution and Usage</b>
  //             <br />
  //             Once the yarn passes our stringent quality checks, it is ready to be distributed to fabric manufacturers and other stakeholders in the textile industry. Our yarn can be used in the
  //             creation of fabric & sustainable clothing, accessories, home furnishings, and more, providing our customers with eco-friendly and socially responsible options.
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div
  //             style={{
  //               height: "auto",
  //             }}
  //           >
  //             <img style={{ width: "100%" }} alt="" src="/assets/section6/p1.jpg" />
  //           </div>
  //           <div
  //             style={{
  //               height: "auto",
  //             }}
  //           >
  //             <img style={{ width: "100%" }} alt="" src="/assets/section6/p2.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //       <section id="step7" className={styles.section}>
  //         <div className={styles.description}>
  //           <p>
  //             <b>Step 7: End-of-Life Options</b>
  //             <br />
  //             To promote circularity, we encourage the garment factories that we partner with to return their used fabrics or garments to us. We provide recycling programs that enable us to recover
  //             the textile materials and reintroduce them into our production process, completing the sustainable fabric lifecycle.
  //             <br />
  //             <br />
  //             Join us in our mission to create a greener future for Cambodia&apos;s textile industry. Together, we can make a difference by reducing waste, conserving resources, and preserving our
  //             planet for generations to come. Contact us today to learn more about our recycling solutions or to explore partnership opportunities. Let&apos;s weave sustainability into every thread of
  //             the textile industry!
  //           </p>
  //         </div>
  //         <div className={styles.gallery}>
  //           <div
  //             style={{
  //               width: "100%",
  //               height: "100%",
  //             }}
  //           >
  //             <img style={{ width: "100%" }} alt="" src="/assets/section7/p1.jpg" />
  //           </div>
  //         </div>
  //         <div className={styles.video}>
  //           <iframe
  //             src="https://www.youtube.com/embed/SflmOJbVXoc"
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           ></iframe>
  //         </div>
  //       </section>
  //     </main>
  //   </>
  // );
}
