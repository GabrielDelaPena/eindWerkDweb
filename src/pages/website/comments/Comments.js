import React from "react";
import { motion } from "framer-motion";

function Comments() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Comments
    </motion.div>
  );
}

export default Comments;
