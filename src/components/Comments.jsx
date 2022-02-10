import Comment from "./Comment";
import Error from "./Error";

function Comments(props) {    
  return (
    <>{props.comments.length === 0 ? <Error />:
    <div>      
      <div className="titleAndBody">
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      </div>
      <div className="commentsSection">
        {props.comments.map((comment, i) => {
          return <Comment key={i} {...comment} />;
        })}
      </div>
    </div> 
  }</>
  );
}

export default Comments;


