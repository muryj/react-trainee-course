import Card from "../UI/Card";
import styles from "./UsersList.module.css";

export default function UsersList(props) {
  // console.log(props);
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}