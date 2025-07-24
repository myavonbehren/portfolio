"use client";
import { JSX, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import styles from "./segmentedcontrol.module.css";

type SegmentedControlProps = {
  items: Array<string>;
  activeItem: number;
};

const SegmentedControl = ({ items, activeItem = 0 }: SegmentedControlProps): JSX.Element => {
  const [currentActive, setCurrentActive] = useState(activeItem);
  return (
    <LayoutGroup>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isActive = i === currentActive;
          return (
            <motion.li
              className={
                isActive || i === activeItem - 1
                  ? styles.itemNoDivider
                  : styles.item
              }
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={item}
            >
              <button
                onClick={() => setCurrentActive(i)}
                type="button"
                className={styles.button}
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className={styles.active}
                  />
                )}
                <span className={styles.label}>{item}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </LayoutGroup>
  );
};

export default SegmentedControl;