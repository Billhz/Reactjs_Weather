import styled from "styled-components";
import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;
export const WeatherIcons = {
  "01d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "01n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  "02d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "02n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  "03d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "03n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  "04d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "04n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  "09d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "09n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  "10d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "10n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  "11d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png?fbclid=IwAR3UKyf4hs_E0q5viyK7C3W2NbOwPeWY0KN-ijHPPa3eM8DfxaWtoiYzQAU",
  "11n": "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
};


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}
export default App;
