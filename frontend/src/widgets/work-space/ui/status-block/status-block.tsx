import type { Tasks } from "@/entities/task/types/task";
import styles from "./status-block.module.css";
import { Task } from "../task/task";
import { filterTaskByStatus } from "@/shared/utils/helpers";
import clsx from "clsx";
import type { StatusBlockSetting } from "@/widgets/work-space/lib";

interface Props {
  tasks: Tasks;
  status: StatusBlockSetting["status"];
  statusStyle: StatusBlockSetting["classNames"];
}

export function StatusBlock({ tasks, status, statusStyle }: Props) {
  const filteredTasks = filterTaskByStatus(tasks, status.value);
  const quantity = filteredTasks.length;

  return (
    <div className={styles.statusBlock}>
      <header
        className={clsx(styles.statusHeader, styles[statusStyle.statusHeader])}
      >
        <div className={styles.statusHeaderTitle}>{status.title}</div>
        <div
          className={clsx(
            styles.statusHeaderQuantity,
            styles[statusStyle.statusHeaderQuantity],
          )}
        >
          {quantity}
        </div>
      </header>

      <div className={clsx(styles.tasksBlock, styles[statusStyle.statusBlock])}>
        {filteredTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
