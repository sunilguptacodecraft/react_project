import React, { useState } from "react";
import Banner from "../../components/Layout/Banner";
import AddProfileForm from "../../components/Admin/AddProfile";


const AdminAddProfile = () => {
  
  return (
    <>
      <Banner bannerTitle="Add Profile" classes="changepassword" />

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
            
            <AddProfileForm />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default AdminAddProfile;
