import React from "react";
import styles from "./new-comment.module.css";

const NewComment = (props) => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const emailInputRef = React.useRef();
  const nameInputRef = React.useRef();
  const commentInputRef = React.useRef();

  const sendCommentHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props
      .onAddComment({
        email: enteredEmail,
        name: enteredName,
        text: enteredComment,
      })
      .then((data) => {
        if (data.error) {
          setIsInvalid(data.error);
        } else {
          emailInputRef.current.value = "";
          nameInputRef.current.value = "";
          commentInputRef.current.value = "";
          setTimeout(() => {
            setMessage("");
          }, 1000);
        }
        setMessage(data.message);
      });
  };

  return (
    <form className={styles.form} onSubmit={sendCommentHandler}>
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
      </div>
      {(isInvalid || message) && <p>{message}</p>}
      <button>Submit</button>
    </form>
  );
};

export default NewComment;
