import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherApp from "./components/weather-app/WeatherApp";
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
        <WeatherApp/>

    </Provider>
  </StrictMode>,
)
