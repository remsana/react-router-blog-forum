import Comment from "./Comment";

function Comments(props) {
  // console.log(props.comments)
  console.log(props.post);
  return (
    <div >
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
  );
}

export default Comments;
