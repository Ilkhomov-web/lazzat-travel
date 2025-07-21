import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TourInfo() {
  const { t } = useTranslation();

  return (
    <Box sx={{ my: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column", // telefon
              md: "row", // planshet va kompyuter
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "12px",
              p: 4,
              textAlign: "left",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Lazzat Tour {t("tour-title")}
            </Typography>
            <Typography variant="h6" fontSize="18px" color="gray" gutterBottom>
              Lazzat Tour - {t("tour-desc")}
            </Typography>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  backgroundColor: "#0056b8",
                  color: "white",
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "#004599",
                  },
                }}
              >
                {t("about-button")}
              </Button>
            </Link>
          </Box>

          {/* Image Section */}
          <Box
            component="img"
            src="/logo.png"
            alt="Lazzat Tour"
            sx={{
              flex: 1,
              width: "100%",
              borderRadius: "12px",
              maxWidth: { xs: "100%", md: "45%" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default TourInfo;
