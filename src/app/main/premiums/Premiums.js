import { useState } from "react";

import FusePageCarded from "@fuse/core/FusePageCarded";
import PremiumsHeader from "./PremiumsHeader";
import PremiumsBalances from "./PremiumsBalances";

import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";

function Premiums(props) {
  const [cartItemCount, setCartItemCount] = useState(0);
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<PremiumsHeader />}
      contentToolbar={<PremiumsBalances cartCount={cartItemCount} />}
      content={<div className="flex flex-col">
        <Button
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
          onClick={() => setCartItemCount(cartItemCount + 1)}
        >
          Add to Cart
        </Button>
      </div>}
      innerScroll
    />
  );
}

export default Premiums;
