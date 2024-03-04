"use client"
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode,
  delay?: number
}

export default function FadeIn({children, delay}: props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }} transition={{delay: delay || 0.2}}>
      {children}
      </motion.div>
  );
}