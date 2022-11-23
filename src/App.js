import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Pages/Counter/Counter';
import Home from './Pages/Home/Home/Home';
import Navber from './Pages/Home/Navber/Navber';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
