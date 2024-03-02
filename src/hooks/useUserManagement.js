import { useEffect, useState } from "react"
import { getAllUsers } from "../services/Admin/user-management"
import { initAxios } from "../helper-functions/initAxios"

const useUserManagement = () => {
    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const getAllUsersHandler = async()=>{
        setIsLoading(true)
        try {
         let res = await getAllUsers() 
         setAllUsers(res.data)
        } catch (error) {
          return error
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {       
      initAxios()
        getAllUsersHandler()
      }, [])

  return {allUsers,setAllUsers,isLoading}
}

export default useUserManagement