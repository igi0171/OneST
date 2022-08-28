import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadAreas = () => {
    return fetch(
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.items[0].forecasts.map((area) => {
            return {
              value: `${area.forecast}`,
              label: `${area.area}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for area"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadAreas}
    />
  );
};

export default Search;
