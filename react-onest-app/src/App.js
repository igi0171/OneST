import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import Uen from "./components/uen/Uen";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<WeatherForecast />}></Route>
          <Route path="/uen" element={<Uen />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
