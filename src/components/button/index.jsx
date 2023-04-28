import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

export default withStyles((theme) => ({
  root: {
    borderRadius: "4px !important",
  },
  contained: {
    background: theme.palette.primary.main,
    fontWeight: 700 + " !important",
    fontSize: "18px  !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px  !important",
    },
  },
}))(Button);
