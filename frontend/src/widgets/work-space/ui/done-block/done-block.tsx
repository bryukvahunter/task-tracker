import type { Tasks } from "@/entities/task/types/task";
import { Task } from "../task/task";
import styles from "./done-block.module.css";

interface Props {
  tasks: Tasks;
}

export function DoneBlock({ tasks }: Props) {
  const quantity = tasks.length;

  return (
    <div className={styles.statusBlock}>
      <header className={styles.statusHeader}>
        <div className={styles.statusHeaderTitle}>Done</div>
        <div className={styles.statusHeaderQuantity}>{quantity}</div>
      </header>

      <div className={styles.tasksBlock}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
