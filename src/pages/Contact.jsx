import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSwiper from "../components/Swiper";

function Contact() {
  return (
    <Box>
      <Navbar />
      <HeroSwiper />

      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: { xs: 5, md: 10 },
          bgcolor: "#f9f9f9",
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Chap tarafdagi rasm */}
          <Grid
            sx={{ width: "40%", display: "flex", gap: "20px" }}
            item
            xs={12}
            md={6}
          >
            <Box
              component="img"
              src="/logo.png" // o'zingizga mos rasm joylashtiring
              alt="Contact"
              sx={{
                width: "60%",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
            <Box
              component="img"
              src="/Guvohnoma.jpg" // o'zingizga mos rasm joylashtiring
              alt="Contact"
              sx={{
                width: "40%",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* O'ng tarafdagi ma'lumot */}
          <Grid sx={{ width: "40%" }} item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Biz bilan bog‘laning
            </Typography>

            <Typography variant="body1" mb={2}>
              “Lazzat Tur” – eng ishonchli va qulay sayohat hamrohingiz. Agar
              sizda biron bir savol bo‘lsa yoki bron qilishni istasangiz,
              quyidagi usullar orqali bog‘lanishingiz mumkin:
            </Typography>

            <Typography
              variant="h6"
              mt={3}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <PhoneIcon /> +998 90 123 45 67
            </Typography>

            <Box mt={3}>
              <Typography variant="body1" mb={1}>
                Ijtimoiy tarmoqlar:
              </Typography>

              <Box display="flex" gap={2}>
                <IconButton
                  component="a"
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#0088cc", bgcolor: "#e1f5fe", p: 1.5 }}
                >
                  <TelegramIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#E1306C", bgcolor: "#fce4ec", p: 1.5 }}
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#1877F2", bgcolor: "#e3f2fd", p: 1.5 }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}

export default Contact;
