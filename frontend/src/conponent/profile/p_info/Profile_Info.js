import React, { useState } from 'react'
import './Profile_Info.css'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link, useNavigate } from 'react-router-dom';
import Profile_Modal from './Profile_Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { userLougout } from '../../../action/UserActions';
function Profile_Info() {
    const navigate = useNavigate()
    const [ info,setInfo] = useState(false);
    const dispatch = useDispatch()
    const alert = useAlert()
    const{lodding,error,profile} = useSelector(state=>state.singleProfile)
    const {user} = useSelector(state=>state.userLogin.userInfo);
    

    function AuthHandler(){
        dispatch(userLougout())
        alert.success('lougout successfully!')
        navigate('/login')
    } 
  return (
    <div className='p_information'>
     <div className='header-info_section'>
       {profile && profile.user === user._id?
       <div className='edits-icon'>
          <DriveFileRenameOutlineIcon onClick={(e)=>info?setInfo(false):setInfo(true)} title='info' className='edit-icon'/>
        <Profile_Modal info={info} setInfo={setInfo}/>
       </div>
          :''} 
         <p className='your-info'>Your Info</p>
       <Link to='/'><img title='home'src='https://img.freepik.com/premium-photo/living-house-cozy-minimalism-simple-buiding-ai-generated_946993-5806.jpg' className='home-image'/></Link>
       </div>

       <div className='status-items'>
         <span>Status :</span><span>{profile && profile.ustatus}</span>
        </div>
        <div className='status-items'>
         <span>Lives :</span> <span>{profile && profile.lives}</span>
        </div>
        <div className='status-items'>
         <span>Work :</span> <span>{profile && profile.works}</span>
        </div>
        <div className='status-items'>
         <span>Country :</span> <span>{profile && profile.country}</span>
        </div>
        {profile && profile.user === user._id ?
         <div className='btn-logot'>
            <button onClick={AuthHandler}>Logout</button>
        </div>:''}
    </div>
  )
}

export default Profile_Info
