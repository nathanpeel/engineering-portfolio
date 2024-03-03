"use client"
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode
}

export default function FadeIn({children}: props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }} transition={{delay: 0.2}}>
      {children}
      </motion.div>
  );
}