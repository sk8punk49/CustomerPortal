import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function OrderDetails(props) {
  const user = useSelector(({ auth }) => auth.user);
  return (
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
            <Typography className="text-13 font-semibold" color="textSecondary">
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
            <Typography className="text-13 font-semibold" color="textSecondary">
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
    </Box>
  );
}

export default OrderDetails;
