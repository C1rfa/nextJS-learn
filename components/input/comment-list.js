import React from "react";
import styles from "./comment-list.module.css";

const CommentList = ({ comments }) => {
  comments = comments.map((item) => {
    return (
      <li key={item.id}>
        <p>{item.text}</p>
        <div>
          By <address>{item.name}</address>
        </div>
      </li>
    );
  });

  return <ul className={styles.comments}>{comments}</ul>;
};

export default CommentList;
