import './App.css';
import { signUp } from '../firebase/firebase-config';
import { useRef } from 'react';



function Auth() {
    const emailRef = useRef();
    const passwordRef = useRef();


    async function handleSignUp() {
        try {
            await signUp(emailRef.current.value, passwordRef.current.value).then(() => {
                console.log("worked");
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="authentication">
            <div id="register">
                <input type="text" ref={emailRef} />
                <input type="password" ref={passwordRef} />
                <input type="button" value="signUp" onClick={handleSignUp} />
            </div>

            <div id="login">

            </div>
        </div>
    );
}

export default Auth;
