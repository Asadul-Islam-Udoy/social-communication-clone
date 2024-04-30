import './App.css';
import {BrowserRouter , Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Froget_Password_Email from './pages/auth/forget/Email';
import { useSelector } from 'react-redux';
import ProtectedUser from './pages/middleware/UserAuth';
import { useEffect } from 'react';
import TestA  from './pages/test';
import Messageer from './pages/messages/Messageer';
import UserChatBox from './conponent/messageer/M_CenterSide/UserChatBox';
import ChatsLodder from './conponent/messageer/M_CenterSide/ChatsLodder';



function App() {
 
  const {isCreateLogin,userInfo,error} = useSelector(state=>state.userLogin);
  const {error:postError} = useSelector(state=>state.getPosts);


  return (
   <BrowserRouter>
    <div className="App">
      <div className='blur1'></div>
      <div className='blur3'></div>
      <div className='blur2'></div>
      <Routes>
        <Route path='/test' element={<ChatsLodder/>}/>
       <Route path=''  element={
        <ProtectedUser userAuth={userInfo && userInfo.success}>
         <Home/>
       </ProtectedUser>
       }/>
       <Route 
       path='/profile/:id'
       element={
        <ProtectedUser userAuth={userInfo && userInfo.success}>
          <Profile/>
        </ProtectedUser>
       }
       />
       <Route
       path='/user/messager/page'
      element={
        <ProtectedUser userAuth={userInfo && userInfo.success}>
        <Messageer/>
        </ProtectedUser>
      }
       />
        <Route
         path='/user/messager/box/:id'
         element={
        <ProtectedUser userAuth={userInfo && userInfo.success}>
        <UserChatBox/>
       </ProtectedUser>
      }
       />

      
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/password/forget/email' element={<Froget_Password_Email/>}/>
      </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
