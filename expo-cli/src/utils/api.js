const appId = '885ec8f88d5c3aafd2a9936fa6635f90'

export const fetchCoordinates = async city => {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appId}`,
    );

    const locations = await response.json();
    
    return locations[0];
};

export const fetchWeather = async (lat, lon) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`,
    );

    const { name, weather, main } = await response.json();

    return {
        location: name,
        weather: weather[0].main,
        temperature: main.temp,
    };
};