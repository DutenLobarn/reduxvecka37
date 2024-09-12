import { createSelector } from 'reselect';

// Selector för att hämta filtrerad väderdata
export const selectFilteredWeather = createSelector(
  [(state) => state.weather.weatherData],
  (weatherData) => {
    if (!weatherData || !weatherData.list) return [];
    
    // Logga strukturen för varje objekt i listan
    console.log("List structure:", weatherData.list);

    // Kontrollera om 'main' och 'temp' finns i varje objekt innan du filtrerar
    return weatherData.list.filter((item) => {
      if (item.main && item.main.temp !== undefined) {
        console.log(`Item ${item.dt}: Temp ${item.main.temp}`);
        return weatherData.list; // Returnera hela listan utan att filtrera
      }
      return false;
    });
  }
);
