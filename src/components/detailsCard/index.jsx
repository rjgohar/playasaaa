import { Box, Paper, Typography } from "@mui/material";
import React from "react";
const DetailsCard = () => {
  return (
    <Paper
      sx={{
        width: { md: "calc(60% - 48px)", xs: "calc(100% - 48px)" },
        padding: 3,
        display: "grid",
        gap: 3,
        position: "relative",
        bottom: 70,
      }}
      elevation={4}
    >
      <Box
        sx={{
          display: "grid",
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h5" color={"primary"} sx={{ fontWeight: 700 }}>
            Apartamento Amoblado en Alquiler en Juan Dolio
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            color={"secondary"}
            sx={{ fontFamily: "Playfair, serif" }}
          >
            Santo Domingo, Distrito Nacional
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DetailsCard;
