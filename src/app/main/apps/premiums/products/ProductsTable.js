import * as React from "react";
import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { TableHead } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import TableContainer from "@mui/material/TableContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { makeStyles } from "@material-ui/core/styles";

import { ButtonGroup } from "@material-ui/core";

function PremiumsTable(props) {
  const [itemList, setItemList] = useState(props.premiumItems);
  const searchText = useSelector(
    ({ Premiums }) => Premiums.premiumItems.searchText
  );

  const useStyles = makeStyles((theme) => ({
    grow: {
      position: "relative",
      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.05)",
      },
    },
  }));
  const classes = useStyles();
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

  var filteredResults = itemList.reduce(function (filteredResults, option) {
    if (
      option.description.toLowerCase().includes(searchText.toLowerCase()) ||
      option.lineDescription.toLowerCase().includes(searchText.toLowerCase())
    ) {
      filteredResults.push(option);
    }
    return filteredResults;
  }, []);

  function addPremiumItem(premiumPrice, rowId) {
    if (props.remainingCredits >= premiumPrice) {
      props.addPremiumItem(premiumPrice, rowId);
      increaseRowQty(rowId);
    }
  }

  function removePremiumItem(premiumPrice, rowId) {
    itemList.map((item) => {
      if (item.id == rowId) {
        if (item.cartQty > 0) {
          props.removePremiumItem(premiumPrice, rowId);
          decreaseRowQty(rowId);
        }
      }
    });
  }

  const premiumItemsTable = (
    <motion.div
      className="w-full m-8 text-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <CardContent>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" component="div">
                    Description
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography align="right" variant="subtitle1" component="div">
                    Price
                  </Typography>
                </TableCell>
                <TableCell>
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
              {filteredResults.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Typography className="font-medium">
                      {row.lineDescription} {row.description}
                    </Typography>
                  </TableCell>

                  <TableCell align="right">
                    {props.remainingCredits >= row.premium_value ? (
                      <Typography className="font-medium">
                        ${row.premium_value}
                      </Typography>
                    ) : (
                      <Typography className="font-medium" color="error">
                        ${row.premium_value}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button
                        onClick={() =>
                          removePremiumItem(row.premium_value, row.id)
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
                          addPremiumItem(row.premium_value, row.id)
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
  );
  return <div>{premiumItemsTable}</div>;
}

export default PremiumsTable;
