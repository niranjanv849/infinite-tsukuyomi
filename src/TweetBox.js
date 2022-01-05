import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="PostBox">
      <form>
        <div className="PostBox__input">
          <Avatar src="https://i.ibb.co/6wJg9HP/Picture1.png" />
          <input placeholder="Write the Trends" type="text"></input>
        </div>
        <input
          className="PostBox__imageInput"
          placeholder="       Optional: Enter Image URL"
          type="text"
        ></input>
        <Button className="PostBox__PostButton">Post</Button>
      </form>
    </div>
  );
}

export default TweetBox;
