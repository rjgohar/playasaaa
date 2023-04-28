import { Box } from "@mui/system";
import logo from "../../assets/logo.png";
import { useStyle } from "./styles";
import { NavLink } from "react-router-dom";
import Button from "../button";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { useState } from "react";
import { Avatar } from "@mui/material";
import loginPic from "../../assets/loginPic.png";
import HeaderDropDown from "../headerDropDown";
import TemporaryDrawer from "../Drawe";
import React from "react";
const NavBar = () => {
  const classes = useStyle();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <Box className={classes.headerMain}>
      <NavLink to="/">
        <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
      </NavLink>
      <div className={classes.headerSub}>
        <div className={classes.deskHeader}>
          <LinksCompo />
        </div>

        <div style={{ position: "relative" }}>
          <ArrowDropDownCircleOutlinedIcon
            className={classes.icon}
            onClick={handleShowDropDown}
          />
          {showDropDown && <HeaderDropDown />}
        </div>
        <div>
          <TemporaryDrawer LinkSec={LinksCompo} />
        </div>
      </div>
    </Box>
  );
};
export default NavBar;

const LinksCompo = () => {
  const classes = useStyle();

  return (
    <Box className={classes.linksSec}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? classes.active : classes.links
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Properties "
        className={({ isActive }) =>
          isActive ? classes.active : classes.links
        }
      >
        Properties
      </NavLink>

      <NavLink
        to="our-team"
        className={({ isActive }) =>
          isActive ? classes.active : classes.links
        }
      >
        Our Team
      </NavLink>
      <NavLink
        to="news"
        className={({ isActive }) =>
          isActive ? classes.active : classes.links
        }
      >
        News
      </NavLink>
      <div>
        <AuthenticatedHeader />
      </div>
    </Box>
  );
};

const AuthenticatedHeader = () => {
  const classes = useStyle();
  const [isLogin, setIsLogin] = useState();

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  if (!isLogin)
    return (
      <div>
        <Button variant="outlined" onClick={handleLogin}>
          Join Now
        </Button>
      </div>
    );

  return (
    <div className={classes.headerSub}>
      <Button variant="outlined" onClick={handleLogin}>
        Sell
      </Button>
      <Avatar src={loginPic} />
    </div>
  );
};
