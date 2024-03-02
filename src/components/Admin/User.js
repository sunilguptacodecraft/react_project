import React,{useState} from "react";

import { changeStatus, deleteUser } from "../../services/Admin/user-management";
import DeleteUserModal from "../Modal/DeleteUserModal";
import DialogModal from "../Modal/DialogModal";
import { useErrorHandler } from "../../hooks";


const User = ({ email, firstName,middleName,lastName, contactNo, index, isActive, userId, onPasswordChange,onUpdateUser,setAllUsers,allUsers,setStatusMsg,statusMsg  }) => {
  const [toggleStatus, setToggleStatus] = useState(isActive)
  const [showDeleteModal,setShowDeleteModal] = useState(false)
  const [showDialogModal,setShowDialogModal] = useState(false)
  const { verifyErrorMsg } = useErrorHandler();
  const modalShowHandler=()=>setShowDeleteModal(true)
  const modalCloseHandler=()=>setShowDeleteModal(false)

  const toggleStatusHandler = async(event) => {
    let status  = event.target.checked
    const payload = {
      userId,
      isActive:status,
    };
    
    try {
      let res = await changeStatus(payload)
      setToggleStatus(status)
      setStatusMsg(res.data.updateMessage)
      setShowDialogModal(true)
    } catch (error) {
      verifyErrorMsg(error);
    }
  };
  const removeUserHandler = async () => {
    let removeUser = allUsers.filter(item=>item.userID!==userId&&item)
    try {
    let res = await deleteUser(userId)
      setAllUsers(removeUser)
  } catch (error) {
    verifyErrorMsg(error);
  }finally{
    modalCloseHandler()
  }
  };
 
  const truncate = (username) => {
    return username.substring(0, (username + " ").lastIndexOf(" ", 10));
  };
  return (
    <>
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{email ? email : "----"}</td>
        <td>{`${firstName} ${middleName} ${lastName}` ? truncate(`${firstName} ${middleName} ${lastName}`) : "----"}</td>

        <td>{contactNo ? contactNo : "----"}</td>
        <td>
          <label
            className={`toggle-switch-box switch-rounded ${
              toggleStatus ? "switch-bg-success" : "switch-bg-danger"
            }`}
          >
            <input type="checkbox" checked={toggleStatus} onChange={toggleStatusHandler} />
            <span
              className="toggle-switch-item"
              data-tg-on={toggleStatus ? "Active" : ""}
              data-tg-off={!toggleStatus ? "Inactive" : ""}
            >
              <span className="switch-button"></span>
            </span>
          </label>
        </td>
        <td>
          <button type="button" className="btn btn-success mx-1" onClick={()=>onUpdateUser({userId,firstName,middleName,lastName,contactNo,email})}>
            <i className="fas fa-edit"></i>
          </button>
          <button
            type="button"
            className="btn btn-success chan-pass mx-1"
            onClick={()=> onPasswordChange(userId, email)}
          >
            <i className="fa fa-key"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={modalShowHandler}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <DeleteUserModal email={email} showDeleteModal={showDeleteModal} modalCloseHandler={modalCloseHandler}  onDeleteHandler={removeUserHandler}/> 
      
      <DialogModal status={toggleStatus} message={statusMsg} showDialog={showDialogModal} modalDialogHandler={()=>setShowDialogModal(false)}  />
    </>
  );
};

export default User;
