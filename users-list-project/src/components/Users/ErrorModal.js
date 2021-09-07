import React from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./ErrorModal.module.css";

function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm} />
  );
}

function ModalOverlay(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title || "Fill the Error Title!"}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message || "Fill the Error Message!"}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message}
                      onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root"),
      )}
    </>
  );
}