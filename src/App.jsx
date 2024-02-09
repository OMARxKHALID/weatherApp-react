import React, { useEffect, useState } from "react";
import { BiWind } from "react-icons/bi";
import { RiDropLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { TiWeatherWindy } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";
import Highlight from "./components/Highlights";

function App() {
  const [city, setCity] = useState("lahore");
  const [weatherData, setWeatherData] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const fetchWeather = () => {
      if (!city.trim()) {
        return;
      }

      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=0eb2f9e6dd554873aa7120429230511&q=${city}&aqi=no`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found");
          }
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
          toast.success("Congratulations! City found.", {
            autoClose: 1000,
          });
        })
        .catch((error) => {
          toast.error("City not found. Please try again.", {
            autoClose: 1500, 
          });
        });
    };

    const timeoutId = setTimeout(() => {
      fetchWeather();
    }, 1500);

    setTypingTimeout(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [city]);

  return (
    <div className="overscroll-none bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-9xl font-bold mt-10 mb-8">WEATHER APP</h1>
      <div className="bg-white rounded-lg text-gray-800 shadow-lg mb-8 p-8 w-11/12 sm:w-4/5 lg:w-3/4 xl:w-1/2">
        <ToastContainer /> 
        <Temperature setCity={setCity} stats={weatherData && {
          temp: weatherData.current.temp_c,
          condition: weatherData.current.condition.text,
          isDay: weatherData.current.is_day,
          location: weatherData.location.name,
          time: weatherData.location.localtime,
        }} />
        <Forecast forecastData={weatherData && {
          high: weatherData.forecast?.forecastday[0]?.day?.maxtemp_c, 
          low: weatherData.forecast?.forecastday[0]?.day?.mintemp_c, 
        }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Highlight
            icon={<TiWeatherWindy className="w-8 h-8 text-gray-800" />}
            title="Wind Status"
            value={weatherData && `${weatherData.current.wind_mph} mph`}
          />
          <Highlight
            icon={<RiDropLine className="w-8 h-8 text-gray-800" />}
            title="Humidity"
            value={weatherData && `${weatherData.current.humidity}%`}
          />
          <Highlight
            icon={<HiOutlineEye className="w-8 h-8 text-gray-800" />}
            title="Visibility"
            value={weatherData && `${weatherData.current.vis_miles} miles`}
          />
          <Highlight
            icon={<BiWind className="w-8 h-8 text-gray-800" />}
            title="Air Pressure"
            value={weatherData && `${weatherData.current.pressure_mb} mb`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
