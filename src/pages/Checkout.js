import React from "react";
import { submitPaymentResponse } from "../services/billing";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPaymentDetails } from "../store/buyingDetails-slice";
import Banner from "../components/Layout/Banner";

const Checkout = () => {
  const { buyingDetails } = useSelector((state) => state.buyingDetails);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onPaymentSubmitHandler=async()=>{
    try {
     let res = await submitPaymentResponse({
        orderId: buyingDetails.details.orderId || 1001,
        referenceNumber: "this is dummy reference url"
      })
      dispatch(setPaymentDetails(res.data))
      navigate("/payment-confirmation")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Banner bannerTitle="PAYMENT GATEWAY" classes="data-search"/>
    <div className="text-center container">
      <h1>PAYMENT GATEWAY</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-primary btn-one search-text my-4"
        onClick={onPaymentSubmitHandler}
      >
        Payment<span></span>
      </button>
    </div>
        </>
  );
};

export default Checkout;
