import { Typography, Button, Icon, Input, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core";
//import { setPremiumItemsSearchText } from "../store/premiumItemsSlice";
import { Link } from "react-router-dom";

function OrderHeader(props) {
  //const dispatch = useDispatch();
  // const searchText = useSelector(
  //   ({ Premiums }) => Premiums.premiumItems.searchText
  // );

  const theme = useTheme();
  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/apps/premiums/products"
            color="inherit"
          >
            <Icon className="text-20">
              {theme.direction === "ltr" ? "arrow_back" : "arrow_forward"}
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">
              Back to Orders
            </span>
          </Typography>
          <div className="flex items-center max-w-full">
            <Icon
              component={motion.span}
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.2 } }}
              className="text-24 md:text-32"
            >
              receipt
            </Icon>
            <Typography
              component={motion.span}
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { delay: 0.2 } }}
              delay={300}
              className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
            >
              Invoice #{props.invoiceNumber}
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OrderHeader;
