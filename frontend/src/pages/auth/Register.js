import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { RegisterAction, clearLogin,clearRegister } from '../../action/UserActions';

function Register() {
  const alert = useAlert();
  const [first_name,setFirstName] = useState('');
  const [last_name,setLastName] = useState('');
  const [username,setUserName] = useState('');
  const[email,setEmail] = useState('');
  const[passowrd,setPassword] = useState('');
  const[confirmPassword,setConfrimPassword] = useState('')
  

  const dispatch = useDispatch();
  const {error,isCreateRegister} = useSelector(state=>state.register);


 
 const registerSubmit =(e)=>{
  e.preventDefault();
  if(passowrd !== confirmPassword){
   return alert.error('password is not match')
  }
  const myFrom = new FormData();
  myFrom.set('first_name',first_name)
  myFrom.set('last_name',last_name)
  myFrom.set('username',username)
  myFrom.set('email',email)
  myFrom.set('password',passowrd)
  myFrom.set('confirmPassword',confirmPassword)
 dispatch(RegisterAction(myFrom))
}

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearRegister())
    }
    if(isCreateRegister){
      alert.success('register successfully!')
      dispatch(clearRegister())
    }
    },[alert,error,isCreateRegister,dispatch])
  return (
    <div className='Register-Container'>
     <div className='left_side'>
      <img className='images' src='https://as1.ftcdn.net/v2/jpg/06/44/51/32/1000_F_644513261_QNh0tIjRmmH2oLcKIBL592TPiefNAHP6.jpg'/>
        <h2>Beautifull Register Pages</h2>  
      <div>
        {/* <img className='logo-image' src='../image/posts/logo.ico' alt='name'/> */}
        <p>That's Nice </p>
      </div>
     </div>
     <div className='right_side'>
     <form className='register-form' onSubmit={registerSubmit}>
      <div className='password-section'>
       <div>
        <label>First Name</label>
        <input required value={first_name} onChange={(e)=>setFirstName(e.target.value)} type='text' name='firstnames' placeholder='enter the first'/>
       </div>
       <div >
        <label>Last Name</label>
        <input required onChange={(e)=>setLastName(e.target.value)} value={last_name} type='text' name='lastnames' placeholder='enter the last name' />
       </div>
      </div>
       <div className='center-section'>
        <label>User Name</label>
        <input required value={username} onChange={(e)=>setUserName(e.target.value)} type='text' name='user_name' placeholder='enter the username' />
       </div>
       <div className='center-section'>
        <label>Email</label>
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='name' placeholder='enter the email' />
       </div>
       <div className='password-section'>
       <div>
        <label>Password</label>
        <input required value={passowrd} onChange={(e)=>setPassword(e.target.value)} type='password' name='passowrd' placeholder='enter the pasword' />
       </div>
       <div>
        <label>Confirm Password</label>
        <input required value={confirmPassword} onChange={(e)=>setConfrimPassword(e.target.value)} type='password' name='confirm password' placeholder='confirm password' />
       </div>
       </div>
       <div className='button_register'>
        <button type='submit'>Register</button>
       </div>
       <p className='p-register'>Are you already register?..<Link to='/login'>login now</Link></p>
      </form>
     </div>
    </div>
  )
}

export default Register
