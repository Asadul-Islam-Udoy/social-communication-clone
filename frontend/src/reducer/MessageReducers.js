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


export const getUserMessagesReducer=(state={userMessages:[]},action)=>{
    switch(action.type){
      case GET_USER_MESSAGES_REQUEST:
        return{
            ...state,
            lodding:true,
            userMessages:[]
        }
        case CREATE_MESSAGE_REQUEST:
            return{
                ...state,
                lodding:true
            }
         case GET_USER_MESSAGES_SUCCESS:
            return{
                ...state,
                lodding:false,
                userMessages:action.payload
            }
        case CREATE_MESSAGE_SUCCESS:
            return{
                ...state,
                lodding:false,
                userMessages:action.payload
            }
        case GET_USER_MESSAGES_FAIL:
            case  CREATE_MESSAGE_FAIL:
          return{
            ...state,
             lodding:false,
             error:action.payload
       }
       case GET_CREARE_USER_MESSAGES_CREAR_ERROR:
        return{
            error:null
        }
     default :
     return state
    }
}


export const getMessageUserReducer=(state={MessageUser:[]},action)=>{
    switch(action.type){
      case GET_Message_USER_REQUEST:
        return{
            lodding:true,
            MessageUser:[]
        }
        case GET_Message_USER_SUCCESS:
            return{
                lodding:false,
                MessageUser:action.payload
            }
        case GET_Message_USER_FAIL:
          return{
             lodding:false,
             error:action.payload
       }
       case GET_CREARE_USER_MESSAGES_CREAR_ERROR:
        return{
            error:null
        }
     default :
     return state
    }
}