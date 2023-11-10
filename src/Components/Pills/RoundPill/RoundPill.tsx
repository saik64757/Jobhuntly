import clsx from "clsx";
import styles from "./RoundPill.module.css";
import { ClassNames } from "@emotion/react";

interface roundPill {
  color: string;
  bgColor: string;
  children?: React.ReactNode;
  fontSize?: string;
}

function RoundPill({ color, bgColor, children, fontSize }: roundPill) {
  return (
    <div
      className={clsx(styles.roundPillWrapper)}
      style={{
        color: color,
        backgroundColor: bgColor,
        fontSize: fontSize,
      }}
    >
      {children}
    </div>
  );
}

export default RoundPill;
