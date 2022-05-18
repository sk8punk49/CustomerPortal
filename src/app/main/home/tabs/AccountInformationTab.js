import * as React from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Icon } from "@material-ui/core";
import CustomerDiscounts from "./CustomerDiscounts";

function createData(key, val) {
  return { key, val };
}

function AccountInformationTab(props) {
  const user = useSelector(({ auth }) => auth.user);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const accountInformation = [
    createData("Account Number", user.data.accountNumber),
    createData("Account Name", user.data.companyName),
    createData("Address", user.data.address1 + " " + user.data.address2),
    createData("City", user.data.city),
    createData("Province", user.data.province),
    createData("Postal Code", user.data.postalCode),
    createData("Phone Number", user.data.phoneNumber),
    createData("Primary Branch", user.data.primaryBranch),
    createData("Sales Person", user.data.salesPerson),
  ];

  const programInformation = [
    createData(
      "ACDelco PSC",
      <Icon style={{ color: "green" }}>check_circle</Icon>
    ),
    createData(
      "Trip Participation",
      <Icon style={{ color: "green" }}>check_circle</Icon>
    ),
    createData(
      "Nexpart Ordering",
      <Icon style={{ color: "green" }}>check_circle</Icon>
    ),
    createData(
      "Monrow Expert Plus",
      <Icon style={{ color: "red" }}>highlight_off</Icon>
    ),
    createData(
      "Welding & Gas",
      <Icon style={{ color: "green" }}>check_circle</Icon>
    ),
  ];

  const balanceInformation = [
    createData("Credit Limit", "$50,000"),
    createData("Current Balance", "$0.00"),
    createData("Balance 30 Days", "$0.00"),
    createData("Balance 60 Days", "$0.00"),
    createData("Balance 90 Days", "$0.00"),
    createData("Balance 120 Days", "$0.00"),
    createData("Invoice Discount", "10%"),
    createData("Discount Level", "True Jobber"),
  ];

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const accountInformationTable = (
    <CardContent>
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">
          Account Information
        </Typography>
      </div>

      <Table className="w-full min-w-full">
        <TableBody>
          {accountInformation.map((row) => (
            <TableRow
              key={row.key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography className="font-medium">{row.key}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{row.val}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  );

  const programIncentiveTable = (
    <React.Fragment>
      <CardContent>
        <div className="flex items-center justify-between p-20 h-64">
          <Typography className="text-16 font-medium">
            Programs & Incentives
          </Typography>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              {programInformation.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography className="font-medium">{row.key}</Typography>
                  </TableCell>
                  <TableCell align="right">{row.val}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  const accountBalanceTable = (
    <CardContent>
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">Account Status</Typography>
      </div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {balanceInformation.map((row) => (
              <TableRow
                key={row.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography className="font-medium">{row.key}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography> {row.val}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex w-full sm:w-2/3 p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="w-full">{accountInformationTable}</div>
        </Paper>
      </motion.div>
      <motion.div variants={item} className="flex w-full sm:w-1/3 p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="w-full">{accountBalanceTable}</div>
        </Paper>
      </motion.div>
      <motion.div variants={item} className="flex w-full sm:w-1/3 p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="w-full">{programIncentiveTable}</div>
        </Paper>
      </motion.div>
      <motion.div variants={item} className="flex sm:w-2/3 w-full p-12">
        <Paper className="w-full rounded-20 shadow">
          <CustomerDiscounts />
        </Paper>
      </motion.div>
    </motion.div>
  );
}

export default AccountInformationTab;
