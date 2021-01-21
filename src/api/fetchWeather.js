import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY
        }
    });

    return data;
}

export const CHICAGOWeather = async () => {
    const { data } = await axios.get(URL, {
        params: {
            q: 'chicago',
            units: 'imperial',
            APPID: API_KEY
        }
    });

    return data;
}

