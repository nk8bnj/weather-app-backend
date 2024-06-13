import { Router } from 'express';
import { getWeather, getWeatherRequests } from '../controllers/weatherController';

const router = Router();

router.post('/weather', getWeather);
router.get('/weather/requests', getWeatherRequests);

export default router;
