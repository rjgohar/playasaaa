import React from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

import { signuPModal, thankModel } from "../../redux/models/model.slicer";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "../input";
import logo from "../../assets/logo2.png";
import CheckBox from "../checkBox";
import Button from "../button";
export default function SignUpModal(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(signuPModal(false));
  };

  const hanldeThanksModal = () => {
    handleClose();
    dispatch(thankModel(true));
  };
  const { modalSignup } = useSelector((state) => state.modelSlice);

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.modal}
      open={modalSignup}
      onClose={handleClose}
      closeAfterTransition
    >
      <div className={classes.paper}>
        <Box className={classes.dataSection}>
          <Box sx={{ textAlign: "center" }}>
            <img sx={{ width: 250, height: 84 }} src={logo} alt="logo" />
          </Box>

          <Box sx={{ display: "flex", columnGap: 10 }}>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </Box>

          <Box>
            <Input placeholder="Email Address" />
          </Box>

          <Box sx={{ display: "flex", columnGap: 1, paddingTop: 6 }}>
            <CheckBox sx={{ transform: "scale(1.5)" }} />
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 400,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              By signing up, I agree to the terms of service and privacy policy.
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 4,
              }}
            >
              <Button
                variant="outlined"
                sx={{ width: 200 }}
                onClick={hanldeThanksModal}
              >
                Create Account
              </Button>
            </Box>
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

    padding: "80px 0px",

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
}));
