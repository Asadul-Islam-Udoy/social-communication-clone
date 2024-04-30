import axios from "axios"
import { 
    GET_USER_MESSAGES_FAIL,
    GET_USER_MESSAGES_REQUEST, 
    GET_USER_MESSAGES_SUCCESS ,
    GET_CREARE_USER_MESSAGES_CREAR_ERROR,
    GET_Message_USER_REQUEST,
    GET_Message_USER_SUCCESS,
    GET_Message_USER_FAIL,
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAIL
} from "../constance/MessageConstance"


export const getUserMessagesAction=(id)=>async(dispatch,getState)=>{
try{
const{userLogin:{userInfo}} = getState()
    const config = {headers:{'Content-Type':'application/json',
    Authorization: userInfo?.token
}}
dispatch({type:GET_USER_MESSAGES_REQUEST})
const{data} = await axios.get(`https://social-communication-web.onrender.com/api/message/get/user/messages/${id}`,config)
dispatch({type:GET_USER_MESSAGES_SUCCESS,
payload:data.messages
})
}
catch(error){
dispatch({type:GET_USER_MESSAGES_FAIL,
 payload:error.response.data.message
})
}
}


//get message user profile
    export const getMessageUserAction=()=>async(dispatch,getState)=>{
    try{
        const{userLogin:{userInfo}} = getState()
        const config = {headers:{'Content-Type':'application/json',
        Authorization: userInfo?.token
        }}
    dispatch({type:GET_Message_USER_REQUEST})
    const{data} = await axios.get(`https://social-communication-web.onrender.com/api/users/get/following/me`,config)
    dispatch({type:GET_Message_USER_SUCCESS,
    payload:data.items
    })
    }
    catch(error){
    dispatch({type:GET_Message_USER_FAIL,
     payload:error.response.data.message
    })
    }
    }

//create messsage
export const createMessageAction=({message,receverId})=>async(dispatch,getState)=>{
    try{   
    const{userLogin:{userInfo}} = getState()
    dispatch({type:CREATE_MESSAGE_REQUEST})
    const{data} = await axios.post(`https://social-communication-web.onrender.com/api/message/create/message`,{message,receverId},{
        headers:{Authorization: userInfo?.token} 
    })
    dispatch({type:CREATE_MESSAGE_SUCCESS,
    payload:data.messages
    })
    }
    catch(error){
    dispatch({type:CREATE_MESSAGE_FAIL,
     payload:error.response.data.message
    })
    }
    }


//cler error
export const clearErrorConvartion=()=>(dispatch)=>{
 dispatch({type:GET_CREARE_USER_MESSAGES_CREAR_ERROR})
}