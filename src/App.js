import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './pages/Home.js'
import UserProfile from './pages/UserProfile/UserProfile';
import SignUp from './pages/SignUp/signupScreen';
import SignIn from './pages/SignIn/Signinscreen';
import { useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import SetupProfile from './pages/SetupProfile';
import FollowerProfile  from './pages/FollowerProfile';

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
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/setup' element={<SetupProfile />} />
          <Route path='/follower' element={<FollowerProfile />} />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
