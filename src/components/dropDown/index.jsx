import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";

const DropDown = ({ title, option }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
      <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
        <Select
          value={selectedCity}
          onChange={handleChange}
          inputProps={{
            name: "Select City",
            id: "city-select",
          }}
        >
          <MenuItem>
            <em>Select {title}</em>
          </MenuItem>
          {option.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
