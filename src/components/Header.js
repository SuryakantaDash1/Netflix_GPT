
import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
    
  }
  return (
    <div className='absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        <div className='flex p-2 items-center gap-2'>
          <img className='w-12 h-12' src="https://th.bing.com/th?id=OIP.YNYq-QyNUFRPSb4D0oVOCAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" alt="user-icon" />
          <button onClick={handleSignOut} className='font-bold text-white bg-red-500 h-12 cursor-pointer p-2'>sign Out</button>
        </div>
    </div>
  )
}

export default Header;