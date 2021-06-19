import { useState } from "react";

import classes from "./LandingPage.module.css";
import landingImage from "../images/landing.png";

import Button from "../components/ui/Button";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

function LandingPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function formHandler() {
    setModalIsOpen(true);
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
          <Button text={"Join for free"} action={formHandler} />
        </div>
      </section>
      <section className={classes.imgContainer}>
        <div className={classes.background}></div>
        <img src={landingImage} alt="mom and baby" className={classes.img} />
      </section>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </main>
  );
}

export default LandingPage;
