import React from 'react'
import './Right_Center.css'
function Right_Center() {
  return (
    <div className='rtght_center_container'>
      <div className='f-users-section'>
         <div className='f-users'>
            <img className='f-image' src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
            <div className='f-name'>
             <span>@name</span>
             <span>@username</span>
            </div>
         </div>
         <button className='f-button'>follow</button>

      </div> 
      <div className='button-request'>
        <button>confirm</button>
         <span>Friend Request</span>
        <button>delete</button>
      </div>
    </div>
  )
}

export default Right_Center
