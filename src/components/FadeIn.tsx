"use client"
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode,
  delay?: number,
  styles?: string
}
//When wrapped around other elements, this component will fade in when in view.
export default function FadeIn({children, delay, styles=""}: props) {
  return (
    <motion.div
      className={styles ? styles : ""}
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }} transition={{delay: delay || 0.2}}>
      {children}
      </motion.div>
  );
}