import React from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";

import styles from "./comments.module.css";

import { NotificationContext } from "./../../store/notification-context";

const Comments = ({ eventId }) => {
  const { showNotification, hideNotification } =
    React.useContext(NotificationContext);
  const [showComments, setShowComments] = React.useState(false);
  const [messageList, setMessageList] = React.useState([]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    showNotification({
      title: "Sending...",
      message: "Sending comment",
      status: "pending",
    });
    return fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      getComments();
      return res.json();
    });
  };

  const getComments = () => {
    fetch(`/api/comments/${eventId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMessageList(data.comments);
      });
  };

  React.useEffect(() => {
    if (!showComments) {
      getComments();
    }
  }, [showComments]);

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={messageList} />}
    </section>
  );
};

export default Comments;
