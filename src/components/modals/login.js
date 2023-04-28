import React from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import apple from "../../assets/apple.png";
import { loginModal, signuPModal } from "../../redux/models/model.slicer";
import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../button";
import logo from "../../assets/logo2.png";
import google from "../../assets/google.png";
import Input from "../input";
import Iconbutton from "../button/iconbutton";
import linkIn from "../../assets/linkedIn.png";
export default function LoginModal(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(loginModal(false));
  };

  const handleSignUp = () => {
    handleClose();
    dispatch(signuPModal(true));
  };
  const { modalLogin } = useSelector((state) => state.modelSlice);

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.modal}
      open={modalLogin}
      onClose={handleClose}
      closeAfterTransition
    >
      <div className={classes.paper}>
        <Box className={classes.dataSection}>
          <Box sx={{ textAlign: "center" }}>
            <img sx={{ width: 250, height: 84 }} src={logo} alt="logo" />
          </Box>
          <Box>
            <Input className={classes.inputtt} placeholder=" Email Address" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="outlined" sx={{ width: 200 }}>
              Login
            </Button>
          </Box>
          <div className={classes.divderSection}>
            <Divider
              sx={{
                background: (theme) => theme.palette.grey[500],
                width: "47%",
                height: 1,
              }}
            />
            <Typography sx={{ color: (theme) => theme.palette.common.input }}>
              or
            </Typography>
            <Divider
              sx={{
                background: (theme) => theme.palette.grey[500],
                width: "47%",
                height: 1,
              }}
            />
          </div>
          <Box className={classes.iconContainer}>
            <Iconbutton
              background="black"
              border="none"
              color="white"
              sx={{ width: 400 }}
            >
              <div className={classes.icon}>
                <img
                  sx={{ width: 30, height: 30, borderRadius: 50 }}
                  src={apple}
                  alt="apple"
                />
              </div>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                continue with Apple
              </Typography>
            </Iconbutton>
            <Iconbutton
              background="#4285F4"
              border="none"
              color="white"
              sx={{ width: 400 }}
            >
              <div className={classes.icon}>
                <img
                  sx={{ width: 30, height: 30, borderRadius: 50 }}
                  src={google}
                  alt="apple"
                />
              </div>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                continue with Google
              </Typography>
            </Iconbutton>
            <Iconbutton
              background="#FFF"
              border=" 2px solid #0A66C2"
              color="#0A66C2"
              sx={{ width: 400 }}
            >
              <div className={classes.icon}>
                <img
                  sx={{ width: 30, height: 30, borderRadius: 50 }}
                  src={linkIn}
                  alt="apple"
                />
              </div>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                continue with Linkedin
              </Typography>
            </Iconbutton>
          </Box>
          <div className={classes.divderSection}>
            <Divider
              sx={{
                background: (theme) => theme.palette.grey[500],
                width: "29%",
                height: 1,
              }}
            />
            <Typography
              sx={{
                color: (theme) => theme.palette.grey[500],
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Don't have an account?
            </Typography>
            <Divider
              sx={{
                background: (theme) => theme.palette.grey[500],
                width: "29.2%",
                height: 1,
              }}
            />
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{ width: 150 }}
              onClick={handleSignUp}
            >
              Signup
            </Button>
          </Box>
        </Box>
      </div>
    </Modal>
  );
}
const useStyles = makeStyles((theme) => ({
  modal: {
    transition: "all 500ms ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: theme.palette.common.white,

    width: "100%",

    maxWidth: "35%",

    borderRadius: 31,

    padding: "20px 40px",

    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.5)",

    [theme.breakpoints.down("md")]: {
      maxWidth: "calc(100% - 150px)",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "60%",
      margin: "auto",
    },
  },
  dataSection: {
    display: "flex",
    width: "80%",
    margin: "auto",
    flexDirection: "column",
    rowGap: 25,
  },

  inputtt: {
    " & .MuiInputBase-input": {
      textAlign: "center",
    },
  },

  divderSection: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    columnGap: 5,
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: 10,
  },

  icon: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,

    backgroundColor: "white",
  },
}));
