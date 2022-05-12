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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function PremiumsTable(props) {
  const searchText = useSelector(
    ({ Premiums }) => Premiums.premiumItems.searchText
  );

  var filteredResults = props.premiumItems.reduce(function (
    filteredResults,
    option
  ) {
    if (
      option.description.toLowerCase().includes(searchText.toLowerCase()) ||
      option.lineDescription.toLowerCase().includes(searchText.toLowerCase())
    ) {
      filteredResults.push(option);
    }
    return filteredResults;
  },
  []);

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
                    Supplier
                  </Typography>
                </TableCell>
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
                  <Typography align="right" variant="subtitle1" component="div">
                    Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredResults.map((row) => (
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
                  <TableCell align="right">
                    <Typography className="font-medium">
                      ${row.premium_value}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {props.remainingCredits >= row.premium_value ? (
                      <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="primary"
                        onClick={() => props.updateBalances(row.premium_value)}
                      >
                        <span className="hidden sm:flex">
                          <Icon>check_circle</Icon>
                          &nbsp;Available
                        </span>
                        <span className="flex sm:hidden">
                          <Icon>check_circle</Icon>
                        </span>
                      </Button>
                    ) : (
                      <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        onClick={() => props.updateBalances(row.premium_value)}
                      >
                        <span className="hidden sm:flex">
                          <Icon style={{ color: "red" }}>highlight_off</Icon>
                          &nbsp;Not Available
                        </span>
                        <span className="flex sm:hidden">
                          <Icon>highlight_off</Icon>
                        </span>
                      </Button>
                    )}
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
