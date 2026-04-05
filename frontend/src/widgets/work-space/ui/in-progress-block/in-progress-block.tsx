import { Task } from "../task/task";
import styles from "./in-progress-block.module.css";

export function InProgressBlock() {
  return (
    <div className={styles.statusBlock}>
      <header className={styles.statusHeader}>
        <div className={styles.statusHeaderTitle}>To do</div>
        <div className={styles.statusHeaderQuantity}>3</div>
      </header>

      <div className={styles.tasksBlock}>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
