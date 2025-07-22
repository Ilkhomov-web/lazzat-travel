import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function DirectionsTour() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const tours = t("tourData", { returnObjects: true });

  return (
    <Box id="tour" sx={{ margin: { xs: "50px 20px", md: "100px auto" } }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: { xs: "40px", md: "80px" },
            fontSize: { xs: "28px", md: "36px" },
          }}
        >
          Yo'nalishlar
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: "30px", md: "40px" },
          }}
        >
          {tours.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                minWidth: "280px",
                height: "100%",
                background: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "12px",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
                transition: "0.3s",
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(1.03)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="gray">
                  {item.desc}
                </Typography>
              </Box>
              <Button
                onClick={() => navigate(`/selected-tour/${item.id}`)}
                sx={{
                  width: "80%",
                  margin: "0 auto 20px auto",
                  background: "#0056b8",
                  color: "white",
                  "&:hover": {
                    background: "#0049a1",
                  },
                }}
              >
                <a
                  target="_blank"
                  href="https://t.me/SHERZOD_MAMADALIEV0977"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.button}
                </a>
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default DirectionsTour;
