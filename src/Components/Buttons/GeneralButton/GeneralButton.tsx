import styles from "./GeneralButton.module.css";
import clsx from "clsx";
interface genButton {
  fontSize?: string;
  color?: string;
  bgColor?: string;
  children: React.ReactNode;
  btnwidth?: string;
}

function GeneralButton({
  fontSize,
  color,
  bgColor,
  children,
  btnwidth,
}: genButton) {
  return (
    <button
      className={clsx(styles.generalButton)}
      style={{
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColor,
        width: btnwidth,
      }}
    >
      {children}
    </button>
  );
}

export default GeneralButton;
