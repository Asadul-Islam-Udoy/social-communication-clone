import React,{useEffect, useState} from 'react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { clearProfileError, profileUpdateAcion } from '../../../action/UserActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#fff',
    width:'40%'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
function Profile_Modal({info,setInfo}) {
    const [first_name,setFirstName] = useState('')
    const [last_name,setLastName] = useState('')
    const [username,setUserName] = useState('')
    const [works,setWroks] = useState('')
    const [lives,setLives] = useState('')
    const [country,setCountry] = useState('')
    const[image,setImage] = useState('')
    const[ustatus,setStatus] = useState('')

    const alert = useAlert()
    const dispatch = useDispatch()
    const {lodding,error,isProfileUpdate} = useSelector(state=>state.profileUpdate)


    const profileHandler =(e)=>{
    e.preventDefault();
    const myFrom = new FormData();
    myFrom.set('first_name',first_name)
    myFrom.set('last_name',last_name)
    myFrom.set('username',username)
    myFrom.set('ustatus',ustatus)
    myFrom.set('works',works)
    myFrom.set('lives',lives)
    myFrom.set('country',country)
    myFrom.set('avatar',image)
    dispatch(profileUpdateAcion(myFrom))
    }   


    useEffect(()=>{
     if(error){
      alert.error(error)
      dispatch(clearProfileError())
     } 
     if(isProfileUpdate){
      alert.success('profile update successfully!')
     }
    },[dispatch,alert,error,isProfileUpdate])
  return (
    <div>
      <Modal
        isOpen={info}
        onRequestClose={(e)=>setInfo(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{textAlign:'center',color:'red'}}>Your Information</div>
        <form className='modal-from' onSubmit={profileHandler}>
         <div> 
          <input value={first_name} onChange={(e)=>setFirstName(e.target.value)} type='text' placeholder='first name'/>
          <input value={last_name} onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last name'/>
        </div>
        <div> 
          <input value={ustatus} onChange={(e)=>setStatus(e.target.value)} type='text' placeholder='status'/>
        </div>
        <div> 
          <input value={username} onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='username'/>
        </div>
        <div> 
          <input value={works} onChange={(e)=>setWroks(e.target.value)} type='text' placeholder='works'/>
        </div>
        <div> 
          <input value={lives} onChange={(e)=>setLives(e.target.value)} type='text' placeholder='lives'/>
          <input value={country} onChange={(e)=>setCountry(e.target.value)} type='text' placeholder='country'/>
        </div>
        
        <div className='image-modal'> 
         <div>
          Avatar Image
          <input onChange={(e)=>setImage(e.target.files[0])} type='file'/>
         </div>
        </div>
        <div  className='modal-button'>
            <button type='submit'>Update</button>
        </div>
        </form>
      </Modal>
    </div>
  );
}
export default Profile_Modal