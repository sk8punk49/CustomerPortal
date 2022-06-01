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
        icon: "home",
        url: "/home",
      },
      {
        id: "tradeshow",
        title: "Tradeshow",
        type: "collapse",
        url: "/apps/tradeshow/products",
        children: [
          {
            id: "tradeshow-products",
            title: "Tradeshow Ordering",
            type: "item",
            icon: "build",
            url: "/apps/tradeshow/products",
            exact: true,
          },
          {
            id: "tradeshow-view-cart",
            title: "View Cart",
            type: "item",
            icon: "shopping_cart",
            url: "/apps/tradeshow/viewCart",
            exact: true,
          },
        ],
      },
      {
        id: "premiums",
        title: "Premiums",
        type: "collapse",
        url: "/apps/premiums",
        children: [
          {
            id: "premiums-products",
            title: "Premium Ordering",
            type: "item",
            icon: "card_giftcard",
            url: "/apps/premiums/products",
            exact: true,
          },
          {
            id: "premiums-view-cart",
            title: "View Cart",
            type: "item",
            icon: "shopping_cart",
            url: "/apps/premiums/viewCart",
            exact: true,
          },
        ],
      },
      {
        id: "customer-orders",
        title: "Order History",
        type: "item",
        url: "/apps/orderHistory/orders",
        icon: "history",
        exact: true,
      },
    ],
  },
];

export default navigationConfig;
