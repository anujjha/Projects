import React , { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Anuj Kumar",
      username: "anujjha05",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/proxy/JqEBBzUDeVLVSaUu7SwMmf2w33QA9opA2G-Ddc760VPmg0vuStdJw36hBar-yOvMcP4DcUf1BukFe_GQ1TTWkgMCBA",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/proxy/JqEBBzUDeVLVSaUu7SwMmf2w33QA9opA2G-Ddc760VPmg0vuStdJw36hBar-yOvMcP4DcUf1BukFe_GQ1TTWkgMCBA" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;