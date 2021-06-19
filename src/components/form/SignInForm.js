import { useRef } from "react";
import { useState } from "react";

import Button from "../ui/Button";

import classes from "./Form.module.css";

function SignInForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const password1InputRef = useRef();
  const password2InputRef = useRef();

  const [passwordNoMatch, setPasswordNoMatch] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    if (password1InputRef.current.value !== password2InputRef.current.value) {
      setPasswordNoMatch(true);
    } else {
      const signUpData = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: password1InputRef.current.value,
        communities: [],
      };

      fetch(
        "https://carnation-e2d5a-default-rtdb.firebaseio.com/accounts.json",
        {
          method: "POST",
          body: JSON.stringify(signUpData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        // close modal and move to Feed
      });
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Sign Up</h1>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            required
            id="password1"
            ref={password1InputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            required
            id="password2"
            ref={password2InputRef}
          />
        </div>

        {passwordNoMatch && (
          <div className={classes.error}>
            The email or password is incorrect.
          </div>
        )}
        <div className={classes.btnPosition}>
          <Button text={"Join Now"} onClick={submitHandler} />
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
