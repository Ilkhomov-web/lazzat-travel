import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f9f9f9" }}>
      <Grid
        container
        spacing={4}
        direction={isMobile ? "column" : "row"}
        alignItems="center"
      >
        {/* Left - Text content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Biz haqimizda
          </Typography>
          <Typography variant="body1" paragraph>
            Biz sayohat va hujjatlar bilan shug‘ullanadigan ishonchli
            kompaniyamiz. Mijozlarga tez va ishonchli xizmatlar ko‘rsatamiz. Har
            bir xizmat litsenziyalangan va xalqaro talablarga mos keladi.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Rasmiy litsenziyaga egamiz va barcha xizmatlarimiz qonuniy asosda
            yuritiladi.
          </Typography>
        </Grid>

        {/* Right - Image and License */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="/dubai.jpg" // o'zingizda bor rasmni joylang
              alt="Office"
              sx={{
                width: "100%",
                maxWidth: 400,
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Button
              variant="outlined"
              href="/dubai.jpg" // yoki hujjat rasmi: /license.jpg
              target="_blank"
              sx={{ mt: 2 }}
            >
              Litsenziyani ko‘rish
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
