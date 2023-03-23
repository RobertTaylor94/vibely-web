import SideCard from "../components/SideCard.js";
import TweetBox from "../components/TweetBox.js";
import StoriesBar from "../components/StoriesBar.js";
import Postcard from "../components/PostCard/PostCard.js";
import NewsList from "../components/NewsList.js";
import { db } from "../firebaseConfig.js";
import {
  collectionGroup,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState([]);

  function postsSnapshot() {
    const q = query(collectionGroup(db, "posts"));
    // eslint-disable-next-line
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        const newPost = {
          "id": doc.id,
          "data": doc.data()
        }
        console.log(newPost)
        setPosts(posts => [...posts, newPost]);
        console.log(posts)
      });
      console.log(`---------------------------------------`);
    });
  }

  useEffect(() => {
    postsSnapshot();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const postsList = posts.map(post => <Postcard key={post.id} displayname={post.data.displayName} post={post.data.post}/>)

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <SideCard />
        </div>
        <div className="col-6">
          <StoriesBar />
          <TweetBox />
          <div id="feed">
            {postsList}
          </div>
        </div>
        <div className="col">
          <NewsList />
        </div>
      </div>
    </div>
  );
}
