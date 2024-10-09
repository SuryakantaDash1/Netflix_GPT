
import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div>
        <Header/>
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="Background_image" />
        </div>
        <form>
            <input type="text" placeholder='Email'className='p-2 m-2' />
            <input type="password" placeholder='Password' className='p-2 m-2' />
            <button className='p-4 m-4'>Sign in</button>
        </form>
    </div>
  )
}

export default Login;