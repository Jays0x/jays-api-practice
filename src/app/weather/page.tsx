'use client'
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const city = 'Nigeria'; // You can change this to any city
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className='text-center text-lg animate-spin h-6  mr-3 border-2 border-white rounded-full '>
                </div>
            </div>;
  }

  if (!weather || weather.cod !== 200) {
    return <div className="text-center text-lg">Error fetching weather data</div>;
  }

  return (
    <div className="container flex flex-col items-center justify-center h-[100vh]">
      <div>
      <h1 className="text-3xl font-bold mb-4">Weather in {weather.name}</h1>
      <p className="text-xl">Temperature: {weather.main.temp}°C</p>
      <p className="text-xl">Weather: {weather.weather[0].description}</p>
      <p className="text-xl">Humidity: {weather.main.humidity}%</p>
      <p className="text-xl">Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
