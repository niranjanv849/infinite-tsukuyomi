import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Lord 7th",
      username: "Uzumaki Family",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="PostBox">
      <form>
        <div className="PostBox__input">
          <Avatar src="https://i.ibb.co/6wJg9HP/Picture1.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Write the Trends in BIT"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="PostBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="PostBox__PostButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
