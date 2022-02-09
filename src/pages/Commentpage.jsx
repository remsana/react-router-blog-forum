import Comments from "../components/Comments";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Commentpage(props) {   
  // console.log(props.location.details); 
   
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { id } = useParams();
  // console.log(typeof(id));
  // console.log(id);
  
//fetching all comments for a specific post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []); 

  //fetching individual post with id in case the props.locatioproperty does not fetch it for us
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) =>
      response.json()).then((json) => setPost(json))
    ;
  }, []);
  
  return (
    <div>
      <Header title={`Comments on post #${id}`}/>
      {/* sending post to Comments components which is either the location.details or fetched post */}
      <Comments comments={comments} post={props.location.details || post} />
      <Link to="/"><button>Home</button></Link>
    </div>
  );
}

export default Commentpage;
