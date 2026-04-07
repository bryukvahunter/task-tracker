import { mockTasks } from "../../entities/task/lib/mock.data";
import { filterTaskByStatus } from "../../shared/utils/helpers";
import { DoneBlock } from "./ui/done-block/done-block";
import { InProgressBlock } from "./ui/in-progress-block/in-progress-block";
import { TodoBlock } from "./ui/todo-block/todo-block";
import styles from "./work-space.module.css";

export function WorkSpace() {
  const tasks = mockTasks;

  return (
    <main className={styles.workPlace}>
      <TodoBlock tasks={filterTaskByStatus(tasks, "todo")} />
      <InProgressBlock tasks={filterTaskByStatus(tasks, "inProgress")} />
      <DoneBlock tasks={filterTaskByStatus(tasks, "done")} />
    </main>
  );
}
