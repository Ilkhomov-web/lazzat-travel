import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TourInfo() {
  const { t, i18n } = useTranslation();
  return (
    <Box sx={{ margin: "200px 0px" }}>
      <Container maxWidth={"xl"}>
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
            sx={{ background: "white", width: "45%", borderRadius: "12px" }}
          >
            <Box
              component={"img"}
              src="/logo.png"
              sx={{ width: "100%", borderRadius: "12px" }}
            ></Box>
          </Grid>
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
            <Typography variant="h3">Lazzat Tour {t("tour-title")}</Typography>
            <Typography variant="h6" fontSize={"18px"} color="gray">
              Lazzat Tour - {t("tour-desc")}
            </Typography>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  background: "#0056b8",
                  color: "white",
                  textAlign: "left",
                }}
              >
                {t("about-button")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TourInfo;
