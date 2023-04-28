import { Box } from "@mui/material";
import React from "react";

const GoogleMapStatic = () => {
  return (
    <Box
      width="100%"
      height="300px"
      mt={4}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "4px",
      }}
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929404.3422352667!2d-72.31084113281248!3d19.179128981568578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sDominican%20Republic!5e0!3m2!1sen!2s!4v1681868984722!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default GoogleMapStatic;
