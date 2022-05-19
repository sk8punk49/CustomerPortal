import React from "react";
import { Link, useParams } from "react-router-dom";
function Order() {
  const routeParams = useParams();

  return <div>{routeParams.invoiceNumber}</div>;
}

export default Order;
