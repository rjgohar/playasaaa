import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const FeaturesContent = () => {
  const [selection, setSelection] = useState("");
  const [bath, setBath] = useState("");

  const buttons = [
    "Studio",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+10",
  ];
  const buttonBath = ["1", "2", "3", "4", "5", "6"];

  const handleButtonClick = (selectedOption) => {
    setSelection(selectedOption);
  };
  const handleButtonBathClick = (selectedOption) => {
    setBath(selectedOption);
  };
  return (
    <Box sx={{ width: { md: "60%", xs: "100%" } }}>
      <Typography variant="h6" color="primary">
        Bedroom
      </Typography>
      <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
        {buttons.map((buttonLabel) => (
          <Button
            key={buttonLabel}
            variant={
              selection === buttonLabel.toLowerCase() ? "contained" : "outlined"
            }
            onClick={() => handleButtonClick(buttonLabel.toLowerCase())}
          >
            {buttonLabel}
          </Button>
        ))}
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="primary">
          Bathroom
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
          {buttonBath.map((buttonLabel) => (
            <Button
              key={buttonLabel}
              variant={
                bath === buttonLabel.toLowerCase() ? "contained" : "outlined"
              }
              onClick={() => handleButtonBathClick(buttonLabel.toLowerCase())}
            >
              {buttonLabel}
            </Button>
          ))}
        </Box>
        <Box mt={4}>
          <Typography variant="h6" color="primary">
            Features and Amenities
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: (theme) => theme.palette.secondary.grey }}
          >
            Add additional features e.g. parking spaces, waste disposal,
            internet etc.
          </Typography>
          <Box mt={2}>
            {" "}
            <Button variant="contained">Add Amenities</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesContent;
