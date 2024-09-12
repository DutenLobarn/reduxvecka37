Övning: Väderapplikation med Redux Toolkit och Async Thunks
Uppgift:
Skapa en väderapplikation där användarna kan:
Söka efter väderinformation för olika städer.
Visa aktuellt väder och en femdagarsprognos.
Filtrera prognosen baserat på temperatur, nederbörd eller vindstyrka.
Använda Redux Toolkit med createAsyncThunk för att hantera asynkrona anrop från ett väder-API.
Steg-för-steg:
API: Använd OpenWeatherMap API för att hämta väderdata. Eleverna kan registrera sig och få en gratis API-nyckel.
API-dokumentation: OpenWeatherMap API
Installera Redux Toolkit:
3 Skapa Slice för Väderdata:
Använd createSlice för att hantera väderdata.
Skapa en slice som hanterar både fetchWeather och fetchForecast med createAsyncThunk.
Ni kan använda två separata thunks för de olika API-anropen (nuvarande väder och femdagarsprognos).
 3B. userSlice.js - Hantera användarens favoritstäder och inställningar:
4 Skapa Redux Store:

5. weatherSelectors.js - Skapa Selectors för Väder och 

6. WeatherApp.js - Huvudkomponenten som använder Redux Toolkit:

7. Integrera Redux Store med React
I detta steg kommer eleverna att skapa en huvudkomponent, WeatherApp, som använder Redux Store via <Provider> och inkluderar de olika delarna av applikationen, såsom sökfält, visning av väderdata, och eventuella användarinställningar.
—----------------------------
Extra Utmaningar:
Femdagarsprognos: Utöka applikationen för att visa en femdagarsprognos med hjälp av https://api.openweathermap.org/data/2.5/forecast.
Filtrering: Låt användaren filtrera prognosen baserat på olika väderparametrar som temperatur, vindstyrka eller nederbörd.
Memoized Selectors: Använd createSelector från reselect för att optimera prestanda när du filtrerar väderdata.
—------------------------------

Sammanfattning:
I denna övning kommer du att bygga en väderapplikation med Redux Toolkit där du kan söka efter väderinformation för olika städer, visa aktuellt väder och femdagarsprognoser samt filtrera väderdata baserat på temperatur, vindstyrka eller nederbörd. Genom att använda createAsyncThunk för att hantera asynkrona anrop från ett väder-API kommer du att lära dig att effektivt hantera globalt tillstånd i applikationer.
Du kommer också att arbeta med selectors och introducera memoization med createSelector för att optimera applikationens prestanda vid filtrering av data. Genom att implementera global state management på ett strukturerat sätt i Redux får du en djupare förståelse för hur man kan bygga skalbara och optimerade applikationer.
Extra Utmaningar: För att bygga vidare på dina kunskaper kan du lägga till en femdagarsprognos och filtreringsfunktioner, samt använda memoized selectors för att optimera applikationens prestanda.

