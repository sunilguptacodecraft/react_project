import React, { useState } from "react";
import Banner from "../../components/Layout/Banner";
import User from "../../components/Admin/User";
import { useDispatch } from "react-redux";
import { setChangePasswordDetail, setUserDetail } from "../../store/userDetail-slice";
import { useNavigate } from "react-router-dom";
import { useUserManagement } from "../../hooks";

const UserManagement = () => {

  const {allUsers,setAllUsers,isLoading} = useUserManagement()
  const [statusMsg,setStatusMsg] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const changePasswordHandler = (userId, email) => {
    dispatch(setChangePasswordDetail({ userId, email}));
    navigate("/admin/change-password");
  };  
  
  const updateUserHandler = (userDetail) => {
    dispatch(setUserDetail(userDetail));
    navigate("/admin/update-user");
  };


  
  return (
    <>
      <Banner bannerTitle="User Management" classes="payment-recieved " />

      <section className="bg-data">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-text">
                <h1 className="main-text">User Management</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row custom-margin-fil mb-4">
            <div className="col-lg-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.N0.</th>
                    <th>Email</th>
                    <th scope="col">Name</th>

                    <th scope="col">Contact</th>
                    <th scope="col">Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? "Loading...":
                    allUsers?.map((user, index) => (
                      <User
                        key={index}
                        isActive={user.isActive}
                        userId={user.userID}
                        email={user.email}
                        contactNo={user.contactNo}
                        firstName={user.firstName}
                        middleName={user.middleName}
                        lastName={user.lastName}
                        index={index}
                        onPasswordChange={changePasswordHandler}
                        onUpdateUser={updateUserHandler}
                        allUsers={allUsers}
                        setAllUsers={setAllUsers}
                        setStatusMsg={setStatusMsg}
                        statusMsg={statusMsg}
                      />
                    ))}
                </tbody>
              </table>
            </div>

            <div className="col-lg-12">
              <div className="paginations">
                <div className="btn-wraps-pagin">
                  <div className="bts-find">
                    <button type="button" className="btn btn-info active psgis">
                      1
                    </button>
                  </div>
                  <div className="bts-find">
                    <button type="button" className="btn btn-info psgis">
                      2
                    </button>
                  </div>
                  <div className="bts-find">
                    <button type="button" className="btn btn-info psgis">
                      3
                    </button>
                  </div>
                  <div className="bts-find">
                    <button type="button" className="btn btn-info psgis">
                      4
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default UserManagement;
