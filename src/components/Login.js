
import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                navigate('/browse');
              }).catch((error) => {
                setErrorMessage(error.message);
              });

            console.log(user);
            
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "-" + errorMessage);
            });
        } else {
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "-" + errorMessage);
        });
        }
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="Background_image" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black p-4 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm && (
             <input className='p-2 my-4 w-full bg-gray-700' ref={name} type="text" placeholder='Full Name' />
            )} 
            <input className='p-2 my-4 w-full bg-gray-700' ref={email} type="text" placeholder='Email' />
            <input className='p-2 my-4 w-full bg-gray-700' ref={password} type="password" placeholder='Password'  />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-4 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;