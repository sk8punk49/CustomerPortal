import React from "react";
import { Typography, ListItemText, ListItem } from "@material-ui/core";
import { motion } from "framer-motion";

function SubCategories(props) {
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

  function showTableItems_byLineCode(lineCode, description) {
    props.update_selected_subCategory(description);
    props.showTableItems_byLineCode(lineCode);
  }

  return (
    <div>
      <Typography variant="subtitle1" color="primary">
        {props.selectedMajorCategory}
      </Typography>
      <Typography variant="subtitle1">Sub Categories</Typography>

      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {props.filterMajorCatoryLineCodes.map((row) => (
          <motion.div
            key={row.id}
            variants={item}
            className="flex sm:w-1/3 w-full p-12"
          >
            <ListItem
              onClick={() =>
                showTableItems_byLineCode(row.lineCode, row.description)
              }
              className="text-center"
              style={{
                border: "2px solid #006294",
                borderRadius: "5px",
              }}
              button
            >
              <ListItemText primary={row.description} />
            </ListItem>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SubCategories;
