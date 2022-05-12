import { useState, useEffect } from "react";
import withReducer from "app/store/withReducer";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import FusePageCarded from "@fuse/core/FusePageCarded";
import PremiumsHeader from "./PremiumsHeader";
import PremiumsBalances from "./PremiumsBalances";
import PremiumsTable from "./PremiumsTable";

import { getPremiumItems, selectPremiumItems } from "./store/premiumItemsSlice";

function Premiums(props) {
  const dispatch = useDispatch();
  const premiumItems = useSelector(selectPremiumItems);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [totalCredits, setTotalCredits] = useState(37456);
  const [remainingCredits, setRemainingCredits] = useState(37456);

  useEffect(() => {
    dispatch(getPremiumItems());
  }, [dispatch]);

  function addPremiumItem(premiumPrice) {
    if (remainingCredits >= premiumPrice) {
      increaseItemCount();
      updateCartSubtotal(premiumPrice);
      decreaseRemaining(premiumPrice);
    }
  }

  function increaseItemCount() {
    setCartItemCount((prevCount) => prevCount + 1);
  }

  function updateCartSubtotal(premiumPrice) {
    setCartSubtotal((prevSubtotal) => prevSubtotal + premiumPrice);
  }

  function decreaseRemaining(premiumPrice) {
    setRemainingCredits(
      (prevRemainingCredit) => prevRemainingCredit - premiumPrice
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
      header={<PremiumsHeader />}
      contentToolbar={
        <PremiumsBalances
          remainingCredits={remainingCredits}
          totalCredits={totalCredits}
          cartSubtotal={cartSubtotal}
          cartItemCount={cartItemCount}
        />
      }
      content={
        <div className="h-400">
          <PremiumsTable
            remainingCredits={remainingCredits}
            premiumItems={premiumItems}
            updateBalances={addPremiumItem}
          />
        </div>
      }
      innerScroll
    />
  );
}
export default withReducer("Premiums", reducer)(Premiums);
