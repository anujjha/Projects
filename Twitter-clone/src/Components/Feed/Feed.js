import React , { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";

//IMPORT database from config file i.e firebase
import db from "../../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {/* <Post 
      displayName='Manish Kumar'
      username='manishkj441_'
      verified={true}
      text='This is a twitter appernace, i am working on it  and challenge you to build with me.'
      image='https://www.kyivpost.com/wp-content/uploads/2019/11/000_1K55AR.jpg'
      avatar='https://lh3.googleusercontent.com/proxy/JqEBBzUDeVLVSaUu7SwMmf2w33QA9opA2G-Ddc760VPmg0vuStdJw36hBar-yOvMcP4DcUf1BukFe_GQ1TTWkgMCBA'

      /> */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;