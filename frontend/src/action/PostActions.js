
import { POST_CREATE_FAIL, 
    POST_CREATE_SUCCESS ,
    POST_CREATE_REQUIEST,
    POST_GET_REQUEST,
    POST_GET_SUCCESS,
    POST_GET_FAIL,
    GET_USER_POST_REQUEST,
    GET_USER_POST_SUCCESS,
    GET_USER_POST_FAIL,
    CREATE_COVER_SUCCESS,
    CREATE_COVER_REQUEST,
    CREATE_COVER_FAIL,
    MY_POST_REQUEST,
    MY_POST_SUCCESS,
    MY_POST_FAIL,
    POST_LIKE_SUCCESS,
    POST_LIKE_FAIL,
    POST_LIKE_REQUEST,
    MY_POST_DELETE_SUCCESS,
    MY_POST_DELETE_REQUEST,
    MY_POST_DELETE_FAIL,
    MY_POST_RESET
  

} from "../constance/PostsConstance"
 import axios from 'axios'


 export const postLikeAction=(id,userId)=>async(dispatch,getState)=>{
    try{
    dispatch({type:POST_LIKE_REQUEST})
    const {data} = await axios.put(`https://social-communication-web.onrender.com/api/post/like/${id}/${userId}`)
    dispatch({type:POST_LIKE_SUCCESS,
    payload:data
    })
    }catch(error){
     dispatch({type:POST_LIKE_FAIL,
     payload:error.response.data.message
    })   
    }
  
  }


//create post
export const createPostAction =(FromData)=>async(dispatch,getState)=>{
 try{
    const{userLogin:{userInfo}} = getState()
    dispatch({type:POST_CREATE_REQUIEST})
    const {data} = await axios.post('https://social-communication-web.onrender.com/api/post/posts/create',FromData,{
        headers:{Authorization: userInfo?.token}
    })
    dispatch({type:POST_CREATE_SUCCESS,
    payload:data.posts
    })
 }
 catch(error){
  dispatch({type:POST_CREATE_FAIL,
    payload:error.response.data.message
})
 }
}


//get all posts

export const getAllPostAction=()=>async(dispatch,getState)=>{
    try{
        const{userLogin:{userInfo}} = getState()
        const config = {headers:{'Content-Type':'application/json',
        Authorization: userInfo?.token
        }}
        dispatch({type:POST_GET_REQUEST})
        const { data } = await axios.get('https://social-communication-web.onrender.com/api/post/posts',config);
        dispatch({type:POST_GET_SUCCESS,
        payload:data.posts
        })
    }
    catch(error){
        dispatch({type:POST_GET_FAIL,
        payload:error.response.data.message
        })
    }
}

//like section




//get user post

export const getUserPostAction=()=>async(dispatch,getState)=>{
    try{
    const{userLogin:{userInfo}} = getState()
        const config = {headers:{'Content-Type':'application/json',
        Authorization: userInfo?.token
    }}
    dispatch({type:GET_USER_POST_REQUEST})
    const {data} = await axios.get('https://social-communication-web.onrender.com/api/post/get_user_post',config)
    dispatch({type:GET_USER_POST_SUCCESS,
    payload:data.posts
    })
    }catch(error){
     dispatch({type:GET_USER_POST_FAIL,
     payload:error.response.data.message
    })   
    }

}
//cover image
export const createCoverImageAction=(coverData)=>async(dispatch,getState)=>{
    try{
    const{userLogin:{userInfo}} = getState()
    dispatch({type:CREATE_COVER_REQUEST})
    const {data} = await axios.put('https://social-communication-web.onrender.com/api/post/create/cover',coverData,{
    headers:{Authorization: userInfo?.token}
    })
    dispatch({type:CREATE_COVER_SUCCESS,
    payload:data
    })
    }catch(error){
     dispatch({type:CREATE_COVER_FAIL,
     payload:error.response.data.message
    })   
    }

}


//my posts
export const myPostAction=()=>async(dispatch,getState)=>{
    try{
    const{userLogin:{userInfo}} = getState()
        const config = {headers:{'Content-Type':'application/json',
        Authorization: userInfo?.token
    }}
    dispatch({type:MY_POST_REQUEST})
    const {data} = await axios.get('https://social-communication-web.onrender.com/api/post/my/posts',config)
    dispatch({type:MY_POST_SUCCESS,
    payload:data.posts
    })
    }catch(error){
     dispatch({type:MY_POST_FAIL,
     payload:error.response.data.message
    })   
    }

}
//deletemy post
export const DeletePostAction=(id)=>async(dispatch,getState)=>{
    try{
        const{userLogin:{userInfo}} = getState()
        const config = {headers:{'Content-Type':'application/json',
        Authorization: userInfo?.token
    }}
    dispatch({type:MY_POST_DELETE_REQUEST})
    const {data} = await axios.put(`https://social-communication-web.onrender.com/api/post/my/posts/${id}`,config)
    dispatch({type:MY_POST_DELETE_SUCCESS,
    payload:data.posts
    })
    }catch(error){
     dispatch({type:MY_POST_DELETE_FAIL,
     payload:error.response.data.message
    })   
    }

}

///clear post 

export const ClearPostError=()=>(dispatch)=>{
    dispatch({type:MY_POST_RESET})
}