import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <h2 className={styles.taskTitle}>Название задачи</h2>
        <button className={styles.closeButton}>
          <img src="/icons/closeIcon.svg" alt="" />
        </button>
      </header>

      <p className={styles.taskDescription}>
        Reconnaissa survey reconnaisae reocosnjkalk wiieoieieeooooeoe
        eojeoeiejieiien eiiejiejie iheii eo
      </p>

      <span className={styles.taskDate}>Due Date: 12 Jan 2021</span>

      <div>
        <span className={styles.statusName}>High</span>
      </div>
    </div>
  );
}
