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

function ViewCart(props) {
  const [cartItemCount, setCartItemCount] = useState(4);
  const [totalCredits, setTotalCredits] = useState(9456);
  const [remainingCredits, setRemainingCredits] = useState(1456);
  const [cartSubtotal, setCartSubtotal] = useState(8000);
  const dispatch = useDispatch();
  const premiumItems = useSelector(selectPremiumItems);
  const [randomCartItems, setRandomCartItems] = useState([]);
  const user = useSelector(({ auth }) => auth.user);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPremiumItems());
  }, [dispatch]);

  useEffect(() => {
    // var newRandonItems = premiumItems.splice(Math.floor(Math.random() * 1), 4);
    // console.log(newRandonItems);
    // console.log(premiumItems);
    setRandomCartItems(premiumItems);
  });

  function deleteItem(itemRow) {
    for (var i = 0; i < randomCartItems.length; i++) {
      if (randomCartItems[i].id == itemRow.id) {
        randomCartItems.splice(i, 1);
      }
    }
  }

  const invoice = {
    from: {
      name: "Lordco Auto Parts",
      address: "1525 Kingsway Ave, Port Coquitlam, BC V3C 1S2",
      phone: "(604) 467-1581",
      email: "support@lordco.com",
    },
  };

  const service = {};

  const viewCartTable = (
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
          {randomCartItems.map((row) => (
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
                <Button
                  onClick={() => deleteItem(row)}
                  className="whitespace-nowrap"
                  variant="contained"
                >
                  <span className="hidden sm:flex">
                    <Icon style={{ color: "red" }}>delete</Icon>
                    &nbsp;Remove
                  </span>
                  <span className="flex sm:hidden">
                    <Icon style={{ color: "red" }}>delete</Icon>
                  </span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

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
            <div className="mx-auto w-xl print:w-full print:shadow-none rounded-none sm:rounded-20">
              <div className="p-88 print:p-0">
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-80 print:mb-0">
                      <img
                        className="w-160 print:w-60"
                        src="assets/images/logos/lordco-logo.png"
                        alt="logo"
                      />

                      <div
                        className={clsx(
                          classes.divider,
                          "mx-48 w-px h-128 print:mx-16"
                        )}
                      />

                      <div className="max-w-160">
                        <Typography color="textSecondary">
                          {invoice.from.name}
                        </Typography>

                        {invoice.from.address && (
                          <Typography color="textSecondary">
                            {invoice.from.address}
                          </Typography>
                        )}
                        {invoice.from.phone && (
                          <Typography color="textSecondary">
                            <span>Phone:</span>
                            {invoice.from.phone}
                          </Typography>
                        )}
                        {invoice.from.email && (
                          <Typography color="textSecondary">
                            <span>Email:</span>
                            {invoice.from.email}
                          </Typography>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex justify-end items-center w-160 print:w-60">
                        <Typography
                          variant="h5"
                          className="font-light print:text-16"
                          color="textSecondary"
                        >
                          SHIP TO
                        </Typography>
                      </div>

                      <div
                        className={clsx(
                          classes.divider,
                          "mx-48 w-px h-128 print:mx-16"
                        )}
                      />

                      <div className="max-w-160">
                        <Typography color="textSecondary">
                          {user.data.companyName}
                        </Typography>

                        {user.data.address1 && (
                          <Typography color="textSecondary">
                            {user.data.address1} {user.data.address2}
                          </Typography>
                        )}
                        {user.data.phoneNumber && (
                          <Typography color="textSecondary">
                            <span>Phone:</span>
                            {user.data.phoneNumber}
                          </Typography>
                        )}
                        {user.data.email && (
                          <Typography color="textSecondary">
                            <span>Email:</span>
                            {user.data.email}
                          </Typography>
                        )}
                      </div>
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
                            RECEIPT
                          </Typography>
                        </td>
                        <td className="pb-32 px-16">
                          <Typography className="font-light" variant="h4">
                            {invoice.number}
                          </Typography>
                        </td>
                      </tr>

                      <tr>
                        <td className="text-right">
                          <Typography color="textSecondary">DATE</Typography>
                        </td>
                        <td className="px-16">
                          <Typography>{invoice.date}</Typography>
                        </td>
                      </tr>

                      <tr>
                        <td className="text-right">
                          <Typography color="textSecondary">
                            TOTAL REDEEMED
                          </Typography>
                        </td>
                        <td className="px-16">
                          <Typography></Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-96 print:mt-0">
                  <Table className="simple">
                    <TableHead>
                      <TableRow>
                        <TableCell>SERVICE</TableCell>
                        <TableCell>UNIT</TableCell>
                        <TableCell align="right">UNIT PRICE</TableCell>
                        <TableCell align="right">QUANTITY</TableCell>
                        <TableCell align="right">TOTAL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key={service.id}>
                        <TableCell>
                          <Typography className="mb-8" variant="subtitle1">
                            {service.title}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {service.detail}
                          </Typography>
                        </TableCell>
                        <TableCell>{service.unit}</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{service.quantity}</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <Table className="simple">
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography
                            className="font-normal"
                            variant="subtitle1"
                            color="textSecondary"
                          >
                            SUBTOTAL
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            className="font-normal"
                            variant="subtitle1"
                            color="textSecondary"
                          ></Typography>
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
                          ></Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-96 print:mt-0 print:px-16">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <img
                        className="w-160 print:w-60"
                        src="assets/images/logos/CustomerPortal.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <Typography
                    className="font-large mb-24"
                    variant="h5"
                    color="textSecondary"
                  >
                    Thank-you for your business
                  </Typography>
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
              </div>
            </div>
          </motion.div>
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
