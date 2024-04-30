import React, { useEffect} from 'react'
import './M_Left.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorConvartion, getMessageUserAction, getUserMessagesAction } from '../../../action/MessageAction';
import { useAlert } from 'react-alert';
import UsersLodder from './UsersLodder';
import { Link } from 'react-router-dom';

function M_Left() {
    const alert = useAlert()
    const {lodding,error,MessageUser} = useSelector(state=>state.getMessageUser)
    const dispatch = useDispatch()
    useEffect(()=>{
     if(error){
       alert.error(error)
     }
     dispatch(getMessageUserAction())
    },[dispatch,alert,error])

    return (
    <>
     <div className='Left__Container'>
      <div className='Left__Top'>
       <input placeholder='search..'/>
       <div>
         <SearchIcon className='search__icon'/>
       </div>
      </div>
      <p className='active__friend'>Active Friend</p>
      {lodding ?<UsersLodder/>:
       MessageUser && MessageUser.map((item)=>(
        <div className='Left__Header'>
        <div className='Left__Button'>
         <div>
         <img className='user__image'src={`/profiles/${item.avatar}`}/>
         </div>
          <div>
              <Link  className='usrs_name' to={`/user/messager/box/${item.user}`}>
                <span>@{item.username} </span>
              </Link>
              <p>hi everyone </p>
         </div>
       </div>
        </div>
      ))}
     </div>
    </>
  )
}

export default M_Left
