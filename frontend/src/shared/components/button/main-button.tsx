import styles from "./main-button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainButton({ children, ...props }: Props) {
  return (
    <button className={styles.mainButton} {...props}>
      {children}
    </button>
  );
}
