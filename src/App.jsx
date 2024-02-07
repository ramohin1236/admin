
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ForgetPassword from './Pages/ForgetPasword/ForgetPassword';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Login/>}/>  
           <Route path='/reset-password' element={<ResetPassword/>}/>  
           <Route path='/forgot-password' element={<ForgetPassword/>}/>  
           <Route path='/admin' element={<MainLayout/>}>
               <Route index element={<Dashboard/>}/> 
            </Route>  
        </Routes>
    </BrowserRouter>
  )
}

export default App
