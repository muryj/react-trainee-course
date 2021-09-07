import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
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
    </>
  );
}