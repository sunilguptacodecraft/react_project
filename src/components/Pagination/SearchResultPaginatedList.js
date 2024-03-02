import React, {useState} from "react";
import important from "../../assets/images/shape/important-a.png";
import camera from "../../assets/images/shape/camera.png";
import anchor from "../../assets/images/shape/anchor-i.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeStatus } from "../../services/Admin/user-management";
import DialogModal from "../Modal/DialogModal";
import { useErrorHandler } from "../../hooks";

const SearchResultPaginatedList = ({
  data,
  currentPage,
  itemsPerPage,
  viewDetailHandler,
}) => {
  const navigate = useNavigate();
  const [toggleStatus, setToggleStatus] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const [statusMsg,setStatusMsg] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDialogModal, setShowDialogModal] = useState(false);
  const { verifyErrorMsg } = useErrorHandler();

  // Calculate the start and end indexes based on the current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const paginatedData = data?.slice(startIndex, endIndex);

  const editProfileHandler = (id) => {
    console.log(id);
    navigate(`/admin/edit-user/${id}`);
  };

  const toggleStatusHandler = async (event) => {
    let status = event.target.checked;
    const payload = {
      userId: user.userId,
      isActive: status,
    };

    try {
      let res = await changeStatus(payload);
      setToggleStatus(status);
      setStatusMsg(res.data.updateMessage);
      setShowDialogModal(true);
    } catch (error) {
      verifyErrorMsg(error);
    }
  };
  
  
  return (
    <div className="col-lg-12">
      {paginatedData?.length > 0 ? (
        paginatedData.map((item, index) => (
          <div key={item.profileID}>
            <div className="main-user-box">
              <div className="wraper-box">
                <div className="wraper-img">
                  <div className="users-imgs">
                    <img src={item.imagePath} alt="" />

                    <div className="active-dot"></div>
                  </div>
                  <div className="users-names">
                    <h3 className="user-names">{item.profileName}</h3>
                    <h3 className="name-dres">{item.gender}</h3>
                    <h3 className="name-dres">{item.countryName}</h3>
                  </div>
                </div>
                <div className="wraper-btn">
                  <div className="bts-find">
                    <button
                      type="button"
                      className="btn btn-primary details-btn"
                      onClick={viewDetailHandler}
                    >
                      View Details
                    </button>
                  </div>
                  <div className="icon-btn">
                    <div className="import-icon" title={item.info}>
                      <img src={important} alt="" />
                    </div>

                    <div className="camera-icon">
                      <PhotoProvider>
                        <PhotoView src={item.imagePath}>
                          <img
                            style={{ cursor: "pointer" }}
                            src={camera}
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                    <div className="user-a">
                      <img src={anchor} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="box-txt textblur">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                error distinctio incidunt similique dolorum necessitatibus et,
                in dolorem ducimus reprehenderit.
              </p>
              <table className="table profile-data-mgt">
                {user.roleId === 1 && (
                  <tbody>
                    <tr>
                      <td className="ctrls d-flex align-items-center justify-content-end mx-1">
                        <label
                          className={`toggle-switch-box switch-rounded ${
                            toggleStatus
                              ? "switch-bg-success"
                              : "switch-bg-danger"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={toggleStatus}
                            onChange={toggleStatusHandler}
                          />
                          <span
                            className="toggle-switch-item"
                            data-tg-on={toggleStatus ? "Active" : ""}
                            data-tg-off={!toggleStatus ? "Inactive" : ""}
                          >
                            <span className="switch-button"></span>
                          </span>
                        </label>
                        <button
                          type="button"
                          className="btn btn-success mx-1"
                          onClick={() => editProfileHandler(item.profileID)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button type="button" className="btn btn-danger mx-1">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p className="text-center">No Data Available...</p>
      )}
        
        <DialogModal status={toggleStatus} message={statusMsg} showDialog={showDialogModal} modalDialogHandler={()=>setShowDialogModal(false)}  />
    </div>
    
  );
};

export default SearchResultPaginatedList;
