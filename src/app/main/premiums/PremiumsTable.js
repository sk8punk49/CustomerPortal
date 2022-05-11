import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPremiumItems, selectPremiumItems } from "./store/premiumItemsSlice";

import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Table from "@mui/material/Table";
import { TableHead } from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function PremiumsTable() {
  const dispatch = useDispatch();
  const premiumItems = useSelector(selectPremiumItems);
  useEffect(() => {
    dispatch(getPremiumItems());
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
  const premiumsTable = (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {premiumItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Typography className="font-medium">
                  {row.lineDescription}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography className="font-medium">
                  {row.description}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex sm:w-1/3 w-full p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="overflow-auto h-400 w-full">{premiumsTable}</div>
        </Paper>
      </motion.div>
    </motion.div>
  );
}

export default PremiumsTable;
