import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import KeyOffIcon from '@mui/icons-material/KeyOff';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, clearLogin } from '../../action/UserActions';
function Login() {
 const alert = useAlert();
 const navigate = useNavigate()
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('')
 

 const dispatch = useDispatch()
 const {error,lodding,userInfo,isCreateLogin} = useSelector(state=>state.userLogin);






 const loginSubmitHandler=(e)=>{
  e.preventDefault();
  const myFrom = new FormData();
  myFrom.set('email',email)
  myFrom.set('password',password)
  dispatch(LoginAction(myFrom))
 }


 useEffect(()=>{
  if(error){
    alert.error(error)
    dispatch(clearLogin())
  }
  if(isCreateLogin){
   navigate('/')
  }
  },[alert,error,dispatch,isCreateLogin])
  return (
    <div className='Login-Container'>
    <div className='left_side'>
     <img className='images' src='https://img.freepik.com/premium-photo/relaxed-young-female-model-tilts-head-has-makeup-fair-hair-dressed-white-clothes_95891-1149.jpg?size=626&ext=jpg&ga=GA1.1.1291529831.1679838217&semt=sph'/>
     <h2>Beautifull Login Pages</h2>  
     <div>
       {/* <img className='logo-image' src='../image/posts/logo.ico' alt='name'/> */}
       <p>That's Nice </p>
     </div>
    </div>
    <div className='right_side'>
    <form className='login-form' onSubmit={loginSubmitHandler}>
      <div className='center-section'>
       <label>Email</label>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='name' placeholder='enter the email' />
       </div>
       <div className='center-section'>
       <label>Password</label>
       <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' name='password' placeholder='enter the passowrd' />
       </div>
      <div className='button_register'>
       <button type='submit'>Login</button>
      </div>
      <div className='forget-section'>
       <KeyOffIcon className='key-icon'/>
       <Link style={{textDecoration:'none',color:'white',fontStyle:'italic'}} className='a-tag' to='/password/forget/email'>forgot password</Link>
      </div>
      <p className='p-register'>if you don;t register?..<Link to='/register'>Register now</Link></p>
     </form>
    </div>
   </div>
  )
}

export default Login
