import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import Root  from "./Root.jsx"
import Auth from "./auth/Auth.jsx"
import Dashbord from './dashboard/Dashbord.jsx';

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
       <Route index element ={<Auth/>}/>
       <Route path="/dashboard" element ={<Dashbord/>}/>
    </Route>
  )
)
  return (
    <>
     
      <RouterProvider router={router}/>
    </>
  )
}

export default App
