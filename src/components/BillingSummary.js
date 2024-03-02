import React from 'react'
import { useNavigate } from "react-router-dom";


const BillingSummary = ({cartDetails}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-lg-4">
              <div className="bg-data">
                <div className="summarys">
                  <h2 className="order-txt">Summary</h2>
                  <h3 className="summary-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul className="order-summary">{
                  cartDetails && (
                    <>
                      <li>
                    {" "}
                    <div className="totals-wrap">
                      <div className="total-h">
                        <h2 className="subtotal">Subtotal</h2>
                      </div>
                      <div className="tota-price">
                        <h2 className="tota-price"> {cartDetails.currency} {cartDetails.subTotal}</h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="totals-wrap">
                      <div className="total-h">
                        <h2 className="subtotal">Discount</h2>
                      </div>
                      <div className="tota-price">
                        <h2 className="tota-price">{cartDetails.currency} {cartDetails.discount}</h2>
                      </div>
                    </div>
                  </li>
                    </>
                  )
                }</ul>

                <div className="total-bottom custom-hei-mar">
                  <hr />
                  <div className="totals-wrap">
                    <div className="total-h">
                      <h2 className="subtotal">Total</h2>
                    </div>
                    <div className="tota-price">
                      <h2 className="tota-price"> {cartDetails.currency} {cartDetails.total}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-to-favorite">
                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-one search-text  "
                  onClick={() => navigate("/billing-information")}
                >
                  Buy Now <span></span>
                </button>
              </div>
            </div>
    </>
  )
}

export default BillingSummary