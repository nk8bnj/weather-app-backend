import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const getWeatherData = async (city: string) => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`,
  );
  return response.data;
};

export const saveWeatherRequest = async (city: string, data: any) => {
  return await prisma.weatherRequest.create({
    data: {
      city,
      data,
    },
  });
};

export const fetchWeatherRequests = async () => {
  return await prisma.weatherRequest.findMany({
    take: 100,
    orderBy: { createdAt: 'desc' },
  });
};
