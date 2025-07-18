import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import tourData from "../data/tourData";

function DirectionsTour() {
  return (
    <Box sx={{ margin: "100px" }}>
      <Container maxWidth={"xl"}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "80px" }}
        >
          Yo'nalishlar
        </Typography>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {tourData.map((item) => {
            return (
              <Box
                sx={{
                  width: "430px",
                  height: "440px",
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                  //   gap: "20px",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  paddingBottom: "20px",
                  boxShadow: "0px 0px 20px 0px gray",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                key={item.id}
              >
                <Box
                  component={"img"}
                  src={item.image}
                  width={"100%"}
                  sx={{
                    height: "250px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    padding: "0px 20px",
                  }}
                >
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="h6" fontSize={"17px"} color="gray">
                    {item.desc}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    width: "300px",
                    margin: "0 auto",
                    background: "#0056b8",
                    color: "white",
                  }}
                >
                  Hoziroq Band Qiling
                </Button>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default DirectionsTour;
