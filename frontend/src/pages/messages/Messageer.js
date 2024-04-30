import React, { useEffect, useState } from 'react'
import './Messageer.css'
import M_Left from '../../conponent/messageer/M_LeftSide/M_Left'
import M_Center from '../../conponent/messageer/M_CenterSide/M_Center'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
function Messageer() {
 const alert = useAlert()
 const dispatch = useDispatch()
 const {lodding,error,userMessages}=useSelector(state=>state.getMessages);
  return (
    <>
     <div className='messageer__Container'>
        <div className='messageer__LeftSide'>
          <M_Left  />
        </div>
        <div className='messageer__CenterSide'>
          <M_Center />  
        </div>
     </div>
    </>
  )
}

export default Messageer
