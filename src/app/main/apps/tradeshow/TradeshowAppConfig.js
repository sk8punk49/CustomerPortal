import { lazy } from "react";
import { Redirect } from "react-router-dom";

const TradeshowAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "/apps/tradeshow/viewCart",
      component: lazy(() => import("./viewCart/ViewCart")),
    },
    {
      path: "/apps/tradeshow/products",
      component: lazy(() => import("./products/Products")),
    },
    {
      path: "/apps/tradeshow",
      component: () => <Redirect to="/apps/tradeshow/products" />,
    },
  ],
};

export default TradeshowAppConfig;
