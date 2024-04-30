import React from 'react'
import { useAlert } from 'react-alert'
import { Navigate } from 'react-router-dom'

function ProtectedUser( {userAuth , children} ) {
    const alert = useAlert()
  if(!userAuth){
    alert.error('please login now')
    return<Navigate to='/login' replace />
    
  }
  return children
}

export default ProtectedUser
