import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  LinearProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";
import COLORS from "../../../utils/color";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const inter = Inter({ subsets: ["latin"] });

const TypographyStyle = {
  sub_title: { xs: 20, md: 30 },
  main_title: { xs: 25, md: 35 },
  text: "18px",
};

const HeaderTitle = ({
  sub,
  main,
  is_center,
  sx,
}: {
  sub: String;
  main: String;
  is_center: Boolean;
  sx: Object;
}) => {
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
      <Typography
        component={"span"}
        sx={{
          textAlign: is_center ? "center" : "left",
          fontWeight: "700",
          fontSize: TypographyStyle.main_title,
          textOverflow: "ellipsis",
          ...sx,
        }}
      >
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
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "left" },
                  }}
                >
                  <a
                    className={`${styles.logo}`}
                    href="#"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Shun Wei"
                      src="/favicon.jpeg"
                      width={50}
                      height={50}
                    />
                    <h5
                      style={{
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                        color: COLORS.green.dark,
                        fontWeight: "800",
                      }}
                    >
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
                    <Typography
                      component={"span"}
                      sx={{
                        fontWeight: "700",
                        fontSize: TypographyStyle.main_title,
                      }}
                    >
                      yarn
                    </Typography>
                    <br />
                    <Typography
                      component={"span"}
                      sx={{
                        fontWeight: "700",
                        fontSize: TypographyStyle.main_title,
                      }}
                    >
                      industries
                    </Typography>
                  </Typography>
                </Box>
                <Box sx={{ xs: 4, md: 11 }}>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      textTransform: "uppercase",
                      color: COLORS.green.dark,
                    }}
                  >
                    yuthseng888@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 6, md: 0 }, p: 1 }}>
            <ImageListItem>
              {/* <img alt="" src={`assets/menu2/p${index + 1}.jpg`} loading="lazy" /> */}
              <img
                alt=""
                src={`/assets/menu2/p1.jpg?w=164&h=164&fit=crop&auto=format`}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </ImageListItem>
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <div style={{ marginTop: "90px", marginBottom: "20px" }}>
          <HeaderTitle
            sx={{}}
            sub="our company"
            main={"who are we"}
            is_center={true}
          />
        </div>
        <ImageList cols={3}>
          {[...Array(6)].map((item, index) => (
            <ImageListItem key={index}>
              <img
                alt=""
                src={`assets/menu2/p${index + 1}.jpg`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
      <section
        style={{
          margin: "80px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <div>
              <HeaderTitle
                sx={{}}
                sub="about our"
                main={"company"}
                is_center={false}
              />
              <div style={{ wordBreak: "break-word", marginTop: "20px" }}>
                <p
                  style={{
                    wordSpacing: "7px",
                    fontSize: TypographyStyle.text,
                  }}
                >
                  {/* Shun Wei Fang Zhi ke ji Co., Ltd គឺជាក្រុមហ៊ុនជំនាញខាងផ្នែកផលិតអំបោះដែលមានគុណភាព។ នៅពេលក្រណាត់ដែលប្រើប្រាស់រួច ភាគច្រើនបានក្លាយជាកាកសំណល់ដែលត្រូវបានទុកចោលនៅកន្លែងគំនរសំរាម។
                  វិបត្តិសំណល់វាយនភ័ណ្ឌនេះ ជាបញ្ហាប្រឈមទៅនិងផលប៉ះពាល់ដល់បរិស្ថានយ៉ាងខ្លាំងនាពេលបច្ចុប្បន្ន។ ដោយផ្ដោតលើការកាត់បន្ថយផលប៉ះពាល់បរិស្ថាននៃឧស្សាហកម្មវាយនភ័ណ្ឌក្នុងប្រទេសកម្ពុជា
                  គឺតាមរយៈដំណើរការកែច្នៃឡើងវិញ ដោយប្រើវាយនភ័ណ្ឌដែលប្រើប្រាស់រួច ទៅបង្កើតជាសរសៃវិស្វកម្វ។ */}
                  Shun Wei Fang Zhi Ke Ji Co., Ltd is a recycling company, that
                  specializes in high-quality yarn production, to reduce the
                  negative environmental impacts of the textile industry in
                  Cambodia. When fabrics become waste, they ended up in
                  landfills. The textile waste crisis is one of the biggest
                  environmental challenges of our time. A proven way to lower
                  impact with more sustainable solutions for the industry is
                  through the process of regeneration by using unwanted textiles
                  to create engineered fibers, which can be recycled again and
                  again.
                </p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", paddingTop: "40px", paddingBottom: "20px" }}
          >
            <img
              alt=""
              src="assets/menu2/p8.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section
        style={{ margin: "80px 10px", display: "flex", alignItems: "start" }}
      >
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <div>
              <HeaderTitle
                sx={{}}
                sub="OUR COMPANY"
                main={"CERTIFICATION"}
                is_center={false}
              />
              <div style={{ wordBreak: "break-word", marginTop: "20px" }}>
                <p
                  style={{ wordSpacing: "7px", fontSize: TypographyStyle.text }}
                >
                  {/* ដោយមានការលើកទឹកចិត្តពីរដ្ឋាភិបាល ក៏ដូជាក្រសួងបរិស្ថាន ក្រុមហ៊ុន Shun Wei Fang Zhi Ke Ji Co., Ltd
                  ត្រូវបានផ្ដល់សិទ្ធក្នុងការវិនិយោគលើគម្រោងកែច្នៃកាកសំណល់ឧស្សាហកម្មនៅក្នុងរោងចក្រកាត់ដេរ ដើម្បីចូលរួមក្នុងការកាត់បន្ថយកាក់សំណល់ក្នុងស្រុក។ */}
                  With the encouragement of the government as well as the
                  Ministry of Environment, Shun Wei Company has been granted the
                  right to invest in recycling projects of industrial waste in
                  garment factories to participate in reducing local waste.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <div style={{ marginTop: "50px" }}>
              <img
                alt=""
                src="assets/menu2/certificate.jpg"
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      </section>
      <section
        style={{
          margin: "80px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle
              sub="WHAT WE DO"
              main={"RESEARCH & DEVELOPMENT"}
              is_center={false}
              sx={{ fontSize: "1.5rem !important" }}
            />
            <div style={{ wordBreak: "break-word", marginTop: "20px" }}>
              <p style={{ wordSpacing: "7px", fontSize: TypographyStyle.text }}>
                {/* យើងមានអ្នកជំនាញផ្នែកវាយនភ័ណ្ឌ ដែលផ្ដោតលើការអភិវឌ្ឍន៍បច្ចេកវិទ្យាបង្កើតឡើងវិញនូវអំបោះដែលត្រូវបានរចនាឡើង ដោយបំប្លែងកាកសំណល់រាយនភណ្ឌទៅជាសរសៃដែលអាចប្រើប្រាស់ឡើងវិញបាន។
                ដោយបានធ្វើពាណិជ្ជកម្មពីក្រុមប្រឹក្សាអភិវឌ្ឋន៍កម្ពុជា ឥឡូវនេះយើងកំពុងធ្វើការពង្រីកវេទិការបច្ចេកវិទ្យាមូលដ្ឋាន ដើម្បីកែច្នៃប្រភេទសរសៃដោយប្រាកដថា អំបោះទាំងអស់នេះអាចកែច្នៃឡើងវិញបាន។ */}
                With the encouragement of the government as well as the Ministry
                of Environment, Shun Wei Company has been granted the right to
                invest in recycling projects of industrial waste in garment
                factories to participate in reducing local waste.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <img
              alt=""
              src="assets/menu2/p10.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle
              sx={{}}
              sub="PRODUCTION"
              main={"HOW THE PROCESS WORK"}
              is_center={false}
            />
            <div>
              <p style={{ fontSize: TypographyStyle.text }}>
                {/* យើងមានការប្ដេជ្ញាចិត្តចំពោះនិរន្ដរភាព និងការគ្រប់គ្រងបរិស្ថាន ដោយបំលែងកាកសំណល់វាយនភ័ណ្ឌពីរោងចក្រកាត់ដេរទៅជារោងចក្រដែលផលិតអំបោះមានគុណភាពខ្ពស់ អាចផលិតនូវក្រណាាត់ដ៏ស្រស់ស្អាត។
                ចូលរួមជាមួយពួកយើងក្នុងដំណើរការនៃចង្វាក់ផលិតកម្មរបស់ក្រណាត់ ផ្ដើមពីដំណាក់កាលដំបូងរហូតដល់ដំណាក់កាលចុងក្រោយ ដោយមិនប៉ះពាល់ដល់បរិស្ថាន។ */}
                With the encouragement of the government as well as the Ministry
                of Environment, Shun Wei Company has been granted the right to
                invest in recycling projects of industrial waste in garment
                factories to participate in reducing local waste.
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ p: 2, display: "flex", alignItems: "center" }}
          >
            <img
              alt=""
              src="assets/menu2/p15.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ p: 2 }}>
            <HeaderTitle
              sx={{}}
              sub="COMPANY PROCESS"
              main={"ALL OF OUR PRODUCTS"}
              is_center={false}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <img
              alt=""
              src="assets/menu2/p16.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <img
              alt=""
              src="assets/menu2/p17.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <img
              alt=""
              src="assets/menu2/p18.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <img
              alt=""
              src="assets/menu2/p19.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle
              sx={{}}
              sub="COMPANY PRODUCT"
              main={"OUR PRODUCTS"}
              is_center={false}
            />
            <div>
              <Typography
                sx={{
                  wordSpacing: "3px",
                  color: COLORS.green.dark,
                  fontSize: { xs: 16, md: 20 },
                }}
              >
                High-Quality Yarn has 3 colors which are white cream, gray,
                light yellow, and black
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }}>
            <img
              alt=""
              src="assets/menu2/p20.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 10px" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <HeaderTitle
              sx={{}}
              sub="OUR COMPANY"
              main={"MEET OUR TEAM"}
              is_center={false}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }}>
            <img
              alt=""
              src="assets/menu2/p6.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "80px 0px" }}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ p: 2 }}>
            <a href="#" rel="noopener noreferrer" className={`${styles.logo}`}>
              <img src="/favicon.jpeg" alt="Shun Wei" width={50} height={50} />
              <h5
                style={{
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  color: COLORS.green.dark,
                  fontWeight: "800",
                }}
              >
                shun wei fang <br />
                zhi ke ji co.,tld
              </h5>
            </a>
            <HeaderTitle sx={{}} sub="" main={"CONTACT US"} is_center={false} />
            <p style={{ wordSpacing: "7px", fontSize: TypographyStyle.text }}>
              {/* ចូលរួមជាមួយពួកយើងនៅបេសកកម្មក្នុងការបង្កើតទីក្រុងបៃតងសម្រាប់ឧស្សាហកម្មវាយនភ័ណ្ឌរបស់កម្ពុជានាពេលអនាគត។ ពួកយើងរួមគ្នាកាត់បន្ថយកាកសំណល់ ការអផិរក្សធនធាន
              និងការថែរក្សាប្រទេសរបស់យើងសម្រាប់មនុស្សជំនាន់ក្រោយ។ ទាក់ទងមកយើងថ្ងៃនេះ ដើម្បីស្វែងយល់បន្ថែមអំពីវិធីសាស្រ្ត និងដំណោះស្រាយនៃការកែច្នៃឡើងវិញរបស់យើង ឬស្វែងរកឱកាសភាពជាដៃគូ។
              ចូលរួមជាមួយយើងដើម្បីលើកកំពស់វិស័យឧស្សាហកម្មវាយនភ័ណ្ឌអោយមាននិរន្ដរភាព។ */}
              Join us in our mission to create a greener future for Cambodia's
              textile industry. Together, we can make a difference by reducing
              waste, conserving resources, and preserving our planet for
              generations to come. Contact us today to learn more about our
              recycling solutions or to explore partnership opportunities. Let's
              weave sustainability into every thread of the textile industry!
            </p>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <LocalPhoneOutlinedIcon />
                <Box sx={{ ml: 2 }}>
                  <p style={{ fontWeight: "500" }}>+855-12-955-552</p>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <EmailOutlinedIcon />
                <Box sx={{ ml: 2 }}>
                  <p style={{ fontWeight: "500 !important" }}>
                    yuthseng888@gmail.com
                  </p>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <LocationOnOutlinedIcon />
                <Box sx={{ ml: 2 }}>
                  <p
                    style={{ fontWeight: "500 !important", wordSpacing: "6px" }}
                  >
                    Prey Khvav Village, Roka Kaoh Commune, Kong Pisei District,
                    Kampong Speu
                  </p>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }}>
            <img
              alt=""
              src="assets/menu2/p6.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section
        style={{
          margin: "80px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video width="90%" height="auto" controls>
          <source src="assets/menu2/videos-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </Container>
    // </main>
  );
}
