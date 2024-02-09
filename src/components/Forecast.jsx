import React from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { FiLoader } from "react-icons/fi"; 

function Forecast({ forecastData }) {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-gray-800">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-semibold">High</p>
                        <div className="flex items-center">
                            <RiArrowUpSLine className="text-2xl text-red-500 mr-2" />
                            <span className="text-lg font-semibold">
                                {forecastData ? ( 
                                    forecastData.high + "°C" 
                                ) : (
                                    <FiLoader className="animate-spin text-gray-500" /> 
                                )}
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Low</p>
                        <div className="flex items-center">
                            <RiArrowDownSLine className="text-2xl text-blue-500 mr-2" />
                            <span className="text-lg font-semibold">
                                {forecastData ? ( 
                                    forecastData.low + "°C" 
                                ) : (
                                    <FiLoader className="animate-spin text-gray-500" /> 
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forecast;
