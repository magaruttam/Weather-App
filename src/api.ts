const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherData(lat: number, lon: number) {
    const response = await fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return response.json();
}