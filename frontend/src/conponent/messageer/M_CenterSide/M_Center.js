import React, { useEffect, useRef, useState } from 'react'
import './M_Center.css'
import Chats from './Chats'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMessageAction } from '../../../action/MessageAction';
import ChatsLodder from './ChatsLodder';
import InputEmoji from "react-input-emoji";
import M_Left from '../M_LeftSide/M_Left';
// import {io} from 'socket.io-client'
function M_Center({receverId}) {
  const dispatch = useDispatch();
  const [showMbar,setShowMbar] = useState(false)
  const [message,setMessage] = useState("")
  const {lodding,error,userMessages}=useSelector(state=>state.getMessages);
  // const [arrivalMessage,setArrivalMessage] = useState(null)
  // const {user} = useSelector(state=>state.userLogin.userInfo)
  // const socket = useRef()
  // const[sendMessage,setSendMessage] = useState([])
  // const[reciveMessage,setReceiveMessage] = useState([userMessages])
 const  messageHandler=(receverId)=>{
 if(receverId){
 dispatch(createMessageAction({message,receverId}))
 setMessage("")
//  const messages={
//   senderId:user._id,
//   receverId,
//   text:message
//  }
//  setSendMessage({...messages,receverId})

 }
 }


//  useEffect(()=>{
//   socket.current = io("ws://localhost:8900")
  
// },[])
//  useEffect(()=>{
//   socket.current.emit("addUsers",user._id)
//   socket.current.on("getUsers",actigeUsers=>{
//     console.log(actigeUsers)
//   })
//  },[user])

//  useEffect(()=>{
//  if(sendMessage !==null){
//   socket.current.emit("send_message",sendMessage)
//  }
//  },[sendMessage])
//  useEffect(()=>{
//    socket.current.on("receive_message",data=>{
//    setReceiveMessage([...reciveMessage,data])
//    })
//  },[reciveMessage])

  return (
    <>
     <div className='center__Container'>
        <div className='center__Top'> 
          <div>
            <Link to='/'><img title='home'src='https://img.freepik.com/premium-photo/living-house-cozy-minimalism-simple-buiding-ai-generated_946993-5806.jpg' className='homes-image'/></Link>
            <Link onClick={()=>setShowMbar((pre)=>!pre)}><img title='friends'src='https://t3.ftcdn.net/jpg/05/27/39/92/240_F_527399250_WZCmXSxtJvaZ0XZ1YW9YU8j9kikQXeuW.jpg' className='homes-image'/></Link>
          </div>
           <p>Message Section</p>
           <div className='Center__Header__icon'>
           <div>
           <img className='icon-images' src='https://cdn-icons-png.flaticon.com/512/10703/10703269.png'/> 
           </div>
          <div className='bal-section'>
          <span>45</span>
         <img className='icon-images' src='https://i.pinimg.com/736x/ce/6b/19/ce6b1923315ed5a668974a3a13d1083a.jpg'/>
         </div>
         <div className='bal-section'> 
         <span>2</span>
         <img className='icon-images'  src='https://cdn-icons-png.flaticon.com/512/4885/4885755.png'/>
        </div>
         </div>
        </div>
         {showMbar && 
           <div className='friends__section__min'>
           <M_Left/>
         </div>
         }
          <div className='center__Bottom'> 
         {receverId && receverId?(
           <div>
           <Chats />
          </div>):(
          <div className='chat__home__container'>
            <div className='chat__box__logo'>
            <div><h1>Chat Box</h1></div>
            </div>
            <div>
              <h1></h1>
            </div>
          </div>
          )
      }
        </div>
      {receverId &&
       <div className='Chat__Box'>
       {lodding && (<div className='chat__lodding'><ChatsLodder/></div>)}
        <InputEmoji
         value={message} 
         onChange={setMessage}
         placeholder="Type a message"
         />
       <button onClick={()=>messageHandler(receverId)}>Send</button>
     </div>
      }
    </div>
    </>
  )
}

export default M_Center
