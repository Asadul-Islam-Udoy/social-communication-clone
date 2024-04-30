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
export const registerCreateReducer =(state={},action)=>{
 switch(action.type){
    case REGISTER_CREATE_REQUIEST:
        return{
            ...state,
            lodding:true,
            isCreateRegister:false
        }
    case REGISTER_CREATE_SUCCESS:
        return{
            ...state,
            lodding:false,
            isCreateRegister : true
        }
    case REGISTER_CREATE_FAIL:
        return{

            ...state,
            isCreateRegister:false,
            error:action.payload,
            lodding:false
        }
    case REGISTER_ERROR_CLEAR:
        return{
                lodding:false,
                isCreateRegister:false,
                error:null  
        }
    default :
       return state
 }
}
//LOGIN
export const userCreateReducer =(state={},action)=>{
    switch(action.type){
       case LOGIN_CREATE_REQUIEST:
           return{
               ...state,
               lodding:true,
               isCreateLogin:false,
               userInfo:{}
           }
       case LOGIN_CREATE_SUCCESS:
           return{
               ...state,
               lodding:false,
               isCreateLogin: true,
               userInfo:action.payload
           }
       case LOGIN_CREATE_FAIL:
           return{
   
               ...state,
               isCreateLogin:false,
               error:action.payload,
               lodding:false
           }
        case LOGOUT_REQUEST:
            return{
                userInfo:null,
                isCreateLogin:false
            }
        case LOGIN_ERROR_CLEAR:
            return{
                lodding:false,
                isCreateLogin:false,
                error:null
            }
       default :
          return state
    }
   }



  
   //profile update

   export const profileUpdateReducer =(state={},action)=>{
    switch(action.type){
       case PROFILE_UPDATE_REQUIEST:
           return{
               ...state,
               lodding:true,
               isProfileUpdate:false
           }
       case PROFILE_UPDATE_SUCCESS:
           return{
               ...state,
               lodding:false,
               isProfileUpdate : true
           }
       case PROFILE_UPDATE_FAIL:
           return{
   
               ...state,
               isProfileUpdate:false,
               error:action.payload,
               lodding:false
            
            }
        
        case PROFILE_UPDATE_RESET:
            return{
                ...state,
                error:null
              
             
             }
       default :
          return state
    }
   }



   //get profile

   export const profileSingleReducer =(state={},action)=>{
    switch(action.type){
       case PROFILE_SINGLE_GET_REQUIEST:
       case GET_SINGLE_USERS_REQUIEST:
        case FOLLOW_USERS_REQUIEST:
        
           return{
               ...state,
               lodding:true,
               
           }
        case PROFILE_SINGLE_GET_SUCCESS:
          case GET_SINGLE_USERS_SUCCESS: 
           return{
               ...state,
               lodding:false,
               profile:action.payload
           }
           case FOLLOW_USERS_SUCCESS:
            return{
                ...state,
                lodding:false,   
            }
       case PROFILE_SINGLE_GET_FAIL:
       case GET_SINGLEL_USERS_FAIL:
       case FOLLOW_USERS_FAIL:
    
           return{
   
               ...state,
                error:action.payload,
               lodding:false
            
            }
       default :
          return state
    }
   }

   //get all users
   export const getAllUsersReducer =(state={users:[]},action)=>{
    switch(action.type){
       case GET_ALL_USERS_REQUIEST:
           return{
               ...state,
               lodding:true,
               users:[]
               
           }
       case GET_ALL_USERS_SUCCESS:
           return{
               ...state,
               lodding:false,
               users:action.payload
           }
       case GET_ALL_USERS_FAIL:
     
       default :
          return state
    }
   }