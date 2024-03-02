import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../store/auth-slice'

const useErrorHandler = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
const verifyErrorMsg=(error)=>{
    let errorMsg = error.response.data.message
    if(errorMsg==="Session Expired."){
        dispatch(setAuth({ isAuthenticated: false, user: null }));
        navigate('/login')
        setTimeout(() => {
          localStorage.removeItem('persist:root');
          localStorage.clear()      
        }, 1000);   
    }
}

return {verifyErrorMsg}


}

export default useErrorHandler