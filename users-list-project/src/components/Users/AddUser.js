import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
    props.onAddUser(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title}
                            message={error.message} />}
      <Card className={styles.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler}
                 value={enteredUsername} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler}
                 value={enteredAge} />
          <Button onClick={addUserHandler} type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}