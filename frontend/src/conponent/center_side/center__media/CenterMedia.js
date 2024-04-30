import React from 'react'
import './CenterMedia.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function CenterMedia() {
    const navigate = useNavigate()
    const{profile} = useSelector(state=>state.singleProfile)
    function messagesHandler(){
        navigate('/user/messager/page')
     }
  return (
    <>
     <div className='center__media__container'>
        <div className='center__media__box'>
         <div className='profile__icon__section'>
         <Link className='a'  to={`/profile/${profile && profile._id}`}>
            <AccountCircleIcon className='profile__icon'/>
         </Link>
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

export default CenterMedia
