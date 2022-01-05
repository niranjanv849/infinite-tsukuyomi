import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.ibb.co/6wJg9HP/Picture1.png" />
          <input placeholder="Write the Trends" type="text"></input>
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        ></input>
        <Button className="tweetBox__tweetButton">Post</Button>
      </form>
    </div>
  );
}

export default TweetBox;
