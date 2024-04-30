import React, { useState } from 'react'
import './Home.css'
import Left from '../../conponent/left_side/Left'
import Center from '../../conponent/center_side/Center'
import Right from '../../conponent/right_side/Right'
function Home() {
  const[left,setLeft] = useState(true)
  const[center,setCenter] = useState(false)
  const[right,setRight] = useState(true)
  return (
    <div className='Home-Container'>
     <div className="left-side left-side-hide" > 
       <Left  />
      </div>
      <div className='center-side-show '>
      <Center/>
      </div>
      <div className='right-side right-side-hide'>
      <Right/>
     </div>
    </div>
  )
}

export default Home
