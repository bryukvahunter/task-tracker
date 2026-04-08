import { mockTasks } from "../../entities/task/lib/mock.data";
import { statusConfig } from "./lib";
import { StatusBlock } from "./ui/status-block/status-block";
import styles from "./work-space.module.css";

export function WorkSpace() {
  const tasks = mockTasks;

  return (
    <main className={styles.workPlace}>
      {statusConfig.map((statusBlock, index) => (
        <StatusBlock
          key={`${statusBlock.status} - ${index}`}
          tasks={tasks}
          status={statusBlock.status}
          statusStyle={statusBlock.classNames}
        />
      ))}
    </main>
  );
}
