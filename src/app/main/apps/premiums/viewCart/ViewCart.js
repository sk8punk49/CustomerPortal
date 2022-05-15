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

function ViewCart(props) {
  const [cartItemCount, setCartItemCount] = useState(4);
  const [totalCredits, setTotalCredits] = useState(9456);
  const [remainingCredits, setRemainingCredits] = useState(1456);
  const [cartSubtotal, setCartSubtotal] = useState(8000);
  const dispatch = useDispatch();
  const premiumItems = useSelector(selectPremiumItems);
  const [randomCartItems, setRandomCartItems] = useState([]);
  useEffect(() => {
    dispatch(getPremiumItems());
  }, [dispatch]);

  useEffect(() => {
    setRandomCartItems(premiumItems);
  });

  function deleteItem(itemRow) {
    for (var i = 0; i < randomCartItems.length; i++) {
      if (randomCartItems[i].id == itemRow.id) {
        randomCartItems.splice(i, 1);
      }
    }
  }

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
                Qty
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
      contentToolbar={
        <CustomerBalances
          remainingCredits={remainingCredits}
          totalCredits={totalCredits}
          cartSubtotal={cartSubtotal}
          cartItemCount={cartItemCount}
        />
      }
      content={
        <motion.div
          className="w-full m-8 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <CardContent>
            {viewCartTable}
            <motion.div
              className="w-full m-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            >
              <Typography className="mt-24" variant="subtitle1" component="div">
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
            </motion.div>
          </CardContent>
        </motion.div>
      }
      innerScroll
    />
  );
}
export default withReducer("Premiums", reducer)(ViewCart);
