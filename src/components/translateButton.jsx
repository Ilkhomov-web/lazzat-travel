import React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import uz from "../assets/uz-flag.png";
import ru from "../assets/rus-flag.png";
import us from "../assets/usa-flag.png";

const languages = [
  { code: "uz", label: "Uz", flag: uz },
  { code: "ru", label: "Ru", flag: ru },
  { code: "en", label: "En", flag: us },
];

function TranslateButton() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "language-popover" : undefined;

  const langCode = i18n.language.split("-")[0];
  const currentLang =
    languages.find((lang) => lang.code === langCode) || languages[0];

  return (
    <div>
      <Button
        sx={{ background: "white" }}
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        startIcon={
          <img
            src={currentLang.flag}
            alt={currentLang.code}
            style={{ width: 20, height: 14, objectFit: "cover" }}
          />
        }
      >
        {currentLang.label}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ minWidth: 120 }}>
          {languages.map((lang) => (
            <ListItem disablePadding key={lang.code}>
              <ListItemButton onClick={() => handleLanguageChange(lang.code)}>
                <ListItemIcon>
                  <img
                    src={lang.flag}
                    alt={lang.code}
                    style={{ width: 20, height: 14, objectFit: "cover" }}
                  />
                </ListItemIcon>
                <ListItemText primary={lang.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}

export default TranslateButton;
