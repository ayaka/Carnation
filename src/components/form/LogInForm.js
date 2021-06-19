import { useRef } from "react";
import { useState } from "react";

import Button from "../ui/Button";

import classes from "./Form.module.css";

function LogInForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [passwordNoMatch, setPasswordNoMatch] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    // get from database
    const storedPassword = "test";
    if (passwordInputRef.current.value !== storedPassword) {
      setPasswordNoMatch(true);
    } else {
      // send personal data object
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Welcome Back</h1>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        {/* email no match case */}
        {passwordNoMatch && (
          <div className={classes.error}>
            The email or password is incorrect.
          </div>
        )}
        <div className={classes.btnPosition}>
          <Button text={"Log In"} onClick={submitHandler} />
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
