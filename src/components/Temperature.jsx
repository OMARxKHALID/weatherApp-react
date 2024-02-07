import React from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function Temperature({ setCity, stats }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col items-center text-gray-800">
      <input
        type="text"
        className="bg-gray-200 w-64 rounded-full py-2 px-4 mb-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter Your City Name"
        onChange={handleCityChange}
        defaultValue="Lahore"
      />
      <div className="flex items-center justify-center space-x-4 mb-4">
        {stats && stats.isDay !== 0 ? (
          <IoMdSunny className="w-10 h-10 text-yellow-500 animate-bounce" />
        ) : (
          <IoMdMoon className="w-10 h-10 text-gray-500 animate-bounce" />
        )}
        <div className="text-center">
          {stats ? (
            <>
              <p className="text-4xl font-semibold">{stats.temp}°C</p>
              <p className="text-lg">{stats.condition}</p>
              <p className="text-sm">{`Today • ${stats.time} | ${stats.location}`}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Temperature;
