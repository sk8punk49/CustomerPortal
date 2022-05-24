import React from "react";
import { Link, useParams } from "react-router-dom";
import OrderHeader from "./OrderHeader";
import FusePageCarded from "@fuse/core/FusePageCarded";
import OrderDetails from "./OrderDetails";
import withReducer from "app/store/withReducer";
import reducer from "../store";
function Order() {
  const routeParams = useParams();
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<OrderHeader invoiceNumber={routeParams.invoiceNumber} />}
      content={<OrderDetails invoiceNumber={routeParams.invoiceNumber} />}
      innerScroll
    />
  );
}

export default withReducer("OrderHistory", reducer)(Order);
