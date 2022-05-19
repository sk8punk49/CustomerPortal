import {
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { useState } from "react";

function LeftSideNav(props) {
  const selectOptions = ["Categories", "Suppliers"];
  const [menuSelectOption, setMenuSelectOption] = useState(selectOptions[0]);
  function handleChangeCategory(itemId, groupDescription) {
    props.handleChangeCategory(itemId, groupDescription);
  }

  return (
    <div className="p-24">
      <FormControl fullWidth>
        <Select
          value={menuSelectOption}
          displayEmpty
          onChange={(e) => setMenuSelectOption(e.target.value)}
        >
          {selectOptions.map((selectOption) => (
            <MenuItem key={selectOption} value={selectOption}>
              {selectOption}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Search By</FormHelperText>
      </FormControl>
      <br />

      {props.majorCategories.map((row) => (
        <List
          key={row.id}
          dense
          onClick={() => handleChangeCategory(row.id, row.groupDesc_tradeshow)}
        >
          <ListItem button>
            <ListItemText primary={row.groupDesc_tradeshow} />
          </ListItem>
        </List>
      ))}
    </div>
  );
}

export default LeftSideNav;
