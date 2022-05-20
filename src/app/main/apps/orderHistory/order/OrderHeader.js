import { Typography, Button, Icon, Input, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectMainTheme } from "app/store/fuse/settingsSlice";
//import { setPremiumItemsSearchText } from "../store/premiumItemsSlice";

function OrderHeader(props) {
  //const dispatch = useDispatch();
  // const searchText = useSelector(
  //   ({ Premiums }) => Premiums.premiumItems.searchText
  // );
  const mainTheme = useSelector(selectMainTheme);

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
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

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      ></motion.div>
    </div>
  );
}

export default OrderHeader;
