import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side__head">
        <div className="text__top">Welcome!</div>
        <div className="text__bottom">
          <span>Hii👋, </span>
          <span className="bold__username"> Guest user</span>
        </div>
        <br></br>
      </div>

      <Link to="/" className="linkto">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      {/* <SidebarOption Icon={LoginIcon} text="Login" /> */}
      <Link to="/login" className="linktologin">
        <SidebarOption Icon={LogoutIcon} text="Logout" />
      </Link>

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Create Post
      </Button>
    </div>
  );
}

export default Sidebar;
