import {ASTEROIDS_URL, NASA_API_KEY} from "../Constant";
import {Dates} from "../interface/Dates";

export const fetchAsteroids = async (dates: Dates) => {
    const URL = ASTEROIDS_URL + "?" +
        "start_date=" + dates.startDate + "&" +
        "end_date=" + dates.endDate + "&" +
        "api_key=" + NASA_API_KEY;
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchAsteroid = async (id: string) => {
    const URL = ASTEROIDS_URL + "/" + id +
        "?api_key=" + NASA_API_KEY;
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
