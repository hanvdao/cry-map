import React from "react";
import { Layout, Text } from "@ui-kitten/components";

import Post from "../components/Post";

const samplePostData = {
  avatar:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
  name: "Han Dao",
  time: "2015-02-21",
  content: "This is a post about the cat",
  place: "Stern Dining Hall",
};

const FeedScreen = () => {
  return (
    <Layout style={{ flex: 1, alignItems: "center" }}>
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
      <Post postData={samplePostData} />
    </Layout>
  );
};

export default FeedScreen;
