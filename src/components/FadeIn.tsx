"use client"
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode
}

export function FadeIn({children}: props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}>
      {children}
      </motion.div>
  );
}