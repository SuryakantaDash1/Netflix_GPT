
import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="Background_image" />
        </div>
        <form className='absolute bg-black p-4 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input className='p-2 my-4 w-full bg-gray-700' type="text" placeholder='Email' />
            <input className='p-2 my-4 w-full bg-gray-700' type="password" placeholder='Password'  />
            <button className='p-4 my-4 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;