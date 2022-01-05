import './App.css';
import logo from './logo.svg'
import { useNavigate } from 'react-router-dom';

import LoginRounded from '@mui/icons-material/LoginRounded';
import { BookTwoTone } from '@mui/icons-material';
import { SchoolTwoTone } from '@mui/icons-material';
import { PersonSharp } from '@mui/icons-material';
import { auth } from '../firebase/firebase-config';
import { signOut } from 'firebase/auth';
function Nav() {
  const navigate = useNavigate();
  const styleIcon = {
    color: "white",
    filter: "drop-shadow( 3px 3px 2px rgba(44, 105, 69, 0.7))",
    fontWeight: "bolder",
  };


  return (
    <nav>
      <img src={logo} className="logo" width="100" alt="logos"  style={{cursor: 'pointer'}} onClick={()=> navigate("")}/>
      <ul className="nav-links">

        {auth.currentUser !== null && <li onClick={() => navigate('/lessons')}>Lessons <SchoolTwoTone sx={{ width: 20, position: "relative", top: -1, left: 15 }} /></li>}
        {auth.currentUser === null && <li onClick={() => navigate('/login')}>Login <LoginRounded sx={{ width: 20, position: "relative", top: -1, left: 15 }} /></li>}
        {auth.currentUser === null && <li onClick={() => navigate('/signup')}>Register <BookTwoTone sx={{ width: 20, position: "relative", top: -1, left: 15 }} /></li>}
        {auth.currentUser !== null && <li onClick={() => navigate('/profile')}>Profile <PersonSharp sx={{ width: 20, position: "relative", top: -1, left: 15 }} /></li>}
        {auth.currentUser !== null && <li onClick={() => signOut(auth)}>Sign Out<LoginRounded sx={{ width: 20, position: "relative", top: -1, left: 15 }}  /></li>}
      </ul>
    </nav>
  );
}

export default Nav;
