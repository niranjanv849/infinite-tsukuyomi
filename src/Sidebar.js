import React from "react";
import "./Sidebar.css";
import logo from "./logo.png";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="tsukuyomi icon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={CircleNotificationsIcon} text="Notifications" />
      <SidebarOption Icon={BookmarkAddedIcon} text="Bookmarks" />
      <SidebarOption Icon={PersonIcon} text="Profile" />
      <SidebarOption Icon={ExpandMoreIcon} text="More" />

      {/* Button ->  Create Post */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Create Post
      </Button>
    </div>
  );
}

export default Sidebar;
