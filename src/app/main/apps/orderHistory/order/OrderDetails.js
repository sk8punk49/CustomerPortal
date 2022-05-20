import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function OrderDetails(props) {
  const user = useSelector(({ auth }) => auth.user);
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            style={{
              backgroundColor: "#777",
              padding: "25px",
            }}
            item
            xs={12}
          >
            <img
              src={
                "https://customer.lordco.com/lordcoImages/lordco-logo-dark.png"
              }
              style={{ width: "180px", height: "60px", float: "left" }}
            />
            <Typography
              variant="h3"
              className="font-semibold"
              style={{ float: "right", color: "white" }}
            >
              INVOICE
            </Typography>
          </Grid>
          <Grid item xs={4} container>
            <div className="mt-12 p-24">
              <Typography
                className="text-13 font-semibold"
                color="textSecondary"
              >
                Bill To:
              </Typography>
              <Typography color="textSecondary">
                {user.data.companyName}
              </Typography>

              {user.data.address1 && (
                <Typography color="textSecondary">
                  {user.data.address1} {user.data.address2} {user.data.city}{" "}
                  {user.data.province}&nbsp;
                  {user.data.postalCode}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mt-12 p-24">
              <Typography
                className="text-13 font-semibold"
                color="textSecondary"
              >
                Ship To:
              </Typography>
              <Typography color="textSecondary">
                {user.data.companyName}
              </Typography>

              {user.data.address1 && (
                <Typography color="textSecondary">
                  {user.data.address1} {user.data.address2} {user.data.city}{" "}
                  {user.data.province}&nbsp;
                  {user.data.postalCode}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mt-12 p-24">
              <Typography
                variant="h5"
                className="font-semibold"
                color="textSecondary"
              >
                Invoice# {props.invoiceNumber}
              </Typography>
              <Typography color="textSecondary">Date:</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="mt-48">
            <Table style={{ width: "100%" }}>
              <TableHead
                style={{
                  backgroundColor: "#777",
                }}
              >
                <TableRow>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Account #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    PST #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Order #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Clerk
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Shipping Method
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Delivery Date
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Phone
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="font-semibold">
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="mt-96">
            <Table dense style={{ width: "100%" }}>
              <TableHead
                style={{
                  backgroundColor: "#777",
                }}
              >
                <TableRow>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Qty
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Item #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    List Price
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Unit Price
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white" }}
                  >
                    Extended
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="font-semibold">
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Box>
    </motion.div>
  );
}

export default OrderDetails;
