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
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const scrollToHome = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      homeSection?.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms delay sahifa yuklanishini kutish uchun
  };

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
            <Link to="home" smooth duration={500}>
              <ListItemButton onClick={scrollToHome}>
                {t("home")}
              </ListItemButton>
            </Link>
            <Link to="about" smooth duration={500}>
              <ListItemButton>{t("about")}</ListItemButton>
            </Link>
            <Link to="tour" smooth duration={500}>
              <ListItemButton>{t("tour")}</ListItemButton>
            </Link>
            <Link to="contact" smooth duration={500}>
              <ListItemButton>{t("contact")}</ListItemButton>
            </Link>
          </ListItem>

          <Box
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              style={{ color: "white" }}
              target="_blank"
              href="https://instagram.com/lazzattravel"
            >
              <InstagramIcon />
            </a>
            <a
              style={{ color: "white" }}
              target="_blank"
              href="https://t.me/lazzattravel"
            >
              <TelegramIcon />
            </a>
            <a
              style={{ color: "white" }}
              target="_blank"
              href="https://t.me/lazzattravel"
            >
              <FacebookIcon />
            </a>
            <TranslateButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
