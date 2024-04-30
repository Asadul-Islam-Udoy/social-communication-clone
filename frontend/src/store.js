import { legacy_createStore as createStore } from "redux";
import { combineReducers,applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
import { coverCreateReducer, getMyPostReducer, getPostReducer, getUserPostReducer, postCreateReducer } from "./reducer/PostReducers";
import { getAllUsersReducer, profileSingleReducer, profileUpdateReducer, registerCreateReducer, userCreateReducer } from "./reducer/UserReducers";
import { getMessageUserReducer, getUserMessagesReducer } from "./reducer/MessageReducers";

const reducer =combineReducers({
 register: registerCreateReducer,
 userLogin:userCreateReducer,
 getPosts:getPostReducer,
 profileUpdate:profileUpdateReducer,
 singleProfile:profileSingleReducer,
 getUserPosts : getUserPostReducer,
 coverImage:coverCreateReducer,
 allusers:getAllUsersReducer,
 myposts : getMyPostReducer,
 getMessages:getUserMessagesReducer,
 getMessageUser:getMessageUserReducer,

})
const loginSystem = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')):null
const initialState = {
userLogin:{userInfo:loginSystem}
}
const middleware = [thunk]

const store =  createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store