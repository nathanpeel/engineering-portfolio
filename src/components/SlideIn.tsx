"use client"
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode
}

export default function SlideIn({children}: props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200}}
      whileInView={{ opacity: 1, x: 0 }}>
      {children}
      </motion.div>
  );
}