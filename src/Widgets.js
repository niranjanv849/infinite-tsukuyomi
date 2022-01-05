import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget__header">
        <KeyboardArrowDownIcon fontSize="medium" />
        <h3>What's Happening in BIT!</h3>
      </div>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        {"  "}
        <input placeholder=" Search by @username" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>App News & Updates</h2>

        <TwitterTweetEmbed tweetId={"1412686890323435526"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Bitsathyindia"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://BITiansWeb.web.app"}
          options={{
            text: "Connecting with BITians is made easy ❤",
            via: "BITiansWeb",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
