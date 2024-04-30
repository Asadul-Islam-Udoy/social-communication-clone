import React from 'react'
import './Top_Left.css'
function Top_Left() {
  return (
    <div className='Top-Contarner'>
       <img className='logo-image' src='../image/posts/logo.ico' alt='name'/>
       <input className='top-search-input' type='text' placeholder='# enter..' name='seach' />
    </div>
  )
}

export default Top_Left
