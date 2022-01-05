import './App.css';
import Nav from './nav/App';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase-config';
import Auth from './auth/App'
import LessonScreen from './screens/LessonScreen';
import AdminScreen from './screens/AdminScreen';
import LessonList from './components/LessonsList';
import BottomNav from './nav/BottomNav';
import { HomeMax } from '@mui/icons-material';
import HomeComponent from './components/home/HomeComponent';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="" element={<HomeComponent />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="signup" element={<Auth />} />
          <Route path="login" element={<Auth />} />
          <Route path="lesson/:lessonId" element={<LessonScreen />} />
          <Route path="admin" element={<AdminScreen />} />
          <Route path="lessons" element={<LessonList />} />
          <Route path="profile" element={<ProfileScreen />} />
        </Routes>
      <BottomNav />
      </div>
    </Router>
  );
}

export default App;
