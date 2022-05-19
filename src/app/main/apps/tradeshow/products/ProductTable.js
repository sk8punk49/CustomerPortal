import React from "react";
import {
  useTheme, Typography, Button, Icon, TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
  ButtonGroup, CardContent
} from "@material-ui/core";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  grow: {
    position: "relative",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },
}));



function ProductTable(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [itemList, setItemList] = useState(props.tableItems);



  function returnTo_majorCategories(lineCode_groupId, description) {
    props.handleChangeCategory(lineCode_groupId, description);
  }

  function addTradeshowItem(sellPrice, itemId) {
    props.addTradeshowItem(sellPrice);
    increaseRowQty(itemId);
  }
  function removeTradeshowItem(sellPrice, itemId) {
    itemList.map((item) => {
      if (item.id == itemId) {
        if (item.cartQty > 0) {
          props.removeTradeshowItem(sellPrice);
          decreaseRowQty(itemId);
        }
      }
    });


  }

  function increaseRowQty(rowId) {
    const newItemList = itemList.map((item) => {
      if (item.id === rowId) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        if (updatedItem.cartQty == "") {
          updatedItem.cartQty = 1;
        } else {
          updatedItem.cartQty += 1;
        }
        return updatedItem;
      }

      return item;
    });

    setItemList(newItemList);
  }

  function decreaseRowQty(rowId) {
    const newItemList = itemList.map((item) => {
      if (item.id === rowId) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        if (updatedItem.cartQty > 0) {
          updatedItem.cartQty -= 1;
        }
        return updatedItem;
      }

      return item;
    });

    setItemList(newItemList);
  }


  const tableItems = (
    <motion.div
      className="w-full m-8 text-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <CardContent>
        <TableContainer>
          <Table className="w-full min-w-full">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" component="div">
                    Description
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography align="right" variant="subtitle1" component="div">
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    align="center"
                    variant="subtitle1"
                    component="div"
                  >
                    Qty
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Typography className="font-medium">
                      {row.description}
                    </Typography>
                    <Typography className="caption" color="textSecondary">
                      {row.lineCode} {row.partNumber}
                    </Typography>
                    {row.extraInfo1 != "" && (
                      <Typography variant="caption" color="textSecondary">
                        {row.extraInfo1}
                      </Typography>
                    )}
                    {row.extraInfo2 != "" && (
                      <Typography variant="caption" color="textSecondary">
                        {row.extraInfo2}
                      </Typography>
                    )}

                  </TableCell>

                  <TableCell align="right">

                    <Typography className="font-medium">
                      ${row.sell_book}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button
                        onClick={() =>
                          removeTradeshowItem(row.sell_book, row.id)
                        }
                      >
                        <Icon
                          className={classes.grow}
                          fontSize="large"
                          color="secondary"
                        >
                          indeterminate_check_box
                        </Icon>
                      </Button>
                      <Button disabled={true} style={{ color: "black" }}>
                        <Typography
                          className="font-medium"
                          align="center"
                          variant="subtitle1"
                          component="div"
                        >
                          {row.cartQty == "" ? 0 : row.cartQty}
                        </Typography>
                      </Button>

                      <Button
                        onClick={() =>
                          addTradeshowItem(row.sell_book, row.id)
                        }
                      >
                        <Icon
                          className={classes.grow}
                          fontSize="large"
                          color="primary"
                        >
                          add_box
                        </Icon>
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </motion.div>
  )


  return (
    <React.Fragment>
      {props.selectedMajorCategory != "" && (
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
                  <Typography color="primary" className="text-16 sm:text-20 truncate font-semibold">
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
      )}

      {tableItems}
    </React.Fragment>

  );
}

export default ProductTable;
