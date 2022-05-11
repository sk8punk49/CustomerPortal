import FusePageCarded from "@fuse/core/FusePageCarded";
import withReducer from "app/store/withReducer";
import reducer from "../store";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import PremiumsBalances from "app/main/premiums/PremiumsBalances";
import PremiumsHeader from "app/main/premiums/PremiumsHeader";
function Products() {
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<PremiumsHeader />}
      contentToolbar={<PremiumsBalances />}
      content={<ProductsTable />}
      innerScroll
    />
  );
}

export default withReducer("eCommerceApp", reducer)(Products);
