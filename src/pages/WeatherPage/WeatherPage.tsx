import React from "react";
import { IWeatherData } from "../../model/IWeather";

interface IWeatherPageProps {
    weatherData: IWeatherData | null;
    toggleDisplayWeatherTable: () => void;
}

export const WeatherPage: React.FC<IWeatherPageProps> = ({
    weatherData,
    toggleDisplayWeatherTable,
}): JSX.Element => {
    return (
        <div className='mt-10'>
            <table className='table-auto border-collapse border border-gray-700'>
                <thead>
                    <tr>
                        <th className='hidden md:table-cell px-4 py-2 border border-gray-700'>
                            Date
                        </th>
                        <th className='hidden md:table-cell px-4 py-2 border border-gray-700'>
                            TEMP(F)
                        </th>
                        <th className='px-4 py-2 border border-gray-700'>
                            Description
                        </th>
                        <th className='px-4 py-2 border border-gray-700'>
                            Main
                        </th>
                        <th className='px-4 py-2 border border-gray-700'>
                            Pressure
                        </th>
                        <th className='px-4 py-2 border border-gray-700'>
                            Humidity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='hidden md:table-cell border border-gray-700 px-4 py-2'>
                            {weatherData?.date}
                        </td>
                        <td className='hidden md:table-cell border border-gray-700 px-4 py-2'>
                            {weatherData?.city_temp}
                        </td>
                        <td className='border border-gray-700 px-4 py-2'>
                            {weatherData?.description}
                        </td>
                        <td className='border border-gray-700 px-4 py-2'>
                            {weatherData?.main}
                        </td>
                        <td className='border border-gray-700 px-4 py-2'>
                            {weatherData?.pressure}
                        </td>
                        <td className='border border-gray-700 px-4 py-2'>
                            {weatherData?.humidity}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                onClick={toggleDisplayWeatherTable}
                className='bg-blue-500 text-white py-2 px-4 rounded-md mt-4'
            >
                Back
            </button>
        </div>
    );
};
