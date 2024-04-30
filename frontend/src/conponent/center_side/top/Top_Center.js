import React, { useEffect, useRef, useState } from 'react'
import './Top_Center.css'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { createPostAction } from '../../../action/PostActions'
import Lodder from '../../lodder/Lodder'
function Top_Center() {
  const alert = useAlert()
  const [image,setImage] = useState('')
  const [ imageProvider,setImageProvider] = useState()
  const [description,setDescription] =useState('')
  const photo = useRef()
  const dispatch = useDispatch();
  const{lodding,error} = useSelector(state=>state.myposts)

  const postHandler =(e)=>{
    e.preventDefault();
    const myFrom = new FormData();
    myFrom.set('image',image)
    myFrom.set('description',description)
    dispatch(createPostAction(myFrom))
    setImage("")
    setDescription("")
  }
useEffect(()=>{
  if(error){
    alert.error(error)
  }
},[lodding,alert,error])
  return (
   <>
    {lodding && <Lodder/>}
    <div className='Top_Container'>
     <div className='mind-section'>
        <img className='mind-image'src='../image/users/men1.png' alt=''/>
        <input className='mind-input' value={description} onChange={(e)=>setDescription(e.target.value)} type='text' placeholder='what is your mind ?'/>
     </div>
     <div className='shara-section'>
       <div  onClick={()=>photo.current.click()}>
        <img  className='shar-image' src='https://img.icons8.com/?size=60&id=0sHzWoTXIFqd&format=png' alt=''/>
        <span className='photo'>Photo</span>
       </div>
       <div>
        <img  className='shar-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvc3_BLc-ciOUGl_uLFp-2fnQC1FcrZriMT73M-D16sudkWb8y4dUJ4dbHTirqC5tzOYc&usqp=CAU' alt=''/>
        <span className='vido'>Video</span>
       </div>
       <div>
        <img className='shar-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27DJdlbqOWna7pdNNGXwVBrg76vN9hnDzIQ&usqp=CAU' alt=''/>
        <span className='location'>location</span>
       </div>
       <div>
        <img className='shar-image' src='https://e7.pngegg.com/pngimages/503/343/png-clipart-computer-icons-calendar-date-wedding-ceremony-miscellaneous-calendar.png' alt=''/>
        <span className='sehedule'>sehedule</span>
       </div>
        <div className='posts-input'>
        <input ref={photo} type='file' name='image' onChange={(e)=>setImage(e.target.files[0])}  />
        </div>
       <div className='share-button-section'>
        <button onClick={postHandler}>Share</button>
       </div>
     </div>
     {image &&
     <div className='show-posts'>
     <img className='show-image' src={image && URL.createObjectURL(image)}/>
    </div>
     }
    </div>
   </>
  )
}

export default Top_Center
