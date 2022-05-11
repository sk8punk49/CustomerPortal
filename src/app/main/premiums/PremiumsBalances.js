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
  return (
    <motion.div
      className="w-full m-8 text-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography className="font-medium">Items in Cart: </Typography>
          <Typography className="subtitle1">{props.cartCount}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="font-medium">Cart Subtotal:</Typography>
          <Typography className="subtitle1">$0.00</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="font-medium">Credit:</Typography>
          <Typography className="subtitle1">$0.00</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="font-medium">Total:</Typography>
          <Typography className="subtitle1">$2,762.34</Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default PremiumsBalances;
