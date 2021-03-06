import { useState, useEffect } from "react";
import withReducer from "app/store/withReducer";
import reducer from "../store";
import { useDispatch, useSelector } from "react-redux";
import FusePageCarded from "@fuse/core/FusePageCarded";

import ProductsHeader from "./ProductsHeader";
import CustomerBalances from "./CustomerBalances";
import ProductsTable from "./ProductsTable";
import {
  getPremiumItems,
  selectPremiumItems,
} from "../store/premiumItemsSlice";

function Products(props) {
  const dispatch = useDispatch();
  const premiumItems = useSelector(selectPremiumItems);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [totalCredits, setTotalCredits] = useState(37456);
  const [remainingCredits, setRemainingCredits] = useState(37456);

  useEffect(() => {
    dispatch(getPremiumItems());
  }, [dispatch]);

  function addPremiumItem(premiumPrice, rowId) {
    if (remainingCredits >= premiumPrice) {
      increaseItemCount();
      increaseCartSubtotal(premiumPrice);
      decreaseRemaining(premiumPrice);
    }
  }

  function removePremiumItem(premiumPrice, rowId) {
    if (cartItemCount > 0) {
      decreaseItemCount();
      decreaseCartSubtotal(premiumPrice);
      increaseRemaining(premiumPrice);
    }
  }

  function decreaseItemCount() {
    setCartItemCount((prevCount) => prevCount - 1);
  }
  function increaseItemCount() {
    setCartItemCount((prevCount) => prevCount + 1);
  }

  function increaseCartSubtotal(premiumPrice) {
    setCartSubtotal((prevSubtotal) => prevSubtotal + premiumPrice);
  }

  function decreaseCartSubtotal(premiumPrice) {
    setCartSubtotal((prevSubtotal) => prevSubtotal - premiumPrice);
  }

  function decreaseRemaining(premiumPrice) {
    setRemainingCredits(
      (prevRemainingCredit) => prevRemainingCredit - premiumPrice
    );
  }

  function increaseRemaining(premiumPrice) {
    setRemainingCredits(
      (prevRemainingCredit) => prevRemainingCredit + premiumPrice
    );
  }

  if (_.isEmpty(premiumItems)) {
    return null;
  }

  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<ProductsHeader />}
      contentToolbar={
        <CustomerBalances
          remainingCredits={remainingCredits}
          totalCredits={totalCredits}
          cartSubtotal={cartSubtotal}
          cartItemCount={cartItemCount}
        />
      }
      content={
        <div className="w-full h-400">
          <ProductsTable
            remainingCredits={remainingCredits}
            premiumItems={premiumItems}
            addPremiumItem={addPremiumItem}
            removePremiumItem={removePremiumItem}
          />
        </div>
      }
      innerScroll
    />
  );
}
export default withReducer("Premiums", reducer)(Products);
