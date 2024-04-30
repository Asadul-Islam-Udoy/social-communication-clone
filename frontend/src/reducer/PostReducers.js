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

//mypost
export const getMyPostReducer = (state={posts:[]},action)=>{
    switch(action.type){
           case MY_POST_REQUEST:
            case MY_POST_DELETE_REQUEST:
                case POST_CREATE_REQUIEST:
           return {
               ...state,
               lodding:true,
               posts:[]
           }
           case MY_POST_SUCCESS:
            case POST_CREATE_SUCCESS:
           return{
               ...state,
               lodding:false,
               posts:action.payload
               
           }
           case MY_POST_DELETE_SUCCESS:
            return{
                ...state,
                lodding:false,
                posts:action.payload,
                postDelete:true 
            }
           case MY_POST_FAIL:
            case MY_POST_DELETE_FAIL:
                case POST_CREATE_FAIL:
           return{
               ...state,
               lodding:false,
               error:action.payload
           }
           case MY_POST_RESET:
            return{
                error:null,
                postDelete:false
            }
       default :
       return state
    }
   }

//get posts

export const getPostReducer = (state={posts:[]},action)=>{
 switch(action.type){
    case POST_GET_REQUEST:
        case MY_POST_REQUEST:
        return {
            ...state,
            lodding:true,
            posts:[]
        }
    case POST_LIKE_REQUEST:
        return{
            ...state,
            isLike : false,
        }


    case POST_GET_SUCCESS:
        case MY_POST_SUCCESS:
        return{
            ...state,
            lodding:false,
            posts:action.payload
            
        }
    case POST_LIKE_SUCCESS:
        return{
            ...state,
            lodding:false,
            isLike:true,

        }
    case POST_LIKE_FAIL:
        return{
            ...state,
            lodding:false,
            isLike:false,
            error:action.payload  
        }
    case POST_GET_FAIL:
        case MY_POST_FAIL:
        return{
            ...state,
            lodding:false,
            error:action.payload
        }
    default :
    return state
 }
}

//get user posts

export const getUserPostReducer =(state={posts:[]},action)=>{
    switch(action.type){
       case GET_USER_POST_REQUEST:
           return{
               ...state,
               lodding:true,
               posts:[],
           }
       case GET_USER_POST_SUCCESS:
           return{
               ...state,
               lodding:false,
               posts:action.payload,
           }
       case GET_USER_POST_FAIL:
           return{
   
               ...state,
               error:action.payload,
               lodding:false
           }
       default :
          return state
    }
   }
   
   //create cover image

   export const coverCreateReducer =(state={},action)=>{
    switch(action.type){
       case CREATE_COVER_REQUEST:
           return{
               lodding:true,
               isCreateCover:false
           }
       
       case CREATE_COVER_SUCCESS:
           return{
               ...state,
               lodding:false,
               post:action.payload,
               isCreateCover : true
           }
       case CREATE_COVER_FAIL:
           return{
   
               ...state,
               isCreateCover:false,
               error:action.payload,
               lodding:false
           }
   
       
       default :
          return state
    }
   }
   