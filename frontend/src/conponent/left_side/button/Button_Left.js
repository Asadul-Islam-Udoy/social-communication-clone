import React, { useEffect, useState } from 'react'
import './Button_Left.css'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsersAction,clearProfileError } from '../../../action/UserActions'

import Users from './Users'
function Button_Left() {
   const alert = useAlert()
   const {lodding,error,users} = useSelector(state=>state.allusers);
   const dispatch = useDispatch();
   useEffect(()=>{
     if(error){
       alert.error(error)
       dispatch(clearProfileError())
     }
     dispatch(allUsersAction())
 
   },[dispatch,alert,error])




  return (
    <div className='Botton-Container'>
     <p className='f-p'>Who is following you?</p>
      {users && users.map((person)=>(
          <Users person={person}/> 
      ))}
      <div className='see-more-button'>
      <button>See more..</button>
      </div>
    </div>
  )
}

export default Button_Left
