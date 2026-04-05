import { Task } from "../task/task";
import styles from "./done-block.module.css";

export function DoneBlock() {
  return (
    <div className={styles.statusBlock}>
      <header className={styles.statusHeader}>
        <div className={styles.statusHeaderTitle}>To do</div>
        <div className={styles.statusHeaderQuantity}>3</div>
      </header>

      <div className={styles.tasksBlock}>
        <Task />
      </div>
    </div>
  );
}
