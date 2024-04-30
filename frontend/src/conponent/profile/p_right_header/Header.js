import React, { useEffect } from 'react'
import './Header.css'
import Center_Left from '../../left_side/center/Center_Left'
import Button_Center from '../../center_side/button/Button_Center'
import Right_Center from '../../right_side/center_right/Right_Center'
import Right_Button from '../../right_side/button_right/Right_Button'
import Online from './online/Online'
import UserPosts from './posts/userPost/posts'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getUserPostAction, myPostAction } from '../../../action/PostActions'
import { clearProfileError } from '../../../action/UserActions'
import Lodder from '../../lodder/Lodder'
function Header() {
    const alert = useAlert()
    const dispatch = useDispatch()
    const{lodding,error,profile} = useSelector(state=>state.singleProfile)
    useEffect(()=>{
     if(error){
      alert.error(error)
      dispatch(clearProfileError())
     } 
     dispatch(myPostAction())
    },[dispatch,alert,error])
  return (
    <div className='p_header_container'>
    <div className='p-image-setion progile-cover-section'>
      <Center_Left/>
     <div className='post-p-section'>
       <div className='post-section-p'>
       {
        lodding?<Lodder/>:
        <div>
           {profile && profile.posts.map((post)=>(
           <UserPosts item={post} />
        ))}
        </div>
       }
      </div>
        <div className='post-section-p_online'>
        <Online/>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Header
