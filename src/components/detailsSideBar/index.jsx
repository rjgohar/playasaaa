import { Box, Paper, Typography } from "@mui/material";
import DetailsSecondaryCard from "../detailsSecondaryCard";
import DetailsContactForm from "../detailsContactForm";
import PrintIcon from "@mui/icons-material/Print";
import Button from "../button";
import React from "react";
const DetailsSideBar = () => {
  return (
    <Box>
      <Box
        pt={3.5}
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box>
          <DetailsSecondaryCard />
        </Box>
        <Box>
          <DetailsContactForm />
        </Box>
        <Box>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2.5,
              width: "100%" - 40,
              color: (theme) => theme.palette.grey[500],
              gap: 1,
              backgroundColor: "#D1FFFF",
            }}
          >
            <PrintIcon />
            <Typography variant="body1" fontWeight={700}>
              Print Property
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: { md: "none", xs: "grid", padding: 20, gap: 10 },
            placeContent: "center",
          }}
        >
          <Typography variant="body1">For further Inquiries </Typography>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsSideBar;
