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
        className="bg-gray-200 w-full sm:w-64 rounded-full py-2 px-4 mb-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter Your City Name"
        onChange={handleCityChange}
        defaultValue="Lahore"
      />
      <div className="flex flex-col sm:flex-row items-center justify-center md:mr-12 space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        {stats && stats.isDay !== 0 ? (
          <IoMdSunny className="w-10 h-10 text-yellow-500 animate-bounce" />
        ) : (
          <IoMdMoon className="w-10 h-10 text-gray-500 animate-bounce" />
        )}
        <div className="text-center">
          {stats ? (
            <>
              <p className="text-7xl font-semibold mb-3">{stats.temp}°C</p>
              <p className="text-2xl font-semibold">{stats.condition}</p>
              <p className="text-md font-semibold">{`Today • ${stats.time} | ${stats.location}`}</p>
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
