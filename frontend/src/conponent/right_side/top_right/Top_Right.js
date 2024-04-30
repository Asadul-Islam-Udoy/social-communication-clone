import React from 'react'
import './Top_Right.css'
import { useNavigate } from 'react-router-dom'
function Top_Right() {
  const navigate = useNavigate()
  function messagesHandler(){
  navigate('/user/messager/page')
  }
  return (
    <div className='Top_Right_Container'>
     <div>
     <img className='icon-images' src='https://cdn-icons-png.flaticon.com/512/10703/10703269.png'/> 
     </div>
     <div className='bal-section'>
      <span>45</span>
     <img className='icon-images' src='https://i.pinimg.com/736x/ce/6b/19/ce6b1923315ed5a668974a3a13d1083a.jpg'/>
     </div>
     <div className='bal-section'> 
     <span>2</span>
     <img className='icon-images' onClick={messagesHandler} src='https://cdn-icons-png.flaticon.com/512/4885/4885755.png'/>
     </div>  
    </div>
  )
}

export default Top_Right
