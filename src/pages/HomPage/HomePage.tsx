import React, { useState, useEffect } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { FiSearch } from "react-icons/fi";

import { WeatherPage } from "../WeatherPage/WeatherPage";
import { IWeatherData } from "./../../model/IWeather";
import axios from "axios";

export const HomePage = () => {
    const { user } = useAuth0<User>();
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
    const [shouldDisplayWeatherTable, setShouldDisplayWeatherTable] =
        useState<boolean>(false);

    const toggleDisplayWeatherTable = () =>
        setShouldDisplayWeatherTable(!shouldDisplayWeatherTable);

    const fetchWeatherData = async () => {
        const WEATHER_API_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

        try {
            const { data } = await axios.get(WEATHER_API_URL);

            if (data) {
                toggleDisplayWeatherTable();
                setWeatherData({
                    ...weatherData,
                    date: new Date(data.dt * 1000).toLocaleDateString(),
                    city_temp: data.main.temp,
                    description: data.weather[0].description,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    main: data.weather[0].main,
                });
            }
        } catch (error) {
            throw error;
        }
    };

    const githubProfileUrl = `https://github.com/${user?.nickname}`;
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {shouldDisplayWeatherTable ? (
                <WeatherPage
                    weatherData={weatherData}
                    toggleDisplayWeatherTable={toggleDisplayWeatherTable}
                />
            ) : (
                <>
                    <h1 className='text-3xl font-bold mb-4'>
                        Welcome, {user?.name || user?.nickname}!
                    </h1>
                    <a href={githubProfileUrl} className='text-blue-500 mb-4'>
                        {githubProfileUrl}
                    </a>
                    <div className='flex items-center justify-center w-80'>
                        <div className='relative w-full'>
                            <input
                                type='text'
                                placeholder='City'
                                className='w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <div className='absolute top-0 left-0 flex items-center h-full ml-3 pointer-events-none'>
                                <FiSearch className='text-gray-500' />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={fetchWeatherData}
                        className='bg-blue-500 text-white py-2 px-4 rounded-md mt-4'
                    >
                        Display Weather
                    </button>
                </>
            )}
        </div>
    );
};
