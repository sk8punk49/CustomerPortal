import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMainTheme } from "app/store/fuse/settingsSlice";

function PremiumsBalances(props) {
  const mainTheme = useSelector(selectMainTheme);
  function currencyFormat(num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <motion.div
      className="w-full m-8 text-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography className="font-medium">Items in Cart: </Typography>
          <Typography className="subtitle1">{props.cartItemCount}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className="font-medium">Cart Subtotal:</Typography>
          <Typography className="subtitle1">
            {currencyFormat(props.cartSubtotal)}
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default PremiumsBalances;
