import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initAxios } from "../helper-functions/initAxios";
import { orderDetail } from "../services/order";
import { useSelector } from "react-redux";
import { convertDateToLocal, convertTimeToLocal } from "../helper-functions/dateConversion";
import Banner from "../components/Layout/Banner";
import OrderItemList from "../components/OrderItemList";

const OrderDetail = () => {
  const navigate=useNavigate()
  const [detail, setDetail] = useState({});
  const { orderId: id } = useSelector((state) => state.orderId);
  const profileDetailsHandler =(profileId)=>{
    navigate(`/profile-data-locked/${profileId}`)
  }
  const getOrderDetail = async () => {
    try {
      const res = await orderDetail(id.orderId);
      const convertedResponse = {
        ...res.data,
        orderDate: convertDateToLocal(res.data.orderDate),
        orderItems: res.data.orderItems.map((item) => ({
          ...item,
          orderDate: convertDateToLocal(item.orderDate),
        })),
        paymentHistory: res?.data?.paymentHistory.map((payment) => ({
          ...payment,
          paymentDate: convertDateToLocal(payment.paymentDate),
          paymentTime: convertTimeToLocal(payment.paymentDate),
        })),
      };

      setDetail(convertedResponse);
    } catch (error) {}
  };
  useEffect(() => {
    initAxios();
    getOrderDetail();
  }, []);
  return (
    <>
      <Banner bannerTitle="Order Detail" classes="order-deatil"/>
      {detail && (
        <OrderItemList detail={detail} profileDetailsHandler={profileDetailsHandler} />
      )}
    </>
  );
};

export default OrderDetail;
