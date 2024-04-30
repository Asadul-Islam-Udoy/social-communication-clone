import React, { useEffect, useState } from 'react'
import './Profile.css'
import Profile_Left from '../../conponent/profile/p_left/Profile_Left'
import Header from '../../conponent/profile/p_right_header/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearProfileError, singleUserAction } from '../../action/UserActions'
import ProfileMedia from '../../conponent/profile/p_media/ProfileMedia'
function Profile() {
  const[statusShow,setStatusShow] = useState(false)
  let {id} = useParams()
  const alert = useAlert()
 const dispatch = useDispatch();
 const{lodding,error,profile} = useSelector(state=>state.singleProfile)
 useEffect(()=>{
  if(error){
    alert.error(error)
    dispatch(clearProfileError())
  }
  dispatch(singleUserAction(id))
 },[dispatch,alert,id])

 console.log(statusShow)
  return (
   <>
 <div ><ProfileMedia setStatusShow={setStatusShow}/></div>
     <div className='profile-Container'>
      {statusShow ?
      <div className='profile__status'>
        <Profile_Left/>
      </div>:
      <div className='profile__status__max'>
        <Profile_Left/>
      </div>
     }
      <div>
        <Header />
      </div>
    </div> 
   </>
  )
}

export default Profile
