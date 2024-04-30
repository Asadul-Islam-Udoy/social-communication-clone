import React, { useEffect } from 'react'
import './Profile_Left.css'
import Top_Left from '../../left_side/top/Top_Left'
import Button_Left from '../../left_side/button/Button_Left'
import Profile_Info from '../p_info/Profile_Info'
function Profile_Left() {
  return (
    <div className='p_left_center_container'>
    <Top_Left/>
    <div>
      <Profile_Info/>
    </div>
    <div>
    <Button_Left/>
    </div>
    </div>
  )
}

export default Profile_Left
