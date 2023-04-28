import { Box, Input, TextField, Typography } from "@mui/material";
import React from "react";

const AdInfo = () => {
  return (
    <Box sx={{ width: { md: "60%", xs: "100%" } }}>
      <Typography variant="h6" color="primary">
        Title
      </Typography>
      <Box mt={2}>
        <TextField fullWidth placeholder="Enter Property Title" />
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="primary">
          Description
        </Typography>
        <Box mt={2}>
          <TextField
            fullWidth
            multiline
            rows={10}
            variant="outlined"
            placeholder="Describe your property its features, area etc."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdInfo;
