import { useState, useEffect } from "react";
import withReducer from "app/store/withReducer";
import reducer from "../store";
import { useDispatch, useSelector } from "react-redux";
import FusePageCarded from "@fuse/core/FusePageCarded";
import ViewCartHeader from "./ViewCartHeader";


import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { Typography, TableContainer, CardContent, TableHead, TableFooter } from "@material-ui/core";

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

const tradeshowItems = {
  items: [
    {
      "description": "FRESH BREEZE",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56864,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "CF10134",
      "cost": 16.03,
      "sell": 17.99,
      "qty": 2,
      "extended": 35.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:03:07",
      "promoId": ""
    },
    {
      "description": "FRESH BREEZE",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56865,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "CF10285",
      "cost": 16.09,
      "sell": 17.99,
      "qty": 2,
      "extended": 35.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:03:18",
      "promoId": ""
    },
    {
      "description": "HI FLOW FILT",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56863,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "CH11665",
      "cost": 4.2,
      "sell": 4.69,
      "qty": 6,
      "extended": 28.14,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:03:02",
      "promoId": ""
    },
    {
      "description": "OIL FILTER",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56862,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "CH9972",
      "cost": 3.16,
      "sell": 3.49,
      "qty": 6,
      "extended": 20.94,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:02:55",
      "promoId": ""
    },
    {
      "description": "SPIN-ON OIL",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56861,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "PH10060",
      "cost": 3.53,
      "sell": 3.89,
      "qty": 6,
      "extended": 23.34,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:02:42",
      "promoId": ""
    },
    {
      "description": "SPIN-ON OIL",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56857,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "PH3614",
      "cost": 2.66,
      "sell": 2.89,
      "qty": 6,
      "extended": 17.34,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:02:11",
      "promoId": ""
    },
    {
      "description": "SPIN-ON OIL",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56859,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "PH6607",
      "cost": 3.53,
      "sell": 3.89,
      "qty": 12,
      "extended": 46.68,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:02:24",
      "promoId": ""
    },
    {
      "description": "SPIN-ON OIL",
      "ap_lineCode": "FRM",
      "id": 7717,
      "detailId": 56860,
      "orderId": 7717,
      "lineCode": "063",
      "partNumber": "PH7317",
      "cost": 2.66,
      "sell": 2.89,
      "qty": 12,
      "extended": 34.68,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:02:34",
      "promoId": ""
    },
    {
      "description": "75BLACK TIE",
      "ap_lineCode": "113",
      "id": 7717,
      "detailId": 56881,
      "orderId": 7717,
      "lineCode": "113",
      "partNumber": "70660C",
      "cost": 3.06,
      "sell": 3.69,
      "qty": 1,
      "extended": 3.69,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:07:26",
      "promoId": ""
    },
    {
      "description": "11BLACK TIE",
      "ap_lineCode": "113",
      "id": 7717,
      "detailId": 56882,
      "orderId": 7717,
      "lineCode": "113",
      "partNumber": "70670C",
      "cost": 5.53,
      "sell": 6.69,
      "qty": 1,
      "extended": 6.69,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:07:39",
      "promoId": ""
    },
    {
      "description": "OE TYPE OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56867,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "21066",
      "cost": 51.47,
      "sell": 59.99,
      "qty": 1,
      "extended": 59.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:36",
      "promoId": ""
    },
    {
      "description": "OE TYPE OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56868,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "21546",
      "cost": 42.77,
      "sell": 58.99,
      "qty": 1,
      "extended": 58.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:39",
      "promoId": ""
    },
    {
      "description": "OE TYPE OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56869,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "22500",
      "cost": 33.54,
      "sell": 38.99,
      "qty": 1,
      "extended": 38.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:41",
      "promoId": ""
    },
    {
      "description": "OE TYPE OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56870,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "22524",
      "cost": 42.57,
      "sell": 52.99,
      "qty": 1,
      "extended": 52.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:43",
      "promoId": ""
    },
    {
      "description": "OE TYPE OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56871,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "23159",
      "cost": 34.08,
      "sell": 47.99,
      "qty": 1,
      "extended": 47.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:45",
      "promoId": ""
    },
    {
      "description": "OE TYPE WIDEBAND OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56872,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "24300",
      "cost": 183.69,
      "sell": 191.99,
      "qty": 1,
      "extended": 191.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:49",
      "promoId": ""
    },
    {
      "description": "OE TYPE WIDEBAND OXYGEN SENSOR",
      "ap_lineCode": "NGK",
      "id": 7717,
      "detailId": 56873,
      "orderId": 7717,
      "lineCode": "11O",
      "partNumber": "24302",
      "cost": 109.95,
      "sell": 126.99,
      "qty": 1,
      "extended": 126.99,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:05:52",
      "promoId": ""
    },
    {
      "description": "BULK ROTOR",
      "ap_lineCode": "66R",
      "id": 7717,
      "detailId": 56866,
      "orderId": 7717,
      "lineCode": "66R",
      "partNumber": "31270",
      "cost": 19.23,
      "sell": 24.99,
      "qty": 2,
      "extended": 49.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:04:36",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56847,
      "orderId": 7717,
      "lineCode": "67V",
      "partNumber": "18A1324AC",
      "cost": 44.3,
      "sell": 51.99,
      "qty": 2,
      "extended": 103.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 01:59:14",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56848,
      "orderId": 7717,
      "lineCode": "67V",
      "partNumber": "18A1428AC",
      "cost": 47.75,
      "sell": 55.99,
      "qty": 2,
      "extended": 111.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 01:59:17",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56850,
      "orderId": 7717,
      "lineCode": "67V",
      "partNumber": "18A1707AC",
      "cost": 34,
      "sell": 39.99,
      "qty": 2,
      "extended": 79.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 01:59:32",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56851,
      "orderId": 7717,
      "lineCode": "67V",
      "partNumber": "18A2461AC",
      "cost": 60.64,
      "sell": 69.99,
      "qty": 2,
      "extended": 139.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 01:59:36",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56852,
      "orderId": 7717,
      "lineCode": "67Y",
      "partNumber": "18A1324",
      "cost": 51.47,
      "sell": 59.99,
      "qty": 2,
      "extended": 119.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:00:05",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56853,
      "orderId": 7717,
      "lineCode": "67Y",
      "partNumber": "18A1705",
      "cost": 68.96,
      "sell": 79.99,
      "qty": 2,
      "extended": 159.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:00:11",
      "promoId": ""
    },
    {
      "description": "BRAKE ROTOR",
      "ap_lineCode": "ACD",
      "id": 7717,
      "detailId": 56854,
      "orderId": 7717,
      "lineCode": "67Y",
      "partNumber": "18A2461",
      "cost": 67.18,
      "sell": 77.99,
      "qty": 2,
      "extended": 155.98,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:00:14",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56874,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "9003B1",
      "cost": 3.26,
      "sell": 4.09,
      "qty": 2,
      "extended": 8.18,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:31",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56875,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "9005B1",
      "cost": 2.61,
      "sell": 3.29,
      "qty": 2,
      "extended": 6.58,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:33",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56876,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "9006B1",
      "cost": 2.61,
      "sell": 3.29,
      "qty": 2,
      "extended": 6.58,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:37",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56877,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "9007B1",
      "cost": 2.65,
      "sell": 3.29,
      "qty": 2,
      "extended": 6.58,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:39",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56878,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "9008B1",
      "cost": 8.36,
      "sell": 10.29,
      "qty": 2,
      "extended": 20.58,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:46",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56879,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "H11B1",
      "cost": 4.61,
      "sell": 5.69,
      "qty": 2,
      "extended": 11.38,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:50",
      "promoId": ""
    },
    {
      "description": "FORWARD LIGHTING-STANDARD / BLISTER",
      "ap_lineCode": "PHI",
      "id": 7717,
      "detailId": 56880,
      "orderId": 7717,
      "lineCode": "PHI",
      "partNumber": "H7B1",
      "cost": 3.47,
      "sell": 4.29,
      "qty": 2,
      "extended": 8.58,
      "gst": 0,
      "pst": 0,
      "hst": 0,
      "createDate": "",
      "modDate": "2022-04-07 02:06:58",
      "promoId": ""
    }
  ]
};

function ViewCart(props) {
  const [totalCredits, setTotalCredits] = useState(37456);
  const [remainingCredits, setRemainingCredits] = useState(1456);
  const [cartItems, setCartItems] = useState(tradeshowItems);
  const user = useSelector(({ auth }) => auth.user);
  const today = moment().format("YYYY-MM-DD");


  function invoiceGrandTotal() {
    var invoiceTotal = 0;
    cartItems.items.map(
      (row) => (invoiceTotal += row.premium_value * row.cartQty)
    );
    return invoiceTotal;
  }

  function removeTradeshowItem(id) {

    var array = cartItems.items;
    array.splice(id, 1);
    setCartItems({ items: array });

  }

  console.log(tradeshowItems);

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


                  </tbody>
                </table>
              </div>

              <div className="mt-60 print:mt-0 h-400 overflow-auto">
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

                    {tradeshowItems.items.map((row, id) => (
                      <TableRow key={row.detailId}>
                        <TableCell>
                          <Typography className="mb-8" variant="subtitle1">
                            {row.description}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {row.ap_lineCode} {row.partNumber}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          ${row.sell}
                        </TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell align="right">
                          ${row.extended}
                        </TableCell>
                        <TableCell align="right">
                          <Icon onClick={() =>
                            removeTradeshowItem(id)
                          } style={{ color: "#dc3545", cursor: "pointer" }}>clear</Icon>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>

                  </TableFooter>
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

                <Typography
                  className="font-large mt-24"
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
export default withReducer("Tradeshow", reducer)(ViewCart);
