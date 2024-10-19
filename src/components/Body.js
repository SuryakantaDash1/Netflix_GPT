
import Login from './Login';
import Browse from './Browse';
import {RouterProvider} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }

    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              
            } else {
              // User is signed out
              // ...
            }
          });
    }, []);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;