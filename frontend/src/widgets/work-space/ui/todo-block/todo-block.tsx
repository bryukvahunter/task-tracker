import type { Tasks } from "@/entities/task/types/task";
import styles from "./todo-block.module.css";
import { Task } from "../task/task";

interface Props {
  tasks: Tasks;
}

export function TodoBlock({ tasks }: Props) {
  const quantity = tasks.length;

  return (
    <div className={styles.statusBlock}>
      <header className={styles.statusHeader}>
        <div className={styles.statusHeaderTitle}>To do</div>
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
