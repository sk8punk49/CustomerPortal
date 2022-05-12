import { lazy } from "react";
import { Redirect } from "react-router-dom";

const PremiumsAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
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
