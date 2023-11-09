import clsx from "clsx";
import styles from "./RoundPill.module.css";
import { ClassNames } from "@emotion/react";

interface roundPill {
  color: string;
  bgColor: string;
  children?: React.ReactNode;
}

function RoundPill({ color, bgColor, children }: roundPill) {
  return (
    <div
      className={clsx(styles.roundPillWrapper)}
      style={{
        color: color,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
}

export default RoundPill;
