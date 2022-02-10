import Comments from "../components/Comments";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

function Commentpage(props) {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { id } = useParams();

  //fetching all comments for a specific post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  //fetching individual post with id in case the props.locatioproperty does not fetch it for us
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
  }, []);

  return (
    <>
    {comments ?
    <div>
      <Header title={`Comments on post #${id}`} />
      <Comments comments={comments} post={props.location.details || post} />
      <Link to="/">
        <button>GO TO HOMEPAGE</button>
      </Link>
    </div> : <CircularProgress />
    }
    </>
  );}

export default Commentpage;
