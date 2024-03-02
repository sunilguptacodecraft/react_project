import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initAxios } from "../helper-functions/initAxios";
import { orderHistory } from "../services/order";
import { convertDateToLocal } from "../helper-functions/dateConversion";
import { setOrderId } from "../store/orderId-slice";

import Banner from "../components/Layout/Banner";
import OrdersPaginatedList from "../components/Pagination/OrdersPaginatedList";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: userData } = useSelector((state) => state.auth);
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(history?.length / itemsPerPage);

  const viewDetailHandler = (id) => {
    dispatch(setOrderId({ orderId: id }));
    navigate("/order-detail");
  };
  const getOrderHistory = async () => {
    try {
      const id = userData.userID;
      const res = await orderHistory(id);
      setHistory(res.data);
      const convertedHistory = res.data.map((order) => ({
        ...order,
        orderDate: convertDateToLocal(order.orderDate),
      }));
      setHistory(convertedHistory);
    } catch (error) {}
  };
  useEffect(() => {
    initAxios();
    getOrderHistory();
  }, []);
  return (
    <>
      

      <Banner bannerTitle="Order History" classes="searchhistory"/>

      <section className="history-bg ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row my-3 ">
            <div className="col-lg-6">
              <div className="login-text">
                <h1 className="main-text text-start">Order History</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="historybg">
        <div className="container">
          <div className="row custom-margin-fil mb-4">
           <OrdersPaginatedList data={history} currentPage={currentPage} itemsPerPage={itemsPerPage} viewDetailHandler={viewDetailHandler}/>
            <div className="col-lg-12">
              <div className="paginations">
                <div className="btn-wraps-pagin">
                  <div className="bts-find">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
          type="button"
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
            className="btn btn-info active psgis-2 me-1"
          >
            {pageNumber}
          </button>
        ))}
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

export default OrderHistory;
