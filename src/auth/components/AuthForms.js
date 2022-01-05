import { auth, database } from "../../firebase/firebase-config";
import { signUp, signIn } from '../../firebase/firebase-config';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from "firebase/firestore";



function AuthForms(props) {

    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            navigate("/profile");
        }
    }, [])


    const handleInputChange = (event) => {
        switch (event.target.type) {
            case 'text':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassWord(event.target.value);
                break;
        }
    }

    const handleLogIn = async () => {
        try {
            await signIn(email, passWord).then((response) => {
                navigate("/profile");
            });
        } catch (ex) {
            alert(ex);
        }
    }

    const handleSignUp = async () => {
        try {
            await signUp(email, passWord).then((response) => {
                 setDoc(doc(database, "users", auth.currentUser.uid), {
                    setupDone: false,
                  });
           
                navigate("/profile");
            })
        } catch (err) {
            alert(err);
        }
        
    }

    const handleClick = () => {
        switch (props.type) {
            case 'signup':
                handleSignUp();
                break;
            case 'login':
                handleLogIn();
                break;
            default:
                alert('wront type');
                break;
        }
    }




    return (
        <div>
                <div id="auth-form">
                    <h2 className="title">{props.type.toUpperCase()}</h2>
                    <input onChange={handleInputChange} type="text" />
                    <input onChange={handleInputChange} type="password" />
                    <input className="form-btn" type="submit" value={props.type === "signup" ? "SIGN UP" : "LOG IN"} onClick={handleClick} />
                </div>
            
            
        </div>
    )
}

export default AuthForms;