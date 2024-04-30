import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Email.css'
function Froget_Password_Email() {
    const [email,setEmail] = useState('');

    const emailSubmitHandler=(e)=>{
        e.preventDefault();

    }
    return (
        <div className='Login-Container'>
        <div className='left_side'>
         <img className='images' src='https://img.freepik.com/premium-photo/relaxed-young-female-model-tilts-head-has-makeup-fair-hair-dressed-white-clothes_95891-1149.jpg?size=626&ext=jpg&ga=GA1.1.1291529831.1679838217&semt=sph'/>
         <h2>Beautifull forget Password Pages</h2>  
         <div>
           {/* <img className='logo-image' src='../image/posts/logo.ico' alt='name'/> */}
           <p>That's Nice </p>
         </div>
        </div>
        <div className='right_side'>
        <form className='login-form' onSubmit={emailSubmitHandler}>
          <div className='close-items'>
          <Link to='/login'style={{textDecoration:'none'}} className='close-section'>x</Link>
          </div>
          <div className='center-section'>
           <label>Email</label>
           <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='name' placeholder='enter the email' />
           </div>
           <div className='button_register'>
           <button type='submit'>Continue</button>
          </div>
         </form>
        </div>
       </div>
      )
}

export default Froget_Password_Email
