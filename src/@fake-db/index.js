import "./db/e-commerce-db";
import './db/project-dashboard-db';
import './db/home-db';

import history from "@history";
import mock from "./mock";

mock.onAny().passThrough();

if (module?.hot?.status() === "apply") {
  const { pathname } = history.location;
  history.push("/loading");
  history.push({ pathname });
}
