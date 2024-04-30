import React from 'react'
import './Right.css'
import Center_Left from '../left_side/center/Center_Left'
import Top_Right from './top_right/Top_Right'
import Right_Center from './center_right/Right_Center'
import Right_Button from './button_right/Right_Button'
function Right() {
  return (
    <div className='Right-Container'>
     <Top_Right/>
     <Right_Center/>
     <Right_Button/>
    </div>
  )
}

export default Right
