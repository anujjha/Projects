import React from "react";
import "./Widgets.css";
import {
TwitterTimelineEmbed,
TwitterShareButton,  
TwitterTweetEmbed,
 } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1268276337912971268123"} />

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="manishkj"
          options={{ height: 400 }}
        /> */}
        {/* <TwitterTimelineEmbed sourceType="likes" screenName="manishkj441" options={{height: 400}} /> */}

        <TwitterShareButton
          url={"https://www.linkedin.com/feed/"}
          options={{ text: "#reactjs is awesome", via: "mansih" }}
        />
      </div>
    </div>
  );
}

export default Widgets;