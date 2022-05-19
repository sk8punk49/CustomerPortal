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
        id: "tradeshow",
        title: "Tradeshow",
        icon: "build",
        type: "item",
        url: "/apps/tradeshow/products",
        exact: true,
      },
      {
        id: "premiums",
        title: "Premiums",
        type: "collapse",
        icon: "card_giftcard",
        url: "/apps/premiums",
        children: [
          {
            id: "premiums-products",
            title: "Premium Ordering",
            type: "item",
            url: "/apps/premiums/products",
            exact: true,
          },
          {
            id: "premiums-view-cart",
            title: "View Cart",
            type: "item",
            url: "/apps/premiums/viewCart",
            exact: true,
          },
        ],
      },

      {
        id: "customer-orders",
        title: "Orders",
        type: "item",
        url: "/apps/e-commerce/orders",
        exact: true,
      },
    ],
  },
];

export default navigationConfig;
