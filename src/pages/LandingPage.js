import { useState } from "react";

import classes from "./LandingPage.module.css";
import landingImage from "../images/landing.png";

import Button from "../components/ui/Button";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import SignInForm from "../components/form/SignInForm";

function LandingPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function formHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <main className={classes.container}>
      <section className={classes.textArea}>
        <div className={classes.text}>
          <p>
            Connect with communities of new mothers from all over the world.{" "}
            <br />
            Seek advice from mental health and wellness experts!
          </p>
        </div>
        <div className={classes.btnPosition}>
          <Button text={"Join for free"} onClick={formHandler} />
        </div>
      </section>
      <section className={classes.imgContainer}>
        <div className={classes.background}></div>
        <img src={landingImage} alt="mom and baby" className={classes.img} />
      </section>
      {modalIsOpen && <Modal formType={<SignInForm />} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </main>
  );
}

export default LandingPage;
