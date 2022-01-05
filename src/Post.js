import "./Post.css";
import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://i.ibb.co/6wJg9HP/Picture1.png"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Niranjan{" "}
              <span>
                <VerifiedIcon className="post__badge" />
                @niranjanv849
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I will become hokage someday! Datttebayo!</p>
          </div>
        </div>
        <img src="https://i.ibb.co/TmkVVnt/myLOGO.png" alt="" />
        <div className="post__footer">
          <FavoriteIcon fontSize="small" />
          <ChatBubbleOutlineIcon fontSize="small" />
          <ShareIcon fontSize="small" />
          <ReportIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
