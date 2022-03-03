import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
FilterProduct.propTypes = {};

function FilterProduct(props) {
  const { onChange, filter } = props;
  const handleChange = (e) => {
    const { value } = e.target;
    const [_sort, _order] = value.split(".");
    const newFilter = {
      ...filter,
      _sort: _sort || undefined,
      _order: _order || undefined,
    };
    onChange(newFilter);
  };
  return (
    <div className="action__fitsort">
      <span className="action_sort">
        <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
          <Select
            className="action__sort-select"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={filter ? `${filter._sort}.${filter._order}` : ""}
            label="sort"
            onChange={handleChange}
          >
            <MenuItem value="">Sale mạnh</MenuItem>
            <MenuItem value="price.desc">Giá giảm dần</MenuItem>
            <MenuItem value="price.asc">Giá tăng dần</MenuItem>
          </Select>
        </FormControl>
      </span>
    </div>
  );
}

export default FilterProduct;
