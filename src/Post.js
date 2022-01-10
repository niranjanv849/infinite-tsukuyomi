import "./Post.css";
import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReportIcon from "@mui/icons-material/Report";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

 

const Post = forwardRef(
  ({ displayName,
    username,
    verified,
    text,
    image,
    avatar
  }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
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
);

export default Post;
