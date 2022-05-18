import React from "react";
import { useTheme, Typography, ListItemText, ListItem, Icon } from "@material-ui/core";
import { motion } from "framer-motion";

function SubCategories(props) {
  const theme = useTheme();
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

  function returnTo_main() {
    props.resetPage();
  }

  function showTableItems_byLineCode(lineCode, description) {
    props.update_selected_subCategory(description);
    props.showTableItems_byLineCode(lineCode);
  }

  return (
    <div>
      <div className="flex flex-1 w-full items-center justify-between">
        <div className="flex flex-col items-start max-w-full min-w-0">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
          >
            <Typography
              className="flex items-center sm:mb-12"
              onClick={() =>
                returnTo_main()
              }
              role="button"
              color="inherit"
            >
              <Icon className="text-20">
                {theme.direction === "ltr" ? "arrow_back" : "arrow_forward"}
              </Icon>
              <span className="hidden sm:flex mx-4 font-medium">
                Back to Main
              </span>
            </Typography>
          </motion.div>


        </div>
      </div>
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
