import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { Box, Container, Grid, ImageList, ImageListItem, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";
import COLORS from "../../../utils/color";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const inter = Inter({ subsets: ["latin"] });

const TypographyStyle = {
  sub_title: { xs: 20, md: 30 },
  main_title: { xs: 25, md: 35 },
};

const HeaderTitle = ({ sub, main, is_center }: { sub: String; main: String; is_center: Boolean }) => {
  return (
    <Typography
      sx={{
        textAlign: is_center ? "center" : "left",
        whiteSpace: "nowrap",
        lineHeight: "50px",
        textTransform: "uppercase",
        color: COLORS.green.dark,
        fontWeight: "400",
        fontSize: TypographyStyle.sub_title,
      }}
    >
      {sub}
      <br />
      <Typography component={"span"} sx={{ textAlign: is_center ? "center" : "left", fontWeight: "700", fontSize: TypographyStyle.main_title }}>
        {main}
      </Typography>
    </Typography>
  );
};

export default function Menu2() {
  return (
    // <main className={`${styles.main} ${inter.className}`}>
    <Container>
      <section style={{ marginTop: "120px" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" } }}>
              <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" } }}>
                  <a className={`${styles.logo}`} href="#" rel="noopener noreferrer">
                    <Image alt="Shun Wei" src="/favicon.jpeg" width={50} height={50} priority />
                    <h5 style={{ whiteSpace: "nowrap", textTransform: "uppercase", color: COLORS.green.dark, fontWeight: "800" }}>
                      shun wei fang <br />
                      zhi ke ji co.,tld
                    </h5>
                  </a>
                </Box>
                <Box sx={{ marginTop: { xs: 4, md: 11 } }}>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      whiteSpace: "nowrap",
                      lineHeight: "40px",
                      textTransform: "uppercase",
                      color: COLORS.green.dark,
                      fontWeight: "400",
                      fontSize: TypographyStyle.sub_title,
                    }}
                  >
                    company profile
                    <br />
                    <Typography component={"span"} sx={{ fontWeight: "700", fontSize: TypographyStyle.main_title }}>
                      yarn
                    </Typography>
                    <br />
                    <Typography component={"span"} sx={{ fontWeight: "700", fontSize: TypographyStyle.main_title }}>
                      industries
                    </Typography>
                  </Typography>
                </Box>
                <Box sx={{ xs: 4, md: 11 }}>
                  <Typography sx={{ textAlign: { xs: "center", md: "left" }, textTransform: "uppercase", color: COLORS.green.dark }}>yuthseng888@gmail.com</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 6, md: 0 }, p: 1 }}>
            <ImageListItem>
              {/* <Image alt="" src={`assets/menu2/p${index + 1}.jpg`} loading="lazy" /> */}
              <Image alt="" src={`/assets/menu2/p1.jpg?w=164&h=164&fit=crop&auto=format`} style={{ height: "auto", width: "100%" }} loading="lazy" />
            </ImageListItem>
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <div style={{ marginTop: "90px", marginBottom: "20px" }}>
          <HeaderTitle sub="our company" main={"who are we"} is_center={true} />
        </div>
        <ImageList cols={3}>
          {[...Array(6)].map((item, index) => (
            <ImageListItem key={index}>
              <Image alt="" src={`assets/menu2/p${index + 1}.jpg`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
      <section style={{ margin: "80px 10px", display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <div>
              <HeaderTitle sub="about our" main={"company"} is_center={false} />
              <div style={{ wordBreak: "break-word", marginTop: "20px" }}>
                <p style={{ wordSpacing: "7px" }}>
                  Shun Wei Fang Zhi ke ji Co., Ltd គឺជាក្រុមហ៊ុនជំនាញខាងផ្នែកផលិតអំបោះដែលមានគុណភាព។ នៅពេលក្រណាត់ដែលប្រើប្រាស់រួច ភាគច្រើនបានក្លាយជាកាកសំណល់ដែលត្រូវបានទុកចោលនៅកន្លែងគំនរសំរាម។
                  វិបត្តិសំណល់វាយនភ័ណ្ឌនេះ ជាបញ្ហាប្រឈមទៅនិងផលប៉ះពាល់ដល់បរិស្ថានយ៉ាងខ្លាំងនាពេលបច្ចុប្បន្ន។ ដោយផ្ដោតលើការកាត់បន្ថយផលប៉ះពាល់បរិស្ថាននៃឧស្សាហកម្មវាយនភ័ណ្ឌក្នុងប្រទេសកម្ពុជា
                  គឺតាមរយៈដំណើរការកែច្នៃឡើងវិញ ដោយប្រើវាយនភ័ណ្ឌដែលប្រើប្រាស់រួច ទៅបង្កើតជាសរសៃវិស្វកម្វ។
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image alt="" src="assets/menu2/p8.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px", display: "flex", alignItems: "start" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <div>
              <HeaderTitle sub="OUR COMPANY" main={"CERTIFICATION"} is_center={false} />
              <div style={{ wordBreak: "break-word", marginTop: "20px" }}>
                <p style={{ wordSpacing: "7px" }}>
                  ដោយមានការលើកទឹកចិត្តពីរដ្ឋាភិបាល ក៏ដូជាក្រសួងបរិស្ថាន ក្រុមហ៊ុន Shun Wei Fang Zhi Ke Ji Co., Ltd
                  ត្រូវបានផ្ដល់សិទ្ធក្នុងការវិនិយោគលើគម្រោងកែច្នៃកាកសំណល់ឧស្សាហកម្មនៅក្នុងរោងចក្រកាត់ដេរ ដើម្បីចូលរួមក្នុងការកាត់បន្ថយកាក់សំណល់ក្នុងស្រុក។
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <div style={{ marginTop: "50px" }}>
              <Image alt="" src="assets/menu2/certificate.jpg" style={{ height: "auto", width: "100%" }} />
            </div>
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px", display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle sub="WHAT WE DO" main={"RESEARCH & DEVELOPMENT"} is_center={false} />
            <div style={{ wordBreak: "break-word", marginTop: "20px" }}>
              <p style={{ wordSpacing: "7px" }}>
                យើងមានអ្នកជំនាញផ្នែកវាយនភ័ណ្ឌ ដែលផ្ដោតលើការអភិវឌ្ឍន៍បច្ចេកវិទ្យាបង្កើតឡើងវិញនូវអំបោះដែលត្រូវបានរចនាឡើង ដោយបំប្លែងកាកសំណល់រាយនភណ្ឌទៅជាសរសៃដែលអាចប្រើប្រាស់ឡើងវិញបាន។
                ដោយបានធ្វើពាណិជ្ជកម្មពីក្រុមប្រឹក្សាអភិវឌ្ឋន៍កម្ពុជា ឥឡូវនេះយើងកំពុងធ្វើការពង្រីកវេទិការបច្ចេកវិទ្យាមូលដ្ឋាន ដើម្បីកែច្នៃប្រភេទសរសៃដោយប្រាកដថា អំបោះទាំងអស់នេះអាចកែច្នៃឡើងវិញបាន។
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <Image alt="" src="assets/menu2/p10.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle sub="PRODUCTION" main={"HOW THE PROCESS WORK"} is_center={false} />
            <div>
              <p style={{ wordSpacing: "3px" }}>
                យើងមានការប្ដេជ្ញាចិត្តចំពោះនិរន្ដរភាព និងការគ្រប់គ្រងបរិស្ថាន ដោយបំលែងកាកសំណល់វាយនភ័ណ្ឌពីរោងចក្រកាត់ដេរទៅជារោងចក្រដែលផលិតអំបោះមានគុណភាពខ្ពស់ អាចផលិតនូវក្រណាាត់ដ៏ស្រស់ស្អាត។
                ចូលរួមជាមួយពួកយើងក្នុងដំណើរការនៃចង្វាក់ផលិតកម្មរបស់ក្រណាត់ ផ្ដើមពីដំណាក់កាលដំបូងរហូតដល់ដំណាក់កាលចុងក្រោយ ដោយមិនប៉ះពាល់ដល់បរិស្ថាន។
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <Image alt="" src="assets/menu2/p15.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ p: 2 }}>
            <HeaderTitle sub="COMPANY PROCESS" main={"ALL OF OUR PRODUCTS"} is_center={false} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Image alt="" src="assets/menu2/p16.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Image alt="" src="assets/menu2/p17.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Image alt="" src="assets/menu2/p18.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Image alt="" src="assets/menu2/p19.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle sub="COMPANY PRODUCT" main={"OUR PRODUCTS"} is_center={false} />
            <div>
              <Typography sx={{ wordSpacing: "3px", color: COLORS.green.dark, fontSize: { xs: 16, md: 20 } }}>
                High-Quality Yarn has 3 colors which are white cream, gray, light yellow, and black
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }}>
            <Image alt="" src="assets/menu2/p20.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle sub="OUR COMPANY" main={"MEET OUR TEAM"} is_center={false} />
          </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }}>
            <Image alt="" src="assets/menu2/p6.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 0px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <a className={`${styles.logo}`} href="#" rel="noopener noreferrer">
              <Image src="/favicon.jpeg" alt="Shun Wei" width={50} height={50} priority />
              <h5 style={{ whiteSpace: "nowrap", textTransform: "uppercase", color: COLORS.green.dark, fontWeight: "800" }}>
                shun wei fang <br />
                zhi ke ji co.,tld
              </h5>
            </a>
            <HeaderTitle sub="" main={"CONTACT US"} is_center={false} />
            <p style={{ wordSpacing: "7px" }}>
              ចូលរួមជាមួយពួកយើងនៅបេសកកម្មក្នុងការបង្កើតទីក្រុងបៃតងសម្រាប់ឧស្សាហកម្មវាយនភ័ណ្ឌរបស់កម្ពុជានាពេលអនាគត។ ពួកយើងរួមគ្នាកាត់បន្ថយកាកសំណល់ ការអផិរក្សធនធាន
              និងការថែរក្សាប្រទេសរបស់យើងសម្រាប់មនុស្សជំនាន់ក្រោយ។ ទាក់ទងមកយើងថ្ងៃនេះ ដើម្បីស្វែងយល់បន្ថែមអំពីវិធីសាស្រ្ត និងដំណោះស្រាយនៃការកែច្នៃឡើងវិញរបស់យើង ឬស្វែងរកឱកាសភាពជាដៃគូ។
              ចូលរួមជាមួយយើងដើម្បីលើកកំពស់វិស័យឧស្សាហកម្មវាយនភ័ណ្ឌអោយមាននិរន្ដរភាព។
            </p>
          </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }}>
            <Image alt="" src="assets/menu2/p6.jpg" style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </section>
    </Container>
    // </main>
  );
}
