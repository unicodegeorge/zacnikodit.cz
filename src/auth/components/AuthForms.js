import { auth, database, googleAuth, provider } from "../../firebase/firebase-config";
import { signUp, signIn } from '../../firebase/firebase-config';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from "firebase/firestore";
import { Button } from "@mui/material";
import { signInWithPopup } from "@firebase/auth";



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

    const handleGoogleLogin = async () => {
        await signInWithPopup(auth, provider);
        if (props.type === 'signup') {
             setDoc(doc(database, "users", auth.currentUser.uid), {
              setupDone: false,
            });
          }
    }

    const handleClick = (event) => {
        console.log(event);
        switch (props.type) {
            case 'signup':
                switch(event.target.id) {
                    case 'signInWithGoogle':
                        handleGoogleLogin();
                        break;
                    default:
                        handleSignUp();
                        break;
                }
                break;
            case 'login':
                switch(event.target.id) {
                    case 'signInWithGoogle':
                        handleGoogleLogin();
                        break;
                    default:
                        handleLogIn();
                }
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

                <h4>Or</h4>
                
                <Button id={"signInWithGoogle"} onClick={handleClick} variant={"outlined"}> Sign in with Google </Button>
            
            
        </div>
    )
}

export default AuthForms;