import {
  Box,
  Button,
  Container,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import HeroSwiper from "../components/Swiper";
import Footer from "../components/Footer";
import React, { useState } from "react";

function SelectedTour() {
  const { t } = useTranslation();
  const { id } = useParams();

  const tours = t("tourData", { returnObjects: true });
  const selected = tours.find((tour, index) => index === Number(id));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(selected.title);

    console.log("Booking Info:");
    console.log("Tour:", selected.title);
    console.log("User Info:", formData);
    handleClose();
  };

  if (!selected) {
    return <Typography>Tour not found</Typography>;
  }

  return (
    <Box>
      <Navbar />
      <HeroSwiper />
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          {/* Left: Image */}
          <Box
            component="img"
            src={selected.image}
            alt={selected.title}
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: 4,
              boxShadow: 3,
            }}
          />

          {/* Right: Info */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              {selected.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {selected.desc}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Manzil:</strong> {selected.location}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Muddat:</strong> {selected.duration}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Narxi:</strong> {selected.price}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Reyting:</strong> ⭐ {selected.rating}
            </Typography>

            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              <strong>Qo‘shilgan xizmatlar:</strong>
            </Typography>
            <ul>
              {selected.includes.map((item, idx) => (
                <li key={idx}>
                  <Typography variant="body2">{item}</Typography>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleOpen}
              sx={{
                mt: 3,
                background: "#0056b8",
                color: "white",
                px: 4,
                py: 1,
              }}
            >
              {selected.button}
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />

      {/* Booking Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            maxWidth: 500,
            width: "90%",
            background: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            mx: "auto",
            my: "10vh",
          }}
        >
          <Typography variant="h6" sx={{ mb: 3 }}>
            {selected.title} — Bron qilish
          </Typography>
          <TextField
            fullWidth
            label="Ismingiz"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Telefon raqami"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            sx={{ mb: 3 }}
            InputLabelProps={{ shrink: true }}
            label="Ketish sanasi"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#0056b8" }}
            onClick={handleSubmit}
          >
            Yuborish
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default SelectedTour;
