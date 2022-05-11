import FusePageCarded from "@fuse/core/FusePageCarded";
import PremiumsHeader from "./PremiumsHeader";
import PremiumsBalances from "./PremiumsBalances";
import PremiumsTable from "./PremiumsTable";
import { getPremiumItems, selectPremiumItems } from "./store/premiumItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
function Premiums(props) {
  const dispatch = useDispatch();

  const premiumItems = useSelector(selectPremiumItems);
  useEffect(() => {
    dispatch(getPremiumItems());
  }, [dispatch]);

  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<PremiumsHeader />}
      contentToolbar={<PremiumsBalances />}
      content={<PremiumsTable />}
      innerScroll
    />
  );
}

export default Premiums;
