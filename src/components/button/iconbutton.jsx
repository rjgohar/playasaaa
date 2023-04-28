import { makeStyles } from "@mui/styles";
import React from "react";
export default function Iconbutton(props) {
  const classes = useStyles(props);
  const { children } = props;
  return <button className={classes.btnicon}>{children}</button>;
}

const useStyles = makeStyles((theme) => ({
  btnicon: {
    width: "300px",
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 30px",
    color: (props) => props.color,
    border: (props) => props.border,
    background: (props) => props.background,
    borderRadius: "6px  !important",

    "&:hover": {
      cursor: "pointer",
    },
  },

  button: {
    outline: "none",
  },
}));
