import { useState, useEffect } from "react";
import withReducer from "app/store/withReducer";
import reducer from "../store";
import { useDispatch, useSelector } from "react-redux";
import FusePageCarded from "@fuse/core/FusePageCarded";
import ViewCartHeader from "./ViewCartHeader";
import CustomerBalances from "../products/CustomerBalances";
import {
  getPremiumItems,
  selectPremiumItems,
} from "../store/premiumItemsSlice";

import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { TableHead } from "@material-ui/core";
import TableContainer from "@mui/material/TableContainer";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { darken } from "@material-ui/core/styles/colorManipulator";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `radial-gradient(${darken(
      theme.palette.primary.dark,
      0.5
    )} 0%, ${theme.palette.primary.dark} 80%)`,
  },
  divider: {
    backgroundColor: theme.palette.divider,
  },
}));

const premiumItems = {
  items: [
    {
      id: 3138,
      status: "active",
      premiumId: 28,
      partNumber: "ITUNES75",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "75 iTunes Gift Card",
      retail_price: 75,
      cost_price: 75,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: 1,
    },
    {
      id: 3137,
      status: "active",
      premiumId: 28,
      partNumber: "50 Costco Gift Card",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Costco",
      description: "50 Costco Gift Card",
      retail_price: 50,
      cost_price: 50,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: 2,
    },
    {
      id: 3135,
      status: "active",
      premiumId: 28,
      partNumber: "TimeBox",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Lenovo",
      description: "Timebox-EVO Speaker",
      retail_price: 37,
      cost_price: 34,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: 2,
    },
    {
      id: 3136,
      status: "active",
      premiumId: 28,
      partNumber: "Jumbo Joe",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Jumbo Joe 18 Portable Charcoal Grill",
      retail_price: 120.99,
      cost_price: 93.98,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: 3,
    },
    {
      id: 3141,
      status: "active",
      premiumId: 28,
      partNumber: "ITUNES150",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "150 iTunes Gift Card",
      retail_price: 150,
      cost_price: 150,
      premium_value: 4000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: 5,
    },
  ],
};

function ViewCart(props) {
  const [totalCredits, setTotalCredits] = useState(37456);
  const [remainingCredits, setRemainingCredits] = useState(1456);
  const [cartItems, setCartItems] = useState(premiumItems);
  const user = useSelector(({ auth }) => auth.user);
  const today = moment().format("YYYY-MM-DD");


  const tripIncentives_label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };



  console.log("Reloading");
  console.log(cartItems);

  function invoiceGrandTotal() {
    var invoiceTotal = 0;
    cartItems.items.map(
      (row) => (invoiceTotal += row.premium_value * row.cartQty)
    );
    return invoiceTotal;
  }

  function removePremiumItem(id) {

    var array = cartItems.items;
    array.splice(id, 1);
    setCartItems({ items: array });

  }

  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<ViewCartHeader />}
      content={
        <motion.div
          className="w-full m-8 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounceDamping: 0 }}
          >
            <div className="p-24 print:p-0">
              <div className="flex flex-row justify-between items-start">
                <div className="flex flex-grow flex-1">

                  <div className="max-w-200">
                    <Typography
                      className="font-light"
                      variant="h4"
                      color="textSecondary"
                    >
                      SHIP TO:
                    </Typography>
                    <Typography color="textSecondary">
                      {user.data.companyName}
                    </Typography>

                    {user.data.address1 && (
                      <Typography color="textSecondary">
                        {user.data.address1} {user.data.address2}{" "}
                        {user.data.city} {user.data.province}&nbsp;
                        {user.data.postalCode}
                      </Typography>
                    )}
                    {user.data.phoneNumber && (
                      <Typography color="textSecondary">
                        <span>Phone:</span>
                        {user.data.phoneNumber}
                      </Typography>
                    )}

                  </div>

                </div>

                <table>
                  <tbody>
                    <tr>
                      <td className="pb-32">
                        <Typography
                          className="font-light"
                          variant="h4"
                          color="textSecondary"
                        >
                          ORDER#
                        </Typography>
                      </td>
                      <td className="pb-32 px-16">
                        <Typography className="font-light" variant="h4">
                          57481
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <Typography color="textSecondary">ACCOUNT #</Typography>
                      </td>
                      <td className="px-16">
                        <Typography>{user.data.accountNumber}</Typography>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-right">
                        <Typography color="textSecondary">DATE</Typography>
                      </td>
                      <td className="px-16">
                        <Typography>{today}</Typography>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-right">
                        <Typography color="textSecondary">
                          TOTAL REDEEMED
                        </Typography>
                      </td>
                      <td className="px-16">
                        <Typography>${invoiceGrandTotal()}</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-72 print:mt-0">
                <Table className="simple">
                  <TableHead>
                    <TableRow>
                      <TableCell>ITEM</TableCell>
                      <TableCell align="right">UNIT PRICE</TableCell>
                      <TableCell align="right">QUANTITY</TableCell>
                      <TableCell align="right">TOTAL</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.items.map((row, id) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Typography className="mb-8" variant="subtitle1">
                            {row.description}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {row.lineDescription}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          ${row.premium_value}
                        </TableCell>
                        <TableCell align="right">{row.cartQty}</TableCell>
                        <TableCell align="right">
                          ${row.cartQty * row.premium_value}
                        </TableCell>
                        <TableCell align="right">
                          <Icon onClick={() =>
                            removePremiumItem(id)
                          } style={{ color: "#dc3545", cursor: "pointer" }}>clear</Icon>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>


              </div>

              <div className="mt-48 print:mt-0 print:px-16">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img
                      className="w-160 print:w-60"
                      src="assets/images/logos/CustomerPortal.png"
                      alt="logo"
                    />
                  </div>
                </div>

                <Table className="simple">
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          TOTAL EARNED
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          ${totalCredits}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          TOTAL REDEEMED
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          ${invoiceGrandTotal()}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          TOTAL REMAINING
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          ${remainingCredits}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-light"
                          variant="h4"
                          color="textSecondary"
                        >
                          TOTAL
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-light"
                          variant="h4"
                          color="textSecondary"
                        >
                          ${invoiceGrandTotal()}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Typography
                  className="font-large mt-24"
                  variant="h5"
                  color="textSecondary"
                >
                  Thank-you for your business
                </Typography>
                {remainingCredits > 0 ? (
                  <Typography color="textSecondary" className="mb-24">
                    I would like to use my remaining balance of $
                    {remainingCredits} towards the trip incentives program.
                    <Checkbox {...tripIncentives_label} defaultChecked />
                  </Typography>
                ) : (
                  ""
                )}

                <Typography variant="subtitle1" component="div">
                  Comments
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Comments..."
                  multiline
                  minRows={2}
                  maxRows={4}
                />

                <div className="mt-24">
                  <Button
                    className="whitespace-nowrap"
                    variant="contained"
                    fullWidth
                    color="primary"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>          </motion.div>
          <motion.div
            className="w-full m-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          ></motion.div>
        </motion.div>
      }
      innerScroll
    />
  );
}
export default withReducer("Premiums", reducer)(ViewCart);
