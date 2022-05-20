import React from "react";
import FuseLoading from "@fuse/core/FuseLoading";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectOrders, getOrders } from "./store/orderSlice";
import { withRouter } from "react-router-dom";
import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import { motion } from "framer-motion";
import TransactionTypes from "./TransactionTypes";

function OrdersTable(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const orders = useSelector(selectOrders);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  useEffect(() => {
    dispatch(getOrders()).then(() => setLoading(false));
  }, [dispatch]);

  function handleClick(item) {
    let path = "/apps/orderHistory/orders/" + item.invoiceNumber;
    history.push(path);
  }

  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  if (loading) {
    return <FuseLoading />;
  }

  if (orders.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There are no orders!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell>Invoice #</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>PO</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  className="cursor-pointer"
                  hover
                  key={row.id}
                  onClick={(event) => handleClick(row)}
                >
                  <TableCell className="font-semibold ">
                    {row.invoiceNumber}
                  </TableCell>
                  <TableCell>
                    {row.invoiceDate} {row.invoiceTime}
                  </TableCell>
                  <TableCell>
                    <TransactionTypes
                      totalAmount={row.totalAmount}
                      transactionType={row.transactionType}
                    />
                  </TableCell>
                  <TableCell>{row.poNumber}</TableCell>
                  <TableCell>{row.branchId}</TableCell>
                  {row.totalAmount > 0 ? (
                    <TableCell className="font-semibold " align="right">
                      {formatter.format(row.totalAmount)}
                    </TableCell>
                  ) : (
                    <TableCell
                      className="font-semibold "
                      style={{ color: "red" }}
                      align="right"
                    >
                      {formatter.format(row.totalAmount)}
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </FuseScrollbars>
      <TablePagination
        className="flex-shrink-0 border-t-1"
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default OrdersTable;
