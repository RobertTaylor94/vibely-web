import logo from './logo.svg';
import './App.css';
import Faker from './components/Faker';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Profile from './components/Profile';
import SignUp from './components/Authentication/signupScreen';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
