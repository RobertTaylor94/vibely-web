import logo from './logo.svg';
import './App.css';
import Faker from './components/Faker';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Profile from './components/Profile';
import SignUp from './components/Authentication/signupScreen';
import SignIn from './components/Authentication/Signinscreen';
import { useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    //set current user to the state when firebase auth changes
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      {/* pass currentuser to all components */}
      <AuthProvider value={{currentUser}}>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
