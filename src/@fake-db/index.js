import "./db/e-commerce-db";
import "./db/home-db";
import "./db/premiums-db";
import "./db/tradeshow-db";
import "./db/orderHistory-db";

import history from "@history";
import mock from "./mock";

mock.onAny().passThrough();

if (module?.hot?.status() === "apply") {
  const { pathname } = history.location;
  history.push("/loading");
  history.push({ pathname });
}
