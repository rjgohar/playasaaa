import React from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { thankModel } from "../../redux/models/model.slicer";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo2.png";
import Button from "../button";

export default function ThanksModal(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(thankModel(false));
  };

  const { modalThanks } = useSelector((state) => state.modelSlice);

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.modal}
      open={modalThanks}
      onClose={handleClose}
      closeAfterTransition
    >
      <div className={classes.paper}>
        <Box className={classes.dataSection}>
          <Box sx={{ textAlign: "center" }}>
            <img sx={{ width: 250, height: 84 }} src={logo} alt="logo" />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: 400,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              Thank you for signing up .{" "}
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
                sx={{ width: 280, textTransform: "capitalize" }}
              >
                Proceed to home page
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

    maxWidth: "30%",

    borderRadius: 31,

    padding: "80px 20px",

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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: 25,
  },
}));
