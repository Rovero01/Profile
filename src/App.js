import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Pms from './pages/pms';


function App() {
  return (
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/pms' element={<Pms/>} />
    </Routes>
  );
}

export default App;
