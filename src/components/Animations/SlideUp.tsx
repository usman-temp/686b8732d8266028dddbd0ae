import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function SlideUp({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="[will-change:transform,opacity]"
    >
      {children}
    </motion.div>
  );
}