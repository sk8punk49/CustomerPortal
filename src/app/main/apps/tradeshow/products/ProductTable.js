import React from "react";
import { Typography, Button, Icon } from "@material-ui/core";
import { motion } from "framer-motion";
import { useTheme } from "@material-ui/core";

function ProductTable(props) {
  function returnTo_majorCategories(lineCode_groupId, description) {
    props.handleChangeCategory(lineCode_groupId, description);
  }

  const theme = useTheme();
  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            onClick={() =>
              returnTo_majorCategories(
                props.lineCode_groupId,
                props.selectedMajorCategory
              )
            }
            role="button"
            color="inherit"
          >
            <Icon className="text-20">
              {theme.direction === "ltr" ? "arrow_back" : "arrow_forward"}
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">
              Back to {props.selectedMajorCategory}
            </span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            <Icon
              component={motion.span}
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.2 } }}
              className="text-24 md:text-32"
            >
              shopping_cart
            </Icon>
          </motion.div>
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { delay: 0.3 } }}
            >
              <Typography className="text-16 sm:text-20 truncate font-semibold">
                {props.selectedSubCategory}
              </Typography>
              <Typography variant="caption" className="font-medium">
                {props.selectedMajorCategory}
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
