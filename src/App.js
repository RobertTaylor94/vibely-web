import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Profile from './components/Profile';
import TweetBox from './components/TweetBox.js';
import PostCard from './components/PostCard/PostCard'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <TweetBox />
        <PostCard />
      </div>
    </Router>
  );
}

export default App;
