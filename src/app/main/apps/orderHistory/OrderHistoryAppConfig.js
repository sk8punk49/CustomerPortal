import { lazy } from "react";
import { Redirect } from "react-router-dom";

const OrderHistoryAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "/apps/orderHistory/orders/:invoiceNumber",
      component: lazy(() => import("./order/Order")),
    },
    {
      path: "/apps/orderHistory/orders",
      component: lazy(() => import("./orders/Orders")),
    },
    {
      path: "/apps/orderHistory",
      component: () => <Redirect to="/apps/orderHistory/orders" />,
    },
  ],
};

export default OrderHistoryAppConfig;
