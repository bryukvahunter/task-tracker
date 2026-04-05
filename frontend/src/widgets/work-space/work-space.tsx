import { DoneBlock } from "./ui/done-block/done-block";
import { InProgressBlock } from "./ui/in-progress-block/in-progress-block";
import { StatusBlock } from "./ui/status-block/status-block";
import styles from "./work-space.module.css";

export function WorkSpace() {
  return (
    <main className={styles.workPlace}>
      <StatusBlock />
      <InProgressBlock />
      <DoneBlock />
    </main>
  );
}
