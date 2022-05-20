import clsx from "clsx";

function TransactionTypes(props) {
  if (props.transactionType == "tradeshow") {
    return (
      <div
        className={clsx(
          "inline text-11 font-semibold py-4 px-12 rounded-full truncate bg-blue text-white"
        )}
      >
        TRADESHOW
      </div>
    );
  } else if (props.totalAmount < 0) {
    return (
      <div
        className={clsx(
          "inline text-11 font-semibold py-4 px-12 rounded-full truncate bg-red text-white"
        )}
      >
        CREDIT
      </div>
    );
  } else {
    return (
      <div
        className={clsx(
          "inline text-11 font-semibold py-4 px-12 rounded-full truncate bg-grey text-white"
        )}
      >
        INVOICE
      </div>
    );
  }
}

export default TransactionTypes;
