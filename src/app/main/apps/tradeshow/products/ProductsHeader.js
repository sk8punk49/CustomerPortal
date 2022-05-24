import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMainTheme } from "app/store/fuse/settingsSlice";
import { setTradeshowItemsSearchText } from "../store/tradeshowItemsSlice";

function ProductsHeader(props) {
  const dispatch = useDispatch();
  const mainTheme = useSelector(selectMainTheme);

  const getSearchInput = (event) => {
    if (event.key === "Enter") {
      const searchInput = dispatch(setTradeshowItemsSearchText(event)).payload;
      props.tradeshowItemSearch(searchInput);
      console.log(searchInput);
    }
  };

  return (
    <div className="flex flex-1 w-full items-center justify-between mt-24">
      <div className="flex items-center">
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          Tradeshow
        </Typography>
      </div>

      <div className="flex flex-1 items-center justify-center px-12">
        <ThemeProvider theme={mainTheme}>
          <Paper
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow"
          >
            <Icon color="action">search</Icon>
            <Input
              placeholder="Search"
              className="flex flex-1 mx-8"
              disableUnderline
              fullWidth
              onKeyDown={(ev) => getSearchInput(ev)}
              inputProps={{
                "aria-label": "Search",
              }}
            />
          </Paper>
        </ThemeProvider>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          component={Link}
          to="/apps/tradeshow/viewCart"
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
        >
          <span className="hidden sm:flex">
            <Icon>shopping_cart</Icon>&nbsp;Checkout
          </span>
          <span className="flex sm:hidden">
            <Icon>shopping_cart</Icon>
          </span>
        </Button>
      </motion.div>
    </div>
  );
}

export default ProductsHeader;
