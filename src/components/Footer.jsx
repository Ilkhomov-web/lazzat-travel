import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: theme.spacing(10, 0),
  marginTop: "auto",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  fontSize: "1.1rem",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1),
  fontSize: "0.9rem",
  "&:hover": {
    color: "#ff9800",
  },
}));

const PaymentIcon = styled("img")({
  height: "24px",
  marginRight: "8px",
  borderRadius: "4px",
});

const LanguageFlag = styled("img")({
  width: "24px",
  height: "16px",
  marginLeft: "8px",
  cursor: "pointer",
});

const OrangeText = styled("span")({
  color: "#ff9800",
  fontWeight: 600,
});

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <StyledFooter id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Address Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>{t("address")}</SectionTitle>
            <Typography variant="body2" sx={{ mb: 1, color: "#cccccc" }}>
              {t("Legal-address")}: Jizzax,
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#cccccc" }}>
              Sharof Rashidov str, 12
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#cccccc" }}>
              {t("opening-hours")}: 9:00 - 19:00
            </Typography>
            <Typography variant="body2" sx={{ color: "#cccccc" }}>
              {t("working-days")}: Monday - Saturday
            </Typography>
          </Grid>

          {/* Booking Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>
              <OrangeText>LAZZAT TOUR</OrangeText>
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
              {t("consultation")}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              +99899 867 60 00
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              +99897 867 60 00
            </Typography>
            <FooterLink href="mailto:info@lazzat-tour.uz">
              info@lazzat-tour.uz
            </FooterLink>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Navigation</SectionTitle>
            <FooterLink href="/">{t("home")}</FooterLink>
            <FooterLink href="/">{t("about")}</FooterLink>
            <FooterLink href="/">{t("tour")}</FooterLink>
            <FooterLink href="/">{t("contact")}</FooterLink>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} sm={6} md={3}>
            {/* <SectionTitle>Location</SectionTitle> */}
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                width: "100%",
                height: "180px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d381.27376289211765!2d67.82178590027895!3d40.13804897631392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1752850379159!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: "#333333" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#cccccc", fontSize: "0.8rem" }}
          >
            {t("reserver")}{" "}
            <Link
              target={"_blank"}
              href="https://t.me/Elka_0624"
              sx={{ color: "#ff9800", textDecoration: "none" }}
            >
              RealCode
            </Link>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              style={{ color: "white" }}
              target="_blank"
              href="https://instagram.com/lazzattravel"
            >
              <InstagramIcon />
            </a>
            <a
              style={{ color: "white" }}
              target="_blank"
              href="https://t.me/lazzattravel"
            >
              <TelegramIcon />
            </a>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
}
