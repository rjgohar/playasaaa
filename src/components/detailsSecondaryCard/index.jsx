import { Box, Paper, Typography } from "@mui/material";
import React from "react";
const DetailsSecondaryCard = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#D1FFFF" }}>
      <Box p={2}>
        <Box>
          <Typography variant="h6" fontWeight={500}>
            Details
          </Typography>
        </Box>
        <Box>
          <Box pl={2}>
            <DetailItem primary="Type" secondary="Apartment" />
            <DetailItem primary="ID" secondary="EB-NA3358" />
            <DetailItem primary="Bedrooms" secondary="2" />
            <DetailItem primary="Bathrooms" secondary="2" />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default DetailsSecondaryCard;

const DetailItem = ({ primary, secondary }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" fontWeight={400}>
        {primary}:
      </Typography>
      &nbsp;
      <Typography variant="body1" fontWeight={500}>
        {secondary}
      </Typography>
    </Box>
  );
};
