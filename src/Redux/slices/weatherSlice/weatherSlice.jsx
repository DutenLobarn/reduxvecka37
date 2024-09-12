import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = "fbced7e8d02a9e667cebf0f809ebb10f";

// Thunk för att hämta väderdata
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      console.log("Fetching weather for city:", city);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=7&appid=${apiKey}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        } else {
          throw new Error('Failed to fetch weather data');
        }
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
