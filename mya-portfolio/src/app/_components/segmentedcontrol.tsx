import { JSX,useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import styles from "./segmentedcontrol.module.css";

type SegmentedControlProps = {
  items: Array<string>;
  activeItem: number;
  onChange: (index: number) => void;
};

const SegmentedControl = ({ items, activeItem, onChange }: SegmentedControlProps): JSX.Element => {
  return (
    <LayoutGroup>
      <ol className={styles.list} >
        {items.map((item, i) => {
          const isActive = i === activeItem;
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
                onClick={() => onChange(i)}
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