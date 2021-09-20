import React from "react";

import styles from "./newsletter-registration.module.css";

const NewsletterRegistration = () => {
  const emailRef = React.useRef();
  const [infoMessage, setInfoMessage] = React.useState(
    "Sign up to stay updated!"
  );

  React.useEffect(() => {
    setTimeout(() => {
      setInfoMessage("Sign up to stay updated!");
    }, 1500);
  }, [infoMessage]);

  const registrationHandler = (event) => {
    event.preventDefault();

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInfoMessage(data.message);
        emailRef.current.value = "";
      });
  };

  return (
    <section className={styles.newsletter}>
      <h2>{infoMessage}</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
