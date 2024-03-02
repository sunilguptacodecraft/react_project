import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import SearchResult from "./pages/SearchResult";
import Footer from "./components/Layout/Footer"; 
import PaymentConfirmation from "./pages/PaymentConfirmation";
import SearchInitiate from "./pages/SearchInitiate";
import PurchasedData from "./pages/PurchasedData";
import ProfileDataLocked from "./pages/ProfileDataLocked";
import ProfileDataUnlocked from "./pages/ProfileDataUnlocked";
import BillingInformation from "./pages/BillingInformation";
import Cart from "./pages/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./routing/PrivateRoute";
import UpdateProfile from "./pages/UpdateProfile";
import Favorites from "./pages/Favorites";
import SavedSearches from "./pages/SavedSearches";

import OrderHistory from "./pages/OrderHistory";
import OrderDetail from "./pages/OrderDetail";

import ChangePassword from "./pages/ChangePassword";
import UserManagement from "./pages/Admin/UserManagement";
import AdminChangePassword from "./pages/Admin/AdminChangePassword";
import PreferredProfiles from "./pages/PreferredProfiles";

import AdminAddProfile from "./pages/Admin/AdminAddProfile";
import AdminUserUpdate from "./pages/Admin/AdminUserUpdate";
import AdminEditProfile from "./pages/Admin/AdminEditProfile";



function App() {

  return (
    <>
      <div className="gray_bg body">
        <div className="page-wrapper">
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/* -------Protected Routes Start--------- */}
             <Route element={<PrivateRoute  />}>
               <Route path='/'  exact element={<Navigate to='/purchased-data' />} />
               <Route path='/favorites'  exact element={<Favorites />} />
             <Route
                element={<PurchasedData />}
                path="/purchased-data"
                exact
              />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/saved-searches" element={<SavedSearches />} />

              <Route
                path="/billing-information"
                element={<BillingInformation />}
              />
              <Route path="/cart" element={<Cart />} />

              <Route path="/billing-information" element={<BillingInformation />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/order-detail" element={<OrderDetail />} />

              <Route path="/checkout" element={<Checkout />} />
              <Route path="/preferred-profiles" element={<PreferredProfiles />} />
              <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/admin/change-password" element={<AdminChangePassword />} />

              <Route path="/admin/add-profile" element={<AdminAddProfile />} />

              <Route path="/admin/update-user" element={<AdminUserUpdate />} />
              <Route path="/admin/edit-user/:id" element={<AdminEditProfile />} />



             </Route>
                 {/* -------Protected Routes End--------- */}
              <Route path="/login" element={<Login  />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search-result" element={<SearchResult />} />
              <Route
                path="/payment-confirmation"
                element={<PaymentConfirmation />}
              />
              <Route path="/search-initiate" element={<SearchInitiate />} />
              <Route
                path="/profile-data-locked"
                element={<ProfileDataLocked />}
              />
               <Route
                path="/profile-data-locked/:profileId"
                element={<ProfileDataLocked />}
              />
              
              <Route
                path="/profile-data-unlocked"
                element={<ProfileDataUnlocked />}
              />   

   
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
