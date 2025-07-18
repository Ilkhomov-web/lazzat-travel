import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ margin: "50px 0px" }}>
      <Container maxWidth={"xl"}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {t("about-us")}
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <Grid
            sx={{
              background: "white",
              width: "45%",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "30px",
              alignItems: "left",
            }}
          >
            <Typography variant="h3">Lazzat Tour</Typography>
            <Typography variant="h6" fontSize={"18px"} color="gray">
              {t("about-desc")}
            </Typography>
            <Button
              sx={{ background: "#0056b8", color: "white", textAlign: "left" }}
            >
              {t("about-button")}
            </Button>
          </Grid>
          <Grid
            sx={{ background: "white", width: "45%", borderRadius: "12px" }}
          >
            <Box
              component={"img"}
              src="/dubai-family.jpg"
              sx={{ width: "100%", borderRadius: "12px" }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
