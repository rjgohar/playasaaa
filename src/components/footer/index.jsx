import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Divider, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginModal } from "../../redux/models/model.slicer";

export default function Footer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginModalOpen = () => {
    dispatch(loginModal(true));
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Box className={classes.footerdata1}>
          <img className="logo" src={logo} alt="logo" />
          <Box style={{ paddingRight: 10 }}>
            <Typography>
              Find your next home here. We provide quality and personal service
              to assist you in all of your real estate needs. If you need
              assistance or have questions please feel free to contact us. We
              would be more than happy to help you.
            </Typography>
          </Box>
          <Box className="iconContainer">
            <FacebookOutlinedIcon className="icon" />
            <InstagramIcon className="icon" onClick={loginModalOpen} />
            <LinkedInIcon className="icon" />
            <TwitterIcon className="icon" />
          </Box>
        </Box>
        <Box className={classes.footerdata2}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
          </Box>
          <Box className={classes.linkSection}>
            <Typography className="links">Home</Typography>
            <Link to="/ContactUs">
              <Typography className="links">Get in touch</Typography>
            </Link>
            <Typography className="links">Property Owners</Typography>
            <Typography className="links">Our Team</Typography>
            <Typography className="links">News</Typography>
          </Box>
        </Box>
        <Box className={classes.footerdata2}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Services
            </Typography>
          </Box>
          <Box className={classes.linkSection}>
            <Typography className="links">for Sale</Typography>
            <Typography className="links">for rent</Typography>
            <Typography className="links">Short stay</Typography>
          </Box>
        </Box>
        <Box className={classes.footerdata2}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Contract
            </Typography>
          </Box>
          <Box className={classes.linkSection}>
            <div className={classes.secAddress}>
              <LocationOnOutlinedIcon sx={{ fontSize: 24 }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  textTransform: "capitalize",
                  paddingRight: 8,
                }}
              >
                Residencial Buena Vista Bavaro Bavaro-Punta Cana, La Altagracia,
                Dominican Republic
              </Typography>
            </div>
            <div className={classes.secAddress}>
              <PhoneIphoneOutlinedIcon sx={{ fontSize: 24 }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  textTransform: "capitalize",
                  paddingRight: 8,
                }}
              >
                809-516-9523
              </Typography>
            </div>
            <div className={classes.secAddress}>
              <MailOutlineOutlinedIcon sx={{ fontSize: 24 }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  textTransform: "capitalize",
                  paddingRight: 8,
                }}
              >
                info@playasa.do
              </Typography>
            </div>
          </Box>
        </Box>
      </div>

      <Box>
        {" "}
        <Divider
          sx={{
            margin: "0px 60px 0px 60px ",
            background: (theme) => theme.palette.common.white,
          }}
        />
        <div className={classes.endSection}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              textTransform: "capitalize",
              paddingRight: 8,
            }}
          >
            © 2023 Playasa.
          </Typography>
        </div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: 30,
    backgroundColor: theme.palette.background.footer,
  },
  main: {
    padding: " 60px 30px 20px 70px",
    display: "grid",
    columnGap: 30,
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    color: theme.palette.common.white,

    [theme.breakpoints.down("md")]: {
      padding: " 60px 30px 20px 15px",
      rowGap: 60,
    },
  },

  footerdata1: {
    display: "flex",
    rowGap: 10,
    flexDirection: "column",

    "& .logo": {
      width: 110,
      height: 68,
    },

    "& .iconContainer": {
      paddingTop: 10,
      display: "flex",
      columnGap: 20,

      " & .icon": {
        borderRadius: 50,
        padding: 5,
        backgroundColor: theme.palette.secondary.main,
        "& :hover": { cursor: "pointer" },
      },
    },
  },
  footerdata2: {
    display: "flex",
    rowGap: 30,
    flexDirection: "column",
  },

  linkSection: {
    display: "flex",
    rowGap: 15,
    flexDirection: "column",

    " & .links": {
      fontSize: 16,
      fontWeight: 500,
      color: theme.palette.common.white,
      textTransform: "capitalize",

      "&:hover": { cursor: "pointer" },
    },
  },

  secAddress: { display: "flex", columnGap: 10, paddingBottom: 5 },

  endSection: {
    color: theme.palette.common.white,
    padding: " 20px 30px 30px 70px",

    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: " 20px 0px 30px 80px",
    },
  },
}));
