import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
// import TwitterIcon from "@material-ui/icons/Twitter";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function Sidebar() {
  return (
    <div className="sidebar">
        <LocalFireDepartmentIcon className="sidebar__Icon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Create Post
      </Button>
    </div>
  );
}

export default Sidebar;
