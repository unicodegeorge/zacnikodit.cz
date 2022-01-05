import './App.css';
import AuthForms from './components/AuthForms';
import { auth } from '../firebase/firebase-config';
import {useLocation} from 'react-router-dom';




function Auth() {
    const location = useLocation();
    console.log(location.pathname)
    return <AuthForms type={location.pathname.slice(1)} />
}

export default Auth;
