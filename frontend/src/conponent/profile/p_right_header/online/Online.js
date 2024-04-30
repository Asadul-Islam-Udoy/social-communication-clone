import React from 'react'
import './Online.css'
function Online() {
  return (
    <div className='online-container'>
      <div className='p-users-section'>
         <div className='f-users'>
            <img className='f-image' src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
            <div className='f-name'>
             <span>@name</span>
             <span>@username</span>
             
            </div>
            <button className='f-button'>follow</button>
         </div>
        
         <div>
        <div className='p-requet'>
        <button>confirm</button>
         <span>Friend Request</span>
        <button>delete</button>
      </div> 
         </div>
      </div> 
      <div className='online-friend-container'>
        <p>online frind</p>
        <div style={{padding:'10px'}} className='f-users'>
          <div className='online-icon'>
          <span></span>
          <img className='f-image' src='https://plus.unsplash.com/premium_photo-1670002383626-10c63bbe67d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
          </div>
            <div className='f-name'>
             <span>@name</span>
             <span>@username</span>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Online
