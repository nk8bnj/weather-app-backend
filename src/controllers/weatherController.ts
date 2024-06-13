import { Request, Response } from 'express';
import { fetchWeatherRequests, getWeatherData, saveWeatherRequest } from '../services/weatherService';

export const getWeather = async (req: Request, res: Response) => {
  const { city } = req.body;
  try {
    const weatherData = await getWeatherData(city);
    const weatherRequest = await saveWeatherRequest(city, weatherData);
    res.json(weatherRequest);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
};

export const getWeatherRequests = async (req: Request, res: Response) => {
  try {
    const weatherRequests = await fetchWeatherRequests();
    res.json(weatherRequests);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather requests" });
  }
};
