import FusePageCarded from "@fuse/core/FusePageCarded";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import withReducer from "app/store/withReducer";
import reducer from "../store";

import { Hidden, Icon, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductTable";
import SubCategories from "./SubCategories";
import LandingPage from "./LandingPage";
import CustomerBalances from "./CustomerBalances";
import {
  selectTradeshowMajorCategories,
  getTradeshowMajorCategories,
} from "../store/tradeshowMajorCategoriesSlice";
import {
  selectTradeshowMajorCategoryLineCodes,
  getTradeshowMajorCategoryLineCodes,
} from "../store/tradeshowMajorCategoryLineCodesSlice";
import {
  selectTradeshowItems,
  getTradeshowItems,
} from "../store/tradeshowItemsSlice";



const useStyles = makeStyles({
  layoutRoot: {},
});

function Products() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const pageLayout = useRef(null);
  const [lineCode_groupId, setLineCode_groupId] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const majorCategories = useSelector(selectTradeshowMajorCategories);
  const [selectedMajorCategory, setSelectedMajorCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const getMajorCategory_lineCodes = useSelector(
    selectTradeshowMajorCategoryLineCodes
  );
  const tradeshowItems = useSelector(selectTradeshowItems);
  const [filterMajorCatoryLineCodes, setFilterMajorCatoryLineCodes] = useState(
    []
  );
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    dispatch(getTradeshowMajorCategories());
    dispatch(getTradeshowMajorCategoryLineCodes());
    dispatch(getTradeshowItems());
  }, [dispatch]);



  function tradeshowItemSearch(searchText) {
    if (searchText != "") {
      const filtered_tradeshowItems = [];
      tradeshowItems.map((item) => {
        if (item.partNumber.includes(searchText) || item.description.includes(searchText)) {
          const updatedItem = {
            ...item,
            cartQty: 0,
          };
          filtered_tradeshowItems.push(updatedItem);
          return updatedItem;
        }

        return item;
      });
      //filtered_majorCategory_lineCodes.sort(dynamicSort("description"));
      console.log(filtered_tradeshowItems);
      setTableItems(filtered_tradeshowItems);
    } else {
      setTableItems([]);
    }

  }





  function handleChangeCategory(lineCode_groupId, categoryDescription) {
    setTableItems([]);
    setLineCode_groupId(lineCode_groupId);
    setSelectedMajorCategory(categoryDescription);
    filter_majorCatory_lineCodes(lineCode_groupId);
  }

  function update_selected_subCategory(subcategory) {
    setSelectedSubCategory(subcategory);
  }

  function resetPage() {
    setTableItems([]);
    setLineCode_groupId(0);
  }

  function showTableItems_byLineCode(lineCode) {
    const filtered_tradeshowItems = [];
    tradeshowItems.map((item) => {
      if (item.lineCode === lineCode) {
        const updatedItem = {
          ...item,
          cartQty: 0,
        };
        filtered_tradeshowItems.push(updatedItem);
        return updatedItem;
      }

      return item;
    });
    //filtered_majorCategory_lineCodes.sort(dynamicSort("description"));
    setTableItems(filtered_tradeshowItems);
  }

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  function filter_majorCatory_lineCodes(lineCode_groupId) {
    const filtered_majorCategory_lineCodes = [];
    majorCategory_lineCodes.map((item) => {
      if (item.lineCode_groupId === lineCode_groupId) {
        const updatedItem = {
          ...item
        };
        filtered_majorCategory_lineCodes.push(updatedItem);
        return updatedItem;
      }

      return item;
    });
    filtered_majorCategory_lineCodes.sort(dynamicSort("description"));
    setFilterMajorCatoryLineCodes(filtered_majorCategory_lineCodes);
  }

  var majorCategory_lineCodes = Object.values(getMajorCategory_lineCodes); // Convert Object to Array

  function addTradeshowItem(sellPrice, itemId) {
    increaseCartSubtotal(sellPrice);
    setCartItemCount((prevCount) => prevCount + 1);
  }

  function removeTradeshowItem(sellPrice, itemId) {
    decreaseCartSubtotal(sellPrice);
  }

  function increaseCartSubtotal(sellPrice) {
    setCartSubtotal((prevAmount) => prevAmount + sellPrice);
  }

  function decreaseCartSubtotal(sellPrice) {

    if (cartItemCount > 0) {
      if (cartSubtotal - sellPrice < 0) {
        setCartSubtotal(0);
      } else {
        setCartSubtotal((prevAmount) => prevAmount - sellPrice);
      }

      setCartItemCount((prevCount) => prevCount - 1);
    }

  }

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
            <ProductsHeader tradeshowItemSearch={tradeshowItemSearch} />
          </div>
        </div>
      }
      contentToolbar={
        <CustomerBalances
          cartSubtotal={cartSubtotal}
          cartItemCount={cartItemCount}
        />
      }
      content={
        <div className="w-full p-24">
          {tableItems.length == 0 && lineCode_groupId == 0 ? <LandingPage /> : ""}
          {tableItems.length > 0 ? (
            <ProductsTable
              removeTradeshowItem={removeTradeshowItem}
              addTradeshowItem={addTradeshowItem}
              tableItems={tableItems}
              lineCode_groupId={lineCode_groupId}
              handleChangeCategory={handleChangeCategory}
              selectedSubCategory={selectedSubCategory}
              selectedMajorCategory={selectedMajorCategory}
            />
          ) : (
            lineCode_groupId != 0 && (
              <SubCategories
                resetPage={resetPage}
                update_selected_subCategory={update_selected_subCategory}
                showTableItems_byLineCode={showTableItems_byLineCode}
                filterMajorCatoryLineCodes={filterMajorCatoryLineCodes}
                selectedMajorCategory={selectedMajorCategory}
              />
            )
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
              onClick={() =>
                handleChangeCategory(row.id, row.groupDesc_tradeshow)
              }
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
