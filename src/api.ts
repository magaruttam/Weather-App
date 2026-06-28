import { WeatherSchema } from "./schemas/weatherSchema";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherData(lat: number, lon: number) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return WeatherSchema.parse(data);
}