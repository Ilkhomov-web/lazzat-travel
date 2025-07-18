import { Box } from "@mui/material";
import React from "react";

function VideoContent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        margin: "100px 0px",
      }}
    >
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/R_xC5EVST5k"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
}

export default VideoContent;
