import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json()).then((json) => setPosts(json))
    ;
  }, []);
  
  return (    
    <div>
      { posts ? <>
      <Header title={"Your one-stop source for info on various topics!"} />
      <Blogs posts={posts} /> </> : <CircularProgress />
    }
    </div>
  );
}

export default Homepage;
