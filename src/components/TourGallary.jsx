// TravelGallery.tsx
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

const images = [
  "agypt.jpg",
  "dubai.jpg",
  "gruziya.jpg",
  "tailand.jpg",
  "turkey.webp",
  "malaziya.jpg",
  "maldiv.webp",
  "pariw.jpg",
];

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  overflow: "hidden",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}));

const TravelGallery = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          marginBottom: "100px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gridAutoRows: "minmax(100px, auto)",
          gap: 2,
        }}
      >
        {images.map((src, idx) => (
          <ImageBox key={idx} sx={{ aspectRatio: "1 / 1", height: "25vh" }}>
            <img src={src} alt={`travel-${idx}`} />
          </ImageBox>
        ))}
      </Box>
    </Container>
  );
};

export default TravelGallery;
