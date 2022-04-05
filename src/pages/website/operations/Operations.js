import React from "react";
import { motion } from "framer-motion";

function Operations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Operations
    </motion.div>
  );
}

export default Operations;
