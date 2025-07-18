import {
  Box,
  Button,
  Container,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TranslateButton from "./translateButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        background: isScrolled ? "#0056b8" : "transparent",
        position: "fixed",
        zIndex: "1000",
        top: "0",
      }}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component={"img"} src="/logo2.2.png" width={"150px"}></Box>
          <ListItem sx={{ width: "40%", color: "white" }}>
            <ListItemButton>{t("home")}</ListItemButton>
            <ListItemButton>{t("about")}</ListItemButton>
            <ListItemButton>{t("tour")}</ListItemButton>
            <ListItemButton>{t("contact")}</ListItemButton>
          </ListItem>

          <Box
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button>
              <InstagramIcon sx={{ color: "white", fontSize: "28px" }} />
            </Button>
            <Button>
              <TelegramIcon sx={{ color: "white", fontSize: "28px" }} />
            </Button>
            <Button>
              <InstagramIcon sx={{ color: "white", fontSize: "28px" }} />
            </Button>
            <TranslateButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
