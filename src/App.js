import logo from './logo.svg';
import './App.css';
import Faker from './components/Faker';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
