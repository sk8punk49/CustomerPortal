import FusePageCarded from "@fuse/core/FusePageCarded";
import OrdersHeader from "./OrdersHeader";

import OrdersTable from "./OrdersTable";

import withReducer from "app/store/withReducer";
import reducer from "../store";

function Orders() {
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<OrdersHeader />}
      content={<OrdersTable />}
      innerScroll
    />
  );
}

export default withReducer("OrderHistory", reducer)(Orders);
