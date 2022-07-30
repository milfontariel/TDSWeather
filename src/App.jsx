import { useEffect, useState } from 'react';
import Main from './pages/Main';
import { getGeoPosition, getLocalInfo, getWeatherIcon } from './services/weatherService';

function App() {

  return (
    <Main />
  )
}

export default App
