import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: theme.spacing(20, 0, 20),
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
    textDecoration: "none",
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
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Address Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Address</SectionTitle>
            <Typography variant="body2" sx={{ mb: 1, color: "#cccccc" }}>
              Legal address: Tashkent,
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#cccccc" }}>
              Mirobod distr, Afrosiyob str, 12
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#cccccc" }}>
              Opening hours: 9:00 до 19:00
            </Typography>
            <Typography variant="body2" sx={{ color: "#cccccc" }}>
              Working days: Monday - Saturday
            </Typography>
          </Grid>

          {/* Booking Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>
              <OrangeText>COCOS TOUR</OrangeText>
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
              Booking / Consultation
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              +998 97 177 58 48
            </Typography>
            <FooterLink href="mailto:info@cocos-tour.uz">
              info@cocos-tour.uz
            </FooterLink>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Navigation</SectionTitle>
            <FooterLink href="/">Main</FooterLink>
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/tours">Tours</FooterLink>
            <FooterLink href="/contact">Contact us</FooterLink>
          </Grid>

          {/* Payment Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Accept For Payment</SectionTitle>
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <PaymentIcon
                src="/placeholder.svg?height=24&width=40"
                alt="Click"
                style={{ backgroundColor: "#0066cc" }}
              />
              <PaymentIcon
                src="/placeholder.svg?height=24&width=40"
                alt="PayMe"
                style={{ backgroundColor: "#00aaff" }}
              />
              <PaymentIcon
                src="/placeholder.svg?height=24&width=40"
                alt="Mastercard"
                style={{ backgroundColor: "#eb001b" }}
              />
              <PaymentIcon
                src="/placeholder.svg?height=24&width=40"
                alt="Visa"
                style={{ backgroundColor: "#1a1f71" }}
              />
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
            ООО "LAZZAT TUR" ©2025 Все права защищены | Создание сайта в
            Ташкенте{" "}
            <Link
              href="https://go-web.uz"
              sx={{ color: "#ff9800", textDecoration: "none" }}
            >
              go-web.uz
            </Link>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LanguageFlag
              src="/placeholder.svg?height=16&width=24"
              alt="English"
              style={{ backgroundColor: "#012169" }}
            />
            <LanguageFlag
              src="/placeholder.svg?height=16&width=24"
              alt="Russian"
              style={{ backgroundColor: "#ffffff" }}
            />
            <LanguageFlag
              src="/placeholder.svg?height=16&width=24"
              alt="Uzbek"
              style={{ backgroundColor: "#0099cc" }}
            />
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
}
