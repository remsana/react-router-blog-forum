import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import { useState, useEffect } from "react";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json()).then((json) => setPosts(json))
    ;
  }, []);

  return (
    <div>
      <Header title={"Your one-stop source for info on various topics!"} />
      <Blogs posts={posts} />
    </div>
  );
}

export default Homepage;
