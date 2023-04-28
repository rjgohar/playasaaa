import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MobileNumberInput from "../mobileNumberInput";
import { Link } from "react-router-dom";

const ContactInformation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <Box sx={{ width: { md: "60%", xs: "100%" } }}>
      <Typography variant="h6" color="primary">
        Email
      </Typography>
      <Box mt={2}>
        <TextField fullWidth placeholder="Enter Email Address" />
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="primary">
          Mobile
        </Typography>
        <Box mt={2}>
          <TextField fullWidth placeholder="Enter Mobile Number" />
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="primary">
          Landline
        </Typography>
        <Box mt={2}>
          <TextField fullWidth placeholder="Enter Landline Number" />
        </Box>
      </Box>
      <Box mt={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              name="agreement"
              color="primary"
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.secondary.grey }}
            >
              By submitting Ad, I agree to the{" "}
              <Link to="/termOfService" target="_blank">
                terms of service
              </Link>{" "}
              and{" "}
              <Link to="/policy" target="_blank">
                privacy policy
              </Link>
              .
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default ContactInformation;
