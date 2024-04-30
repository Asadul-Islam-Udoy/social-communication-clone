import React, { useEffect } from 'react'
import './M_Center.css'
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'timeago.js';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { clearErrorConvartion, getUserMessagesAction } from '../../../action/MessageAction';
import M_Left from '../M_LeftSide/M_Left';
import M_Center from './M_Center';
function UserChatBox() {
    let{id} = useParams()
    const alert = useAlert()
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.userLogin.userInfo)
    const {lodding,error,userMessages}=useSelector(state=>state.getMessages);
      useEffect(()=>{
        if(error){
          alert.error(error)
          dispatch(clearErrorConvartion())
        }
        dispatch(getUserMessagesAction(id))
      },[dispatch,id,alert,error])
  return (
   <>
       <div className='messageer__Container'>
        <div className='messageer__LeftSide'>
          <M_Left  />
        </div>
        <div className='messageer__CenterSide'>
          <M_Center receverId={id}  />  
        </div>
     </div>
   </>
  )
}

export default UserChatBox
