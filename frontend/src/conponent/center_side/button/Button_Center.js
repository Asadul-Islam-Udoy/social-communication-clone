import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Button_Center.css'
import Comment from './commnet/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { ClearPostError, DeletePostAction, postLikeAction } from '../../../action/PostActions';
import { useAlert } from 'react-alert';
function Button_Center({post}) {
    const alert = useAlert()
    const {user} = useSelector(state=>state.userLogin.userInfo)
    const [likeLove,setLikeLove] = useState(post.likes.includes(user._id))
    const[comment,setComment] = useState(false);
    const[details,setDetails] = useState(false)
    const[like,setLike] = useState(post.likes.length)
    const dispatch = useDispatch();
    const{lodding,error,postDelete} = useSelector(state=>state.myposts)
    function postLikeHandler(postId,userId){
    setLikeLove((pre)=>!pre)
    dispatch(postLikeAction(postId,userId))
    likeLove?setLike(pre=>pre-1):setLike(pre=>pre+1)
   }

   function deleteHandler(postId){
    dispatch(DeletePostAction(postId))
   }


   useEffect(()=>{
    if(error){
      alert.error(error)
       dispatch(ClearPostError())
    }
    if(postDelete){
      alert.success('post is deleting success')
      dispatch(ClearPostError())
    }
   },[dispatch,alert,error,postDelete])

  return (
    
    <>
    <div className='Button-Container'>
      <div className='details-section'>
      <span className='dot-icon'><MoreHorizIcon onClick={(e)=>setDetails(pre=>!pre)} className='d-icon'/></span>
      {post && post.user === user._id?
       <div>
        {details?
       <div className='details-posts-section'>
       <p onClick={(e)=>deleteHandler(post._id)}>Delete</p>
       <p>Details</p>
      </div>:'' 
        }
        </div>:''
       }
      </div>
        <div className='post-image-section'>
          <img  className='post-imge' src={`../posts/${post.image}`} alt=''/>
        </div>
         <div className='icon-section'>
           <img title='like' onClick={e=>postLikeHandler(post._id,user?._id)} className='icon-image'
             src={likeLove ? 'https://img.freepik.com/free-photo/red-heart-paper-hand-craft-element_53876-128923.jpg?size=626&ext=jpg&ga=GA1.2.1291529831.1679838217&semt=ais':
             'https://img.freepik.com/premium-photo/pretty-blue-heart-illustration-with-isolated-background_742252-4484.jpg?w=740'
            }/>
            <img title='commenet' onClick={(e)=>comment?setComment(false):setComment(true)} className='icon-image' src='https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-rose.png'/>
            <img title='share' className='icon-image' src='https://pngfreepic.com/wp-content/uploads/2022/11/44a34b13-350x350.png?v=1667457176'/>
        </div>
        <span className='like-count'>{like} like</span>
        <div className='description'>
           <p>{post.description}</p>
        </div>
      {comment &&   <Comment/>}
    </div>
    </>
    
    
  )
}

export default Button_Center
