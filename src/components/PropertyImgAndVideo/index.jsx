import { Box, Typography, Button } from "@mui/material";
import React from "react";
import UploadImagesBox from "../uploadImagesBox";

const PropertyImagesVideos = () => {
  return (
    <Box sx={{ width: { md: "70%", xs: "100%" } }}>
      <Box>
        <Typography variant="h6" color="primary">
          Upload Images of your Property
        </Typography>
        <Box mt={2}>
          <UploadImagesBox />
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="primary">
          Add Videos of your Property
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: (theme) => theme.palette.secondary.grey }}
        >
          Add videos of your property from Youtube. Upload on Youtube and paste
          the link below.
        </Typography>
        <Box mt={2}>
          {" "}
          <Button variant="contained">Add video</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyImagesVideos;
