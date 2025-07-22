import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TranslateButton from "./translateButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToHome = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      homeSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = (
    <>
      <Link to="home" smooth duration={500}>
        <ListItemButton
          onClick={() => {
            scrollToHome();
            setDrawerOpen(false);
          }}
        >
          {t("home")}
        </ListItemButton>
      </Link>
      <Link to="about" smooth duration={500}>
        <ListItemButton onClick={() => setDrawerOpen(false)}>
          {t("about")}
        </ListItemButton>
      </Link>
      <Link to="tour" smooth duration={500}>
        <ListItemButton onClick={() => setDrawerOpen(false)}>
          {t("tour")}
        </ListItemButton>
      </Link>
      <Link to="contact" smooth duration={500}>
        <ListItemButton onClick={() => setDrawerOpen(false)}>
          {t("contact")}
        </ListItemButton>
      </Link>
    </>
  );

  return (
    <Box
      sx={{
        width: "100%",
        background: isScrolled ? "#0056b8" : "transparent",
        position: "fixed",
        zIndex: 1000,
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          {/* Logo */}
          <Box component="img" src="/logo2.2.png" width="150px" />

          {/* Menu (Desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "40%",
              color: "white",
            }}
          >
            <ListItem sx={{ display: "flex", gap: 2 }}>{menuItems}</ListItem>
          </Box>

          {/* Icons and Translate (Desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "30%",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
          >
            <a
              target="_blank"
              href="https://instagram.com/lazzattravel"
              style={{ color: "white" }}
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              href="https://t.me/lazzattravel"
              style={{ color: "white" }}
            >
              <TelegramIcon />
            </a>
            <a
              target="_blank"
              href="https://t.me/lazzattravel"
              style={{ color: "white" }}
            >
              <FacebookIcon />
            </a>
            <TranslateButton />
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            p: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* <Box component="img" src="/logo.png" width="120px" /> */}
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>{menuItems}</List>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              mt: 2,
              color: "#0056b8",
            }}
          >
            <a target="_blank" href="https://instagram.com/lazzattravel">
              <InstagramIcon />
            </a>
            <a target="_blank" href="https://t.me/lazzattravel">
              <TelegramIcon />
            </a>
            <a target="_blank" href="https://t.me/lazzattravel">
              <FacebookIcon />
            </a>
            <TranslateButton />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
