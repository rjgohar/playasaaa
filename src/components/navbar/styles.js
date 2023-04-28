import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  headerMain: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    "& svg": {
      fontSize: "2.5rem",
    },
  },
  linksSec: {
    display: "grid",
    width: "max-content",
    gridTemplateColumns: "repeat(8, max-content)",
    alignItems: "center",
    columnGap: "30px",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      padding: "0px 10px 0px 10px",
      rowGap: "20px",

      "& a": {
        color: theme.palette.secondary.main + "!important",
      },
    },
  },
  active: {
    textDecoration: "none",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "30px",
    position: "relative",

    color: theme.palette.secondary.main,

    [theme.breakpoints.down("md")]: {
      borderLeft: `5px solid ${theme.palette.secondary.main}`,

      paddingLeft: "10px",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "90%", // set the width of the pseudo-element
      borderBottom: `5px solid ${theme.palette.secondary.main}`, // set the border bottom color and style
      borderRadius: "100px",

      [theme.breakpoints.down("md")]: {
        border: "none",
      },
    },
  },
  links: {
    textDecoration: "none",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "30px",
    color: "white",
  },

  icon: {
    color: "white",
    cursor: "pointer",
  },

  headerSub: {
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    columnGap: "10px",
    alignItems: "center",

    "& .MuiAvatar-root": {
      width: "50px",
      height: "50px",
    },
  },
  loginImage: {
    width: "220px",
    height: "220px",
  },

  deskHeader: {
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
}));
