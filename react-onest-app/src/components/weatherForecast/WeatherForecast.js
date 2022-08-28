import styles from "./WeatherForecast.module.css";
import React from "react";
import Search from "./search/Search";
import Forecast from "./forecast/Forecast";
import { useState } from "react";
import moment from "moment";

const WeatherForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [startPeriod, setStartPeriod] = useState(null);
  const [endPeriod, setEndPeriod] = useState(null);

  const handleOnSearchChange = (searchData) => {
    setForecast({ area: searchData.label, forecast: searchData.value });
  };

  const forecastFetch = fetch(
    "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
    {
      method: "GET",
    }
  );

  Promise.all([forecastFetch])
    .then(async (response) => {
      const forecastResponse = await response[0].json();

      setStartPeriod(forecastResponse.items[0].valid_period.start);
      setEndPeriod(forecastResponse.items[0].valid_period.end);
    })
    .catch(console.log);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {moment(startPeriod).format("YYYY. MM. DD. ")}
      </h1>
      <label className={styles.title}>
        Singapore 2-hourly Weather Forecast (
        {moment(startPeriod).format("HH:mm")} -{" "}
        {moment(endPeriod).format("HH:mm")})
      </label>
      <Search onSearchChange={handleOnSearchChange} />
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default WeatherForecast;
