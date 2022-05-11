import i18next from "i18next";
import en from "./navigation-i18n/en";

i18next.addResourceBundle("en", "navigation", en);

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    translate: "APPLICATIONS",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "home",
        title: "Home",
        type: "item",
        url: "/home",
      },
      {
        id: "premiums",
        title: "Premiums",
        type: "item",
        url: "/premiums",
      },

      {
        id: "customer-orders",
        title: "Orders",
        type: "item",
        url: "/apps/e-commerce/orders",
        exact: true,
      },

      {
        id: "e-commerce-order-detail",
        title: "Order Details",
        type: "item",
        url: "/apps/e-commerce/orders/1",
        exact: true,
      },
    ],
  },
];

export default navigationConfig;
