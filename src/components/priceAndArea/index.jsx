import { Box, MenuItem, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomSwitch from "../CustomSwitch";

const PriceAndArea = () => {
  const units = ["Sq. Ft.", "Sqm", "Acre", "Hectare"];
  const prices = ["USD", "AED", "YUAN", "CUSD"];
  const [areaSize, setAreaSize] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("Sq. Ft.");
  const [unitPrice, setUnitPrice] = useState("USD");

  const handleAreaSizeChange = (event) => {
    setAreaSize(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleUnitPriceChange = (event) => {
    setUnitPrice(event.target.value);
  };
  return (
    <Box sx={{ width: { md: "70%", xs: "100%" } }}>
      <Typography variant="h6" color="primary">
        Area Size
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: "grid",
          gridTemplateColumns: "1fr 0.3fr",
          gap: 4,
        }}
      >
        <TextField
          id="areaSize"
          value={areaSize}
          onChange={handleAreaSizeChange}
          variant="outlined"
          sx={{ mr: 2 }}
          fullWidth
        />
        <TextField
          id="unit"
          select
          value={unit}
          onChange={handleUnitChange}
          variant="outlined"
        >
          {units.map((unitOption) => (
            <MenuItem key={unitOption} value={unitOption}>
              {unitOption}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Price */}
      <Box mt={4}>
        <Typography variant="h6" color="primary">
          Price
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "grid",
            gridTemplateColumns: "1fr 0.3fr",
            gap: 4,
          }}
        >
          <TextField
            id="price"
            value={price}
            onChange={handlePriceChange}
            variant="outlined"
            sx={{ mr: 2 }}
            fullWidth
          />
          <TextField
            id="unit"
            select
            value={unitPrice}
            onChange={handleUnitPriceChange}
            variant="outlined"
          >
            {prices.map((priceOption) => (
              <MenuItem key={priceOption} value={priceOption}>
                {priceOption}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      {/* Toogle Field */}
      <Box
        mt={4}
        sx={{
          display: "grid",
          gridTemplateColumns: "10fr 2fr",
        }}
      >
        <Box>
          {" "}
          <Typography variant="h6" color="primary">
            Installment available
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: (theme) => theme.palette.secondary.grey }}
          >
            Enable if listing is available on installments
          </Typography>
        </Box>
        <Box sx={{ display: "flex", margin: 0 }}>
          <CustomSwitch size="large" />
        </Box>
      </Box>
      <Box
        mt={4}
        sx={{
          display: "grid",
          gridTemplateColumns: "10fr 2fr",
        }}
      >
        <Box>
          {" "}
          <Typography variant="h6" color="primary">
            Ready for Possession
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: (theme) => theme.palette.secondary.grey }}
          >
            Enable if listing is ready for possession
          </Typography>
        </Box>
        <Box sx={{ display: "flex", margin: 0 }}>
          <CustomSwitch size="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default PriceAndArea;
