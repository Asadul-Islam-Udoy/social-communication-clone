import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import EastIcon from '@mui/icons-material/East';
import './Comment.css'
import { Link } from 'react-router-dom';
function Comment() {
  return (
    <div className='comment-Container'>
      <div className='comment-box'>
      <div className='mind-section'>
        <img className='mind-image'src='../image/users/men1.png' alt=''/>
        <input className='mind-input' type='text' placeholder='what is your comments?'/>
       </div>
       <div className='comment-users-section'>
       <div className='v1s'></div>
         <div className='comment'>
           <img className='comment-user-image' src='../image/users/man.png'/>
            <span>Asadul Isalm<EastIcon className='right-icon'/></span>
          <div className='time'>
             <p><LanguageIcon className='time-icon'/> 12/07/2025</p>
          </div>
        </div>
         <div className='comment-description'>
            <p>Image descriptions can define photos,
                 graphics, gifs, and video — basically anything containing visual
                 information. Providing descriptions for imagery and ...</p>
         </div>
         <div className='v1s'></div>
       </div>
       <div className='comment-users-section'>
       <div className='v1s'></div>
         <div className='comment'>
           <img className='comment-user-image' src='../image/users/man.png'/>
            <span>Asadul Isalm<EastIcon className='right-icon'/></span>
          <div className='time'>
             <p><LanguageIcon className='time-icon'/> 12/07/2025</p>
          </div>
        </div>
         <div className='comment-description'>
            <p>Image descriptions can define photos,
                 graphics, gifs, and video — basically anything containing visual
                 information. Providing descriptions for imagery and ...</p>
         </div>
         <div className='v1s'></div>
       </div>
       <div className='comment-users-section'>
       <div className='v1s'></div>
         <div className='comment'>
           <img className='comment-user-image' src='../image/users/man.png'/>
            <span>Asadul Isalm<EastIcon className='right-icon'/></span>
          <div className='time'>
             <p><LanguageIcon className='time-icon'/> 12/07/2025</p>
          </div>
        </div>
         <div className='comment-description'>
            <p>Image descriptions can define photos,
                 graphics, gifs, and video — basically anything containing visual
                 information. Providing descriptions for imagery and ...</p>
         </div>
         <div className='v1s'></div>
       </div>
       <div className='comment-users-section'>
       <div className='v1s'></div>
         <div className='comment'>
           <img className='comment-user-image' src='../image/users/man.png'/>
            <span>Asadul Isalm<EastIcon className='right-icon'/></span>
          <div className='time'>
             <p><LanguageIcon className='time-icon'/> 12/07/2025</p>
          </div>
        </div>
         <div className='comment-description'>
            <p>Image descriptions can define photos,
                 graphics, gifs, and video — basically anything containing visual
                 information. Providing descriptions for imagery and ...</p>
         </div>
         <div className='v1s'></div>
       </div>
       <div className='comment-users-section'>
       <div className='v1s'></div>
         <div className='comment'>
           <img className='comment-user-image' src='../image/users/man.png'/>
            <span>Asadul Isalm<EastIcon className='right-icon'/></span>
          <div className='time'>
             <p><LanguageIcon className='time-icon'/> 12/07/2025</p>
          </div>
        </div>
         <div className='comment-description'>
            <p>Image descriptions can define photos,
                 graphics, gifs, and video — basically anything containing visual
                 information. Providing descriptions for imagery and ...</p>
         </div>
         <div className='v1s'></div>
       </div>

      </div>
    </div>
  )
}

export default Comment
