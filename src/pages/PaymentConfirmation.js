import React from "react";
import { useSelector } from "react-redux";
import { convertDateToLocal } from "../helper-functions/dateConversion";
import Banner from "../components/Layout/Banner";
const PaymentConfirmation = () => {
  const { paymentConfirmDetail } = useSelector((state) => state.buyingDetails);
  return (
    <div>
      <Banner bannerTitle="Payment Status" classes="payment-recieved " />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 bg-data">
              <div className="col-lg-9 mx-auto">
                <div className="check-boxs">
                  <span className={`${paymentConfirmDetail.status === "Success"? "check-icon":"error-icon"}`}>
                    <i
                      className={`fa fa-${
                        paymentConfirmDetail.status === "Success"
                          ? "check"
                          : "times"
                      }`}
                      // style={
                      //   paymentConfirmDetail.status === "Success"
                      //     ? { border: "5px solid red", color: "red" }
                      //     : {}
                      // }
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <h2 className="payment-txt">Payment Received</h2>
                <h3 className="payent-cont">
                  {paymentConfirmDetail.status === "Success"
                    ? `We’ve received your $${paymentConfirmDetail.amount} payment, Jacob Jones.`
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error distinctio incidunt similique dolorum necessitatibus et, in dolorem ducimus reprehenderit."}
                </h3>

                <hr style={{ margin: "5px 0px" }} />
                <h2 className="payment-txt">Payment Details</h2>

                <ul className="details-pay">
                  <li>
                    {" "}
                    <div className="covers-li">
                      <div className="contstxt">
                        <h2 className="first-deailed">Payment amount</h2>
                      </div>
                      <div className="conts">
                        <h2 className="last-deailed">
                          ${paymentConfirmDetail.amount}
                        </h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="covers-li">
                      <div className="contstxt">
                        <h2 className="first-deailed">Payment Date</h2>
                      </div>
                      <div className="conts">
                        <h2 className="last-deailed">
                          {convertDateToLocal(paymentConfirmDetail.paymentDate)}
                        </h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="covers-li">
                      <div className="contstxt">
                        <h2 className="first-deailed">Payment Method</h2>
                      </div>
                      <div className="conts">
                        <h2 className="last-deailed">Bank Account “9026”</h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                  {paymentConfirmDetail.status !== "Success" &&  <div className="covers-li">
                      <div className="contstxt">
                        <h2 className="first-deailed">Confirmation</h2>
                      </div>
                      <div className="conts">
                        <h2 className="last-deailed">1RSTGO-5B</h2>
                      </div>
                    </div>}
                  </li>
                </ul>
                <hr style={{ margin: "5px 0px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentConfirmation;
