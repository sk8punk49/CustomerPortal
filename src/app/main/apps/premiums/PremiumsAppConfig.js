import { lazy } from "react";
import { Redirect } from "react-router-dom";

const PremiumsAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "/apps/premiums/viewCart",
      component: lazy(() => import("./viewCart/ViewCart")),
    },
    {
      path: "/apps/premiums/products",
      component: lazy(() => import("./products/Products")),
    },
    {
      path: "/apps/premiums",
      component: () => <Redirect to="/apps/premiums/products" />,
    },
  ],
};

export default PremiumsAppConfig;
