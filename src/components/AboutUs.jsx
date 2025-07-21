import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <Box id="about" sx={{ my: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ textAlign: "center", mb: 6 }}>
          {t("about-us")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Text qismi */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              p: 4,
              borderRadius: 2,
              height: { xs: "auto", md: 400 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3" sx={{ color: "black" }}>
              Lazzat Tour
            </Typography>
            <Typography variant="h6" fontSize={18} color="black">
              {t("about-desc")}
            </Typography>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  backgroundColor: "#0056b8",
                  color: "white",
                  mt: 2,
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "#00449e",
                  },
                }}
              >
                {t("about-button")}
              </Button>
            </Link>
          </Box>

          {/* Rasm qismi */}
          <Box
            component="img"
            src="/dubai-family.jpg"
            alt="about"
            sx={{
              flex: 1,
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
