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
        id: "e-commerce",
        title: "Product Ordering",
        translate: "Product Ordering",
        type: "collapse",
        icon: "shopping_cart",
        url: "/apps/e-commerce",
        children: [
          {
            id: "e-commerce-products",
            title: "Tradeshow",
            type: "item",
            url: "/apps/e-commerce/products",
            exact: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
