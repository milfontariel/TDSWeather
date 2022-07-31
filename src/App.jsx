import Main from './pages/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SelectCity from './components/SelectCity';
import WeatherInfo from './components/WeatherInfo';
import { WeatherProvider } from './contexts/weatherContext';

function App() {

  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<SelectCity />} />
            <Route path='detail' element={<WeatherInfo />} />
          </Route>
        </Routes>
      </Router>
    </WeatherProvider>
  )
}

export default App
