import React from 'react'
import './Posts.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Posts() {
  return (
    <div className='post-section'>
        <span className='p_dot-icon'><MoreHorizIcon className='p_d-icon'/></span>
        <div className='post-image-section'>
          <img  className='post-imge' src='https://static8.depositphotos.com/1327290/827/i/450/depositphotos_8275479-stock-photo-1-su1hxzaynzkuslbh.jpg' alt=''/>
        </div>
         <div className='icon-section'>
            <img className='icon-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckJhPg7-PZ-ypaaVPFqfujvo06qOeliI_A&usqp=CAU'/>
            <img className='icon-image' src='https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-rose.png'/>
            <img className='icon-image' src='https://pngfreepic.com/wp-content/uploads/2022/11/44a34b13-350x350.png?v=1667457176'/>
        </div>
        <span className='like-count'>120 like</span>
        <div className='description'>
           <p>Image description: a detailed explanation of an image that provides </p>
        </div>
    </div>
  )
}

export default Posts
