import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Paper from "@mui/material/Paper";

function PremiumsTable(props) {



  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex sm:w-1/3 w-full p-12">

      </motion.div>
    </motion.div>
  );
}

export default PremiumsTable;
