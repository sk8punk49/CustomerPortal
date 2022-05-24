import * as React from "react";
import FuseLoading from "@fuse/core/FuseLoading";
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
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { selectOrderDetails, getOrderDetails } from "../store/orderDetailsSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function OrderDetails(props) {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const orderDetails = useSelector(selectOrderDetails);
  useEffect(() => {
    dispatch(getOrderDetails()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <FuseLoading />;
  }




  function getLineItems() {
    const details = [];
    orderDetails.map((item) => {
      if (item.invoiceNumber == props.invoiceNumber) {
        const updatedItem = {
          ...item,
        };
        details.push(updatedItem);
        return updatedItem;
      }

      return item;
    });

    return details;
  }
  const lineItems = getLineItems();
  console.log(lineItems);

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <Box>
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
            <div className="p-24">
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
            <div className="p-24">
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
                    style={{ color: "white", padding: "5px" }}
                  >
                    Account #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    PST #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Order #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Clerk
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Shipping Method
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Delivery Date
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Phone
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="font-semibold" >
                <TableRow>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                  <TableCell style={{ padding: "10px" }}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="mt-96">
            <Table style={{ width: "100%" }}>
              <TableHead
                style={{
                  backgroundColor: "#777",
                }}
              >
                <TableRow>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Qty
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Item #
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    List Price
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Unit Price
                  </TableCell>
                  <TableCell
                    className="font-semibold"
                    style={{ color: "white", padding: "5px" }}
                  >
                    Extended
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="font-semibold" >
                {lineItems.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell style={{ padding: "10px" }}>{row.qtyShipped}</TableCell>
                    <TableCell style={{ padding: "10px" }}>{row.partNumber}</TableCell>
                    <TableCell style={{ padding: "10px" }}>Description</TableCell>
                    <TableCell style={{ padding: "10px" }}></TableCell>
                    <TableCell style={{ padding: "10px" }}></TableCell>
                    <TableCell style={{ padding: "10px" }}>${row.extensionPrice}</TableCell>
                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </div>
        </Grid>
        <div style={{ marginTop: "225px" }}><hr style={{ height: "2px", border: "none", color: "#777", backgroundColor: "#777", marginBottom: "5px" }}></hr>
          <div className="flex flex-row pl-12 pt-12">
            <div className="flex flex-col">
              <span style={{ fontSize: "18px" }}><strong>Lordco Parts Ltd</strong></span>
              <span style={{ fontSize: "14px" }}>32885 London Avenue</span>
              <span style={{ fontSize: "14px" }}>Mission, BC V2V 6M7</span>
              <span style={{ fontSize: "14px" }}>(604) 826-7121</span>
              <div style={{ marginTop: "50px", paddingBottom: "15px" }} className="flex flex-row">
                <img src={"/assets/images/clip-art/visa.gif"} style={{ width: "80px", height: "50px", filter: "grayscale(100%)", padding: "5px" }} />
                <img src={"/assets/images/clip-art/mastercard_vrt_pos_92px_2x.png"} style={{ width: "80px", height: "60px", filter: "grayscale(100%)", padding: "5px" }} />
                <img src={"/assets/images/clip-art/interac.png"} style={{ width: "60px", height: "50px", filter: "grayscale(100%)", padding: "5px" }} />
                <img src={"/assets/images/clip-art/discover.png"} style={{ width: "70px", height: "50px", filter: "grayscale(100%)", padding: "5px" }} />
                <img src={"/assets/images/clip-art/150px-American_Express_logo.svg.png"} style={{ width: "60px", height: "50px", filter: "grayscale(100%)", padding: "5px" }} />
              </div>
            </div>
            <div className="flex flex-grow flex-col" style={{ float: "right" }}>
              <Table style={{ width: "100%", float: "right" }}>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ border: "none" }}></TableCell>
                    <TableCell><Typography className="font-semibold">SUBTOTAL</Typography></TableCell>
                    <TableCell align="right"><Typography>$</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none" }}></TableCell>
                    <TableCell><Typography className="font-semibold">GST</Typography></TableCell>
                    <TableCell align="right"><Typography>$</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none" }}></TableCell>
                    <TableCell><Typography className="font-semibold">PST</Typography></TableCell>
                    <TableCell align="right"><Typography>$</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ color: "white", backgroundColor: "#777", border: "none" }}></TableCell>
                    <TableCell colSpan={2} align="right" style={{ color: "white", backgroundColor: "#777" }}>
                      <div style={{ backgroundColor: "white", padding: "15px" }}>
                        <span style={{ fontSize: "18px", color: "black" }}><strong>TOTAL</strong></span>
                        <span style={{ fontSize: "18px", float: "right", color: "black" }}><strong>$53.87</strong></span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

        </div>
      </Box>
    </motion.div>
  );
}

export default OrderDetails;
