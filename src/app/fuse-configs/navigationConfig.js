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
        id: "example-component",
        title: "Example",
        translate: "EXAMPLE",
        type: "item",
        icon: "whatshot",
        url: "/example",
      },
      {
        id: "home-component",
        title: "Home",
        translate: "HOME",
        type: "item",
        icon: "home",
        url: "/home",
      },
      {
        id: "e-commerce",
        title: "E-Commerce",
        translate: "ECOMMERCE",
        type: "collapse",
        icon: "shopping_cart",
        url: "/apps/e-commerce",
        children: [
          {
            id: "e-commerce-products",
            title: "Products",
            type: "item",
            url: "/apps/e-commerce/products",
            exact: true,
          },
          {
            id: "e-commerce-product-detail",
            title: "Product Detail",
            type: "item",
            url: "/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print",
            exact: true,
          },
          {
            id: "e-commerce-new-product",
            title: "New Product",
            type: "item",
            url: "/apps/e-commerce/products/new",
            exact: true,
          },
          {
            id: "e-commerce-orders",
            title: "Orders",
            type: "item",
            url: "/apps/e-commerce/orders",
            exact: true,
          },
          {
            id: "e-commerce-order-detail",
            title: "Order Detail",
            type: "item",
            url: "/apps/e-commerce/orders/1",
            exact: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
