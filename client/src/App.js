import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Homepage from './components/Homepage';
import Login from './components/Login';
import User from './components/User';
import Register from './components/Register';
import Profile from './components/Profile';
import Contact from './components/contact';

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element : <RootLayout />,
        children : [
          {
            path: "/",
            element : <Homepage/>
          },
          {
            path: "/events",
            element: <User/>
          },
          {
            path: "/login",
            element : <Login/>
          },
          
          {
            path: "/register",
            element : <Register />
          },
          {
            path:"/profile",
            element:<Profile/>
          },
          {
            path:"/contact",
            element:<Contact/>
          }
        ]
      },
    ])
    return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    );
}

export default App;
