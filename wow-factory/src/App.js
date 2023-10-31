import './App.css';


import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Profile from './Components/Profile';
import Body from './Components/Body';

const appRouter = createBrowserRouter([{
  path:'/',
  element: <Profile/>,
  
 },
 {
  path:'/profile',
  element: <Body />,
 }
]
 )



 const  App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
