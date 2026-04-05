import { MainButton } from "../../shared/components";
import styles from "./header.module.css";

const localStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.svg" alt="logo" />
        <div className={styles.logoTitle}>TASK TRACKER</div>
      </div>

      <div>
        <MainButton style={localStyles} type="button">
          <img className={styles.icon} src="/icons/addIcon.svg" alt="" />
          <span>New task</span>
        </MainButton>
      </div>
    </header>
  );
}
