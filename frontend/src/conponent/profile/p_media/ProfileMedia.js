import React, { useEffect } from 'react'
import './ProfileMedia.css';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useNavigate } from 'react-router-dom';
function ProfileMedia({setStatusShow}) {
    const navigate = useNavigate()
    function messagesHandler(){
        navigate('/user/messager/page')
     }
  return (
    <>
        <div className='profile__media__container'>
        <div className='profile__media__box'>
         <div  className='profile__icon__section'>
            <AddLinkIcon onClick={()=>setStatusShow((pre)=>!pre)} className='profile__icon'/>
        </div>
        <div>
          <img className='icon-images' src='https://cdn-icons-png.flaticon.com/512/10703/10703269.png'/> 
        </div>
         <div className='bal-section'>
          <span>45</span>
         <img className='icon-images' src='https://i.pinimg.com/736x/ce/6b/19/ce6b1923315ed5a668974a3a13d1083a.jpg'/>
        </div>
        <div className='bal-section'> 
        <span>2</span>
        <img className='icon-images' onClick={messagesHandler} src='https://cdn-icons-png.flaticon.com/512/4885/4885755.png'/>
        </div> 
        </div>
    </div> 
    </>
  )
}

export default ProfileMedia
