import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Table from "@mui/material/Table";
import { TableHead } from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Icon } from "@material-ui/core";

import {
  getCustomerDiscounts,
  selectCustomerDiscounts,
} from "../store/customerDiscountSlice";

function createData(key, val) {
  return { key, val };
}

function createPriceLevelLabel(param) {
  switch (param) {
    case 1:
      return "List";
    case 4:
      return "Cost";
    default:
      return "True Jobber";
  }
}

function invertDiscount(rate) {
  rate = rate * -1; // Invert
  if (rate > 0) {
    return <Typography style={{ color: "green" }}>+{rate}%</Typography>;
  } else {
    return <Typography style={{ color: "red" }}>{rate}%</Typography>;
  }
}

function CustomerDiscounts(props) {
  const dispatch = useDispatch();
  const customerDiscounts = useSelector(selectCustomerDiscounts);

  useEffect(() => {
    dispatch(getCustomerDiscounts());
  }, [dispatch]);

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

  const lineDiscountInformationTable = (
    <CardContent>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1" component="div">
                  Line
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" component="div">
                  Description
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" component="div">
                  Discount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="right" variant="subtitle1" component="div">
                  Rate
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerDiscounts.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Typography className="font-medium">{row.id}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography className="font-medium">
                    {row.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="flex items-center">
                    {createPriceLevelLabel(row.discountLevel)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {invertDiscount(row.discount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );

  return (
    <motion.div variants={item} className="flex w-full p-12">
      <div className=" w-full">
        <div className="flex items-center justify-between p-20 h-64">
          <Typography className="text-16 font-medium">
            Line Discounts
          </Typography>
        </div>
        <div className="overflow-auto h-400">
          {lineDiscountInformationTable}
        </div>
      </div>
    </motion.div>
  );
}

export default CustomerDiscounts;
