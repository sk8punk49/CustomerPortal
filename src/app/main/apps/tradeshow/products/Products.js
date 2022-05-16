import FusePageCarded from "@fuse/core/FusePageCarded";
import Hidden from "@material-ui/core/Hidden";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";

import ProductsHeader from "./ProductsHeader";
import CustomerBalances from "./CustomerBalances";
import {
  selectTradeshowMajorCategories,
  getTradeshowMajorCategories,
} from "../store/tradeshowMajorCategoriesSlice";
import {
  selectTradeshowMajorCategoryLineCodes,
  getTradeshowMajorCategoryLineCodes,
} from "../store/tradeshowMajorCategoryLineCodesSlice";
import withReducer from "app/store/withReducer";
import reducer from "../store";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  layoutRoot: {},
});

function Products() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const pageLayout = useRef(null);
  const [tabValue, setTabValue] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const majorCategories = useSelector(selectTradeshowMajorCategories);
  const getMajorCategory_lineCodes = useSelector(
    selectTradeshowMajorCategoryLineCodes
  );
  const [filterMajorCatoryLineCodes, setFilterMajorCatoryLineCodes] = useState(
    []
  );

  useEffect(() => {
    dispatch(getTradeshowMajorCategories());
    dispatch(getTradeshowMajorCategoryLineCodes());
  }, [dispatch]);

  function handleChangeCategory(value) {
    setTabValue(value);
    filter_majorCatory_lineCodes(value);
  }

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  function filter_majorCatory_lineCodes(lineCode_groupId) {
    const filtered_majorCategory_lineCodes = [];
    majorCategory_lineCodes.map((item) => {
      if (item.lineGroup === lineCode_groupId) {
        const updatedItem = {
          ...item,
          // test: "WORKS!!##$",
        };
        filtered_majorCategory_lineCodes.push(updatedItem);
        return updatedItem;
      }

      return item;
    });
    filtered_majorCategory_lineCodes.sort(dynamicSort("description"));
    setFilterMajorCatoryLineCodes(filtered_majorCategory_lineCodes);
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  var majorCategory_lineCodes = Object.values(getMajorCategory_lineCodes); // Convert Object to Array

  return (
    <FusePageCarded
      classes={{
        root: classes.layoutRoot,
      }}
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center py-24">
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                aria-label="open left sidebar"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
          </div>
          <ProductsHeader />
        </div>
      }
      contentToolbar={
        <CustomerBalances
          cartSubtotal={cartSubtotal}
          cartItemCount={cartItemCount}
        />
      }
      content={
        <div className="p-24">
          {tabValue != 0 && (
            <div>
              <Typography variant="subtitle1">Sub Categories</Typography>
              <motion.div
                className="flex flex-wrap"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filterMajorCatoryLineCodes.map((row) => (
                  <motion.div
                    key={row.id}
                    variants={item}
                    className="flex sm:w-1/3 w-full p-12"
                  >
                    <ListItem
                      className="text-center"
                      style={{ border: "2px solid #006294" }}
                      button
                    >
                      <ListItemText primary={row.description} />
                    </ListItem>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      }
      leftSidebarHeader={<div className="p-24"></div>}
      leftSidebarContent={
        <div className="p-24">
          <h4>Categories</h4>
          <br />

          {majorCategories.map((row) => (
            <List
              key={row.id}
              dense
              onClick={() => handleChangeCategory(row.id)}
            >
              <ListItem button>
                <ListItemText primary={row.groupDesc_tradeshow} />
              </ListItem>
            </List>
          ))}
        </div>
      }
      ref={pageLayout}
    />
  );
}

export default withReducer("Tradeshow", reducer)(Products);
