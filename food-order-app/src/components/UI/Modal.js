import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = function (props) {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
}

