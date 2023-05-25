import React from "react"

const SortBar = ({order, onChange}) => {
  return (
  <div id="sort">
    <span>Sort by</span>
    <select id="sort" value={order} onChange={(e) => onChange(e.target.value)}>
      <option value="default">None</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
  );
}

export default SortBar;
