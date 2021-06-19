import { useRef } from "react";

import Button from "../ui/Button";

import classes from "./Form.module.css";

function SignInForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const password1InputRef = useRef();
  const password2InputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    if (password1InputRef.current.value !== password2InputRef.current.value) {
    } else {
      const signUpData = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: password1InputRef.current.value,
      };
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Sign Up</h1>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="test" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="test" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password1">Password</label>
          <input type="test" required id="password1" ref={password1InputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password2">Confirm Password</label>
          <input type="test" required id="password2" ref={password2InputRef} />
        </div>
        <div className={classes.error}>The email or password is incorrect.</div>
        <div className={classes.btnPosition}>
          <Button text={"Join Now"} onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
