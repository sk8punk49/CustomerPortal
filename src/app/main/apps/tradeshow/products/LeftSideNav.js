import {
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import { range } from "lodash";
import { useState } from "react";

function LeftSideNav(props) {
  const selectOptions = ["Categories", "Suppliers"];
  const [menuSelectOption, setMenuSelectOption] = useState(selectOptions[0]);
  function handleChangeCategory(rangeCode, description) {
    //  console.log(rangeCode);
    props.handleChangeCategory(rangeCode, description);
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

  function getRangeCodeList() {
    const distinctRanges = [];
    const rangeCodeList = [];
    props.lineCode_mapping.map((item) => {
      if (
        !distinctRanges.includes(item.ap_range) &&
        item.ap_range_description != ""
      ) {
        distinctRanges.push(item.ap_range);
        const updatedItem = {
          id: item.ap_range,
          description: item.ap_range_description,
        };
        rangeCodeList.push(updatedItem);
        return updatedItem;
      }

      return item;
    });

    return rangeCodeList.sort(dynamicSort("description"));
  }

  const rangeCodeList = getRangeCodeList();
  return (
    <div className="p-24">
      <h4>Categories</h4>
      <br />

      {rangeCodeList.map((row) => (
        <List
          key={row.id}
          dense
          onClick={() => handleChangeCategory(row.id, row.description)}
        >
          <ListItem button>
            <ListItemText primary={row.description} />
          </ListItem>
        </List>
      ))}
    </div>
  );
}

export default LeftSideNav;
