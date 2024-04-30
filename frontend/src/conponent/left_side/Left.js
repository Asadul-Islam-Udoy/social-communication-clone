import React, { useEffect } from 'react'
import './Left.css'
import Top_Left from './top/Top_Left'
import Center_Left from './center/Center_Left'
import Button_Left from './button/Button_Left'

function Left() {
  return (
    <div className='Left-Container'>
      <Top_Left/>
     <div>
     <Center_Left/>
     </div>
      <Button_Left/> 
    </div>
  )
}

export default Left
