import FusePageCarded from "@fuse/core/FusePageCarded";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import withReducer from "app/store/withReducer";
import reducer from "../store";

import { Hidden, Icon, IconButton } from "@material-ui/core";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductTable";
import SubCategories from "./SubCategories";
import LandingPage from "./LandingPage";
import CustomerBalances from "./CustomerBalances";
import {
  selectLineCodeMapping,
  getLineCodeMapping,
} from "../store/tradeshowLineCodeMappingSlice";
import {
  selectTradeshowMajorCategoryLineCodes,
  getTradeshowMajorCategoryLineCodes,
} from "../store/tradeshowMajorCategoryLineCodesSlice";
import {
  selectTradeshowItems,
  getTradeshowItems,
} from "../store/tradeshowItemsSlice";

import LeftSideNav from "./LeftSideNav";

const useStyles = makeStyles({
  layoutRoot: {},
});

function Products() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const pageLayout = useRef(null);
  const [rangeCode, setRangeCode] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const lineCode_mapping = useSelector(selectLineCodeMapping);

  const [selectedRangeCategory, setSelectedRangeCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const getMajorCategory_lineCodes = useSelector(
    selectTradeshowMajorCategoryLineCodes
  );
  const tradeshowItems = useSelector(selectTradeshowItems);
  const [filterMajorCatoryGroupCodes, setFilterMajorCatoryLineCodes] = useState(
    []
  );
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    dispatch(getLineCodeMapping());
    dispatch(getTradeshowMajorCategoryLineCodes());
    dispatch(getTradeshowItems());
  }, [dispatch]);

  function tradeshowItemSearch(searchText) {
    setSelectedRangeCategory("");
    setRangeCode(0);
    if (searchText != "") {
      const filtered_tradeshowItems = [];
      tradeshowItems.map((item) => {
        if (
          item.partNumber.toLowerCase().includes(searchText.toLowerCase()) ||
          item.description.toLowerCase().includes(searchText.toLowerCase())
        ) {
          const updatedItem = {
            ...item,
            cartQty: 0,
          };
          filtered_tradeshowItems.push(updatedItem);
          return updatedItem;
        }

        return item;
      });

      setTableItems(filtered_tradeshowItems);
    } else {
      setTableItems([]);
    }
  }

  function handleChangeCategory(rangeCode, description) {
    setTableItems([]);
    setRangeCode(rangeCode);
    setSelectedRangeCategory(description);
    filter_rangeCode_categories(rangeCode);
  }

  function update_selected_subCategory(subcategory) {
    setSelectedSubCategory(subcategory);
  }

  function resetPage() {
    setTableItems([]);
    setRangeCode(0);
  }

  function showTableItems_byGroupCode(groupCode) {
    const filtered_tradeshowItems = [];
    tradeshowItems.map((item) => {
      if (item.groupCode === groupCode) {
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

  function filter_rangeCode_categories(rangeCode) {
    const filtered_majorCategory_lineCodes = [];
    majorCategory_lineCodes.map((item) => {
      if (item.lineCode_groupId === rangeCode) {
        const updatedItem = {
          ...item,
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
    increaseRowQty(itemId);
  }

  function increaseRowQty(rowId) {
    const newItemList = tableItems.map((item) => {
      if (item.id === rowId) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        if (updatedItem.cartQty == "") {
          updatedItem.cartQty = 1;
        } else {
          updatedItem.cartQty += 1;
        }
        return updatedItem;
      }

      return item;
    });

    setTableItems(newItemList);
  }

  function removeTradeshowItem(sellPrice, itemId) {
    decreaseCartSubtotal(sellPrice);
    decreaseRowQty(itemId);
  }

  function decreaseRowQty(rowId) {
    const newItemList = tableItems.map((item) => {
      if (item.id === rowId) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        if (updatedItem.cartQty > 0) {
          updatedItem.cartQty -= 1;
        }
        return updatedItem;
      }

      return item;
    });

    setTableItems(newItemList);
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
          {tableItems.length == 0 && rangeCode == 0 ? <LandingPage /> : ""}
          {tableItems.length > 0 ? (
            <ProductsTable
              removeTradeshowItem={removeTradeshowItem}
              addTradeshowItem={addTradeshowItem}
              tableItems={tableItems}
              rangeCode={rangeCode}
              handleChangeCategory={handleChangeCategory}
              selectedSubCategory={selectedSubCategory}
              selectedRangeCategory={selectedRangeCategory}
            />
          ) : (
            rangeCode != 0 && (
              <SubCategories
                resetPage={resetPage}
                update_selected_subCategory={update_selected_subCategory}
                showTableItems_byGroupCode={showTableItems_byGroupCode}
                filterMajorCatoryGroupCodes={filterMajorCatoryGroupCodes}
                selectedRangeCategory={selectedRangeCategory}
              />
            )
          )}
        </div>
      }
      leftSidebarHeader={<div className="p-24"></div>}
      leftSidebarContent={
        <LeftSideNav
          handleChangeCategory={handleChangeCategory}
          lineCode_mapping={lineCode_mapping}
        />
      }
      ref={pageLayout}
    />
  );
}

export default withReducer("Tradeshow", reducer)(Products);
