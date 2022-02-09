import style from "./Comment.module.css";

function Comment({ body, name, email }) {
  return (
    <div className={style.commentDiv}>
      <p className={style.comment}> {body} </p>
      <div className={style.commentInfo}>
      <p className={style.commentName}>Name: {name}</p>
      <p className={style.commentEmail}>E-mail: {email}</p>
      </div>
    </div>
  );
}

export default Comment;
