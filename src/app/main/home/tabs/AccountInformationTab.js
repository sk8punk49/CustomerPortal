import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(key, val) {
  return { key, val };
}

function AccountInformationTab() {
  const user = useSelector(({ auth }) => auth.user);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const accountInformation = [
    createData("Account Number", 988),
    createData("Account Name", user.data.companyName),
    createData("Address", user.data.address1),
    createData("Sales Person", ""),
  ];
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const basicInfo = (
    <CardContent>
      <Typography variant="h5" component="div">
        Account Information
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {accountInformation.map((row) => (
              <TableRow
                key={row.val}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.key}
                </TableCell>
                <TableCell align="right">{row.val}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );

  const programIncentives = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Programs & Incentives
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}
          color="textSecondary"
          gutterBottom
        ></Typography>

        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountInformation.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
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
  const discountInfo = (
    <CardContent>
      <Typography variant="h5" component="div">
        Applied Discounts
      </Typography>
      <Typography
        sx={{ fontSize: 14 }}
        color="textSecondary"
        gutterBottom
      ></Typography>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accountInformation.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
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
      <motion.div variants={item} className="flex w-full sm:w-1/3 p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="h-400 w-full">{basicInfo}</div>
        </Paper>
      </motion.div>
      <motion.div variants={item} className="flex w-full sm:w-1/3 p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="h-400 w-full">{programIncentives}</div>
        </Paper>
      </motion.div>
      <motion.div variants={item} className="flex w-full sm:w-1/3 p-12">
        <Paper className="w-full rounded-20 shadow">
          <div className="h-400 w-full">{discountInfo}</div>
        </Paper>
      </motion.div>
    </motion.div>
  );
}

export default AccountInformationTab;
