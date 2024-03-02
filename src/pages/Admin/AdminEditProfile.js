import React from "react";
import Banner from "../../components/Layout/Banner";
import EditProfile from "../../components/Admin/EditProfile";

const AdminEditProfile = () => {
  return (
    <>
      <Banner bannerTitle="Edit Profile Data" classes="changepassword" />

      <section className="bg-data">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-text">
                <h1 className="main-text">Add Profile Data</h1>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <EditProfile />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminEditProfile;
