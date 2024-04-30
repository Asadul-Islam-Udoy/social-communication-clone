import React, { useEffect } from 'react'
import './Center.css'
import Top_Center from './top/Top_Center'
import Center_Center from './center/Center_Center'
import Button_Center from './button/Button_Center'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getAllPostAction } from '../../action/PostActions'
import Lodder from '../lodder/Lodder'
import CenterMedia from './center__media/CenterMedia'
function Center() {
  const alert = useAlert()
  const dispatch = useDispatch()
  const {lodding,error,posts} = useSelector(state=>state.getPosts)
  useEffect(()=>{
   if(error){
    alert.error(error)
   }
   dispatch(getAllPostAction())
  },[dispatch,error,alert])

  return (
    <div className='center-Container'>
     <Top_Center/>
     <CenterMedia/>
     <Center_Center/>
   {lodding ? <Lodder/>:
    <div>
       {
      posts && posts.map((post)=>(
      <Button_Center post={post}/>
    ))
   }
    </div>
  
   }
    </div>
  )
}

export default Center
