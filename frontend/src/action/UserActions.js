import axios from "axios"
import { REGISTER_CREATE_FAIL, 
    REGISTER_CREATE_SUCCESS ,
    REGISTER_CREATE_REQUIEST,
    LOGIN_CREATE_FAIL, 
    LOGIN_CREATE_SUCCESS ,
    LOGIN_CREATE_REQUIEST,
    REGISTER_ERROR_CLEAR,
    LOGIN_ERROR_CLEAR,
    LOGOUT_REQUEST,
    PROFILE_UPDATE_REQUIEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,
    PROFILE_SINGLE_GET_REQUIEST,
    PROFILE_SINGLE_GET_SUCCESS,
    PROFILE_SINGLE_GET_FAIL,
    GET_ALL_USERS_REQUIEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_SINGLE_USERS_REQUIEST,
    GET_SINGLE_USERS_SUCCESS,
    GET_SINGLEL_USERS_FAIL,
    FOLLOW_USERS_REQUIEST,
    FOLLOW_USERS_SUCCESS,
    FOLLOW_USERS_FAIL,

 


} from "../constance/UsersConstance"


//REGISTER
export const RegisterAction = (FromData)=>async(dispatch,getState)=>{
    try{    
    const{userLogin:{userInfo}} = getState()
    const config = {headers:{'Content-Type':'application/json',
    Authorization: userInfo?.token
}}
      dispatch({type:REGISTER_CREATE_REQUIEST})
      const {data} = await axios.post('https://social-communication-web.onrender.com/api/users/register',FromData,config) 
      dispatch({type:REGISTER_CREATE_SUCCESS,
      payload:data
    })
    }
    catch(error){
        dispatch({type:REGISTER_CREATE_FAIL,
        payload:error.response.data.message
        })
    }
}



//LOGIN
export const LoginAction = (FromData)=>async(dispatch,getState)=>{
    try{
      const{userLogin:{userInfo}} = getState()
      const config = {headers:{'Content-Type':'application/json',
      Authorization: userInfo?.token
     }}
      dispatch({type:LOGIN_CREATE_REQUIEST})
      const {data} = await axios.post('https://social-communication-web.onrender.com/api/users/login',FromData,config) 
      dispatch({type:LOGIN_CREATE_SUCCESS,
      payload:data
    })
    localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(error){
        dispatch({type:LOGIN_CREATE_FAIL,
        payload:error.response.data.message
        })
    }
}



//loguout 
export const userLougout=()=>async(dispatch,getState)=>{
  const{userLogin:{userInfo}} = getState()
  const config = {headers:{'Content-Type':'application/json',
  Authorization: userInfo?.token
}}
  dispatch({type:LOGOUT_REQUEST})
  const {data} = await axios.get('https://social-communication-web.onrender.com/api/users/logout',config)

  localStorage.removeItem('userInfo')
}



//clear error
export const clearRegister=()=>(dispatch)=>{
  dispatch({type:REGISTER_ERROR_CLEAR})
}
export const clearLogin=()=>(dispatch)=>{
    dispatch({type:LOGIN_ERROR_CLEAR})
  }

//profile error
export const clearProfileError=()=>(dispatch)=>{
  dispatch({type:PROFILE_UPDATE_RESET})
}


//profile update
export const profileUpdateAcion = (FromData)=>async(dispatch,getState)=>{
  try{
    const{userLogin:{userInfo}} = getState()
    dispatch({type:PROFILE_UPDATE_REQUIEST})
    const {data} = await axios.put('https://social-communication-web.onrender.com/api/users/profile/update',FromData,{
      headers:{Authorization: userInfo?.token}
    }) 
    dispatch({type:PROFILE_UPDATE_SUCCESS,
    payload:data
  })
  }
  catch(error){
      dispatch({type:PROFILE_UPDATE_FAIL,
      payload:error.response.data.message
      })
  }
}


//get single profile
export const getProfileAction=()=>async(dispatch,getState)=>{
  try{
    const{userLogin:{userInfo}} = getState()
    const config = {headers:{'Content-Type':'application/json',
    Authorization: userInfo?.token
}}
    dispatch({type:PROFILE_SINGLE_GET_REQUIEST})
    const {data} = await axios.get('https://social-communication-web.onrender.com/api/users/getprofile',config) 
    dispatch({type:PROFILE_SINGLE_GET_SUCCESS,
    payload:data.profile
  })
  }
  catch(error){
      dispatch({type:PROFILE_SINGLE_GET_FAIL,
      payload:error.response.data.message
      })
  }
}


//profile section like
//get all users
export const allUsersAction=()=>async(dispatch,getState)=>{
  try{
    const{userLogin:{userInfo}} = getState()
    const config = {headers:{'Content-Type':'application/json',
    Authorization: userInfo?.token
}}
    dispatch({type:GET_ALL_USERS_REQUIEST})
    const {data} = await axios.get('https://social-communication-web.onrender.com/api/users/get/all/users',config) 
    dispatch({type:GET_ALL_USERS_SUCCESS,
    payload:data.users
  })
  }
  catch(error){
      dispatch({type:GET_ALL_USERS_FAIL,
      payload:error.response.data.message
      })
  }
}


//get single user

export const singleUserAction=(id)=>async(dispatch,getState)=>{
  try{
    const{userLogin:{userInfo}} = getState()
    const config = {headers:{'Content-Type':'application/json',
    Authorization: userInfo?.token
   }}
    dispatch({type:GET_SINGLE_USERS_REQUIEST})
    const {data} = await axios.get(`https://social-communication-web.onrender.com/api/users/single/user/${id}`,config) 
    dispatch({type:GET_SINGLE_USERS_SUCCESS,
    payload:data.user

  })
  }
  catch(error){
      dispatch({type:GET_SINGLEL_USERS_FAIL,
      payload:error.response.data.message
      })
  }
}


export const FollowUserAction=(id)=>async(dispatch,getState)=>{
  try{
    const{userLogin:{userInfo}} = getState()
    dispatch({type:FOLLOW_USERS_REQUIEST})
    const {data} = await axios.put(`https://social-communication-web.onrender.com/api/post/follower/${id}`,{},{
      headers:{Authorization:userInfo?.token}
    }) 
    dispatch({type:FOLLOW_USERS_SUCCESS,
    payload:data.profileMe

  })
  }
  catch(error){
      dispatch({type:FOLLOW_USERS_FAIL,
      payload:error.response.data.message
      })
  }
}

