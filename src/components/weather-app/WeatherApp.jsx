import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../Redux/slices/weatherSlice/weatherSlice'; // Import the thunk
import { selectFilteredWeather } from '../../Redux/slices/weatherSlice/selectors/weatherSelectors'; // Importera selectorn

const WeatherApp = () => {
  const dispatch = useDispatch();
  const { loading, error, weatherData } = useSelector((state) => state.weather);
  const filteredWeatherData = useSelector(selectFilteredWeather); // Använd den filtrerade selectorn

  const [city, setCity] = useState('London'); // Standardstad
  const [errorMessage, setErrorMessage] = useState(null); // Hantera felmeddelanden

  console.log("weatherData", weatherData);
  console.log("filteredWeatherData", filteredWeatherData);

  // Kör endast när staden eller dispatch ändras
  // useEffect(() => {
  //   dispatch(fetchWeather(city)); // Dispatch the fetchWeather thunk with a city name
  // }, [dispatch, city]);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   dispatch(fetchWeather(city)); // Hämta väderdata för den sökta staden
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (weatherData && !weatherData.city) {
  //   return <div>City not found. Please try again.</div>; // Om staden inte hittas
  // }

  const handleSearch = (e) => {
    e.preventDefault();

    // Validera så att användaren inte söker på en tom sträng
    if (city.trim() === '') {
      setErrorMessage("Please enter a valid city name.");
      return;
    }

    // Nollställ felmeddelande och starta väderhämtning
    setErrorMessage(null);
    dispatch(fetchWeather(city));
  };

  return (
    <main>
      <h1>Weather Data</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city name" 
        />
        <button type="submit">Search</button>
      </form>

      {/* Visa felmeddelande om något går fel */}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}. Please try another city.</div>}

      {loading && <div>Loading...</div>}


      {filteredWeatherData.length > 0 && (
        <div>
          <h2>Weather in {weatherData.city.name}</h2>
          {filteredWeatherData.map((item, index) => (
            <div key={index}>
              <p>Day {index + 1}: {item.main.temp} °C</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default WeatherApp;