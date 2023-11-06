import styles from "./GeneralButton.module.css";
import clsx from "clsx";
interface genButton {
  fontSize?: string;
  color?: string;
  bgColor?: string;
  children: React.ReactNode;
}

function GeneralButton({ fontSize, color, bgColor, children }: genButton) {
  return (
    <button
      className={clsx(styles.generalButton)}
      style={{
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </button>
  );
}

export default GeneralButton;
