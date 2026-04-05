import { Header } from "../header/header";
import { WorkSpace } from "../work-space/work-space";
import styles from "./main-layout.module.css";

export function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.container}>
        <Header />

        <WorkSpace />
      </div>
    </div>
  );
}
