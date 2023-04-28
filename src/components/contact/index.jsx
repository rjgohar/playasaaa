import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Input from "../input";
import Button from "../button";

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.inner}>
        <Box
          sx={{
            paddingTop: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 800,
              color: (theme) => theme.palette.background.footer,
            }}
          >
            ContactUs
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 14,
              color: (theme) => theme.palette.text.main,
            }}
          >
            Leave Us a message and we will get right back to you
          </Typography>
        </Box>
        <Box className="inputSection">
          <Box>
            <Input
              placeholder="Your Name"
              sx={{ textAlign: "center" }}
              variant="standard"
            />
          </Box>
          <Box>
            <Input
              placeholder="Email"
              sx={{ textAlign: "center" }}
              variant="standard"
            />
          </Box>
          <Box>
            <Input
              placeholder="Message"
              sx={{ textAlign: "center" }}
              variant="standard"
            />
          </Box>
        </Box>

        <Box className="btnSend">
          <Button
            sx={{ textTransform: "capitalize", width: 120 }}
            variant="outlined"
          >
            Send
          </Button>
        </Box>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    rowGap: 15,
    boxShadow: "15px 15px" + theme.palette.background.footer,

    background: theme.palette.common.white,
  },

  inner: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    padding: " 20px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: " 10px 15px",
    },

    "& .inputSection": {
      paddingTop: 40,
      display: "flex",
      justifyContent: "start",
      rowGap: 50,
      flexDirection: "column",
    },

    " & .btnSend": {
      height: 200,
      display: "flex",
      justifyContent: "end",
      alignItems: "end",
    },
  },
}));
