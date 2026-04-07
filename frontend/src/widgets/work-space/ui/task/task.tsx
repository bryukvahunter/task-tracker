import type { Task } from "@/entities/task/types/task";
import styles from "./task.module.css";

interface Props {
  task: Task;
}

export function Task({ task }: Props) {
  const dueDate = task.dueDate ? task.dueDate : "Дата не выбрана";

  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <h2 className={styles.taskTitle}>{task.title}</h2>
        <button className={styles.closeButton}>
          <img src="/icons/closeIcon.svg" alt="close" />
        </button>
      </header>

      <p className={styles.taskDescription}>{task.description}</p>

      <span className={styles.taskDate}>Due Date: {dueDate}</span>

      <div>
        <span className={styles.statusName}>{task.priority}</span>
      </div>
    </div>
  );
}
