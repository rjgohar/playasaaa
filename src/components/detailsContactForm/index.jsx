import { Box, Paper, TextField, Typography } from "@mui/material";
import logo from "../../assets/logo2.png";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import Button from "../button";
import React from "react";
const DetailsContactForm = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#D1FFFF" }}>
      <Box
        sx={{ padding: 4, display: "grid", placeContent: "center", gap: 2.5 }}
      >
        <Box>
          <Typography align="center" variant="body1" fontWeight={500}>
            Contact Us:
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gap: 2.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.grey[100],
                width: "fit-content",
              }}
              py={4}
            >
              <img src={logo} alt="logo" />
            </Box>
          </Box>
          <Box>
            <Typography align="center" variant="h6" fontWeight={500}>
              Playasa
            </Typography>
            <a
              href="tel:18095169523"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PhoneEnabledIcon color="primary" />
              <Typography
                align="center"
                variant="h6"
                color="primary"
                fontWeight={300}
              >
                +18095169523
              </Typography>
            </a>
          </Box>
          <Box>
            <Box sx={{ display: "grid", gap: 2 }}>
              <Box>
                <TextField label="Your Name" />
              </Box>
              <Box>
                <TextField label="Email" />
              </Box>
              <Box>
                <TextField label="Phone number" />
              </Box>
              <Box>
                <TextField multiline rows={3} />
              </Box>
              <Box>
                <Button fullWidth variant="text">
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default DetailsContactForm;
