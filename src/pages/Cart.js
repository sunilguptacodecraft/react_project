import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart, buyNow,removeCart } from "../services/cart";
import { setBuyingDetails, setCartInfo } from "../store/buyingDetails-slice";
import { useErrorHandler } from "../hooks";
import Banner from '../components/Layout/Banner'

const Cart = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [cartDetails, setCartDetails] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const {verifyErrorMsg} = useErrorHandler()

  const buyNowHandler = async () => {
    if (user) {
      let payload = { 
        userId: user.userID,
        cartId:cartDetails.cartId
       };
      try {
        let res = await buyNow(payload);
        dispatch(setBuyingDetails({details:res.data}))
        navigate('/billing-information')
      } catch (error) {}
    } else {
      navigate("/login");
    }
  };

  const getCartItems = async () => {
    if (user) {
      let payload = { userID: user.userID };
      try {
        let res = await getCart(payload.userID);
        setCartDetails(res.data);
        dispatch(setCartInfo(res.data))

      } catch (error) {
        verifyErrorMsg(error)
      }

    } else {
      navigate("/login");
    }
  };
  const removeCartHandler =async(profileID)=>{
    try {
       let payload = {
          userID: user.userID,
          profileID,
        }
       await removeCart(payload)
       const filteredItem=cartDetails?.cartItems.filter(item => item.profileID !== payload.profileID)
       setCartDetails({...cartDetails,cartItems:filteredItem})
       
    } catch (error) {
      verifyErrorMsg(error)
    }
 }

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
 
      <Banner bannerTitle="Cart" classes="cart"/>
      <section>
        <div className="container">
          <div className="row mt-4 ">
            <div className="col-lg-12">
              <div className="wrapings-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="childex-wrap">
                      <div className="cart-bocx">
                        <h2 className="num-cart active">1</h2>
                      </div>
                      <div className="cart-txt">
                        <h2 className="carts-text active">Customer Order</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="childex-wrap">
                      <div className="cart-bocx">
                        <h2 className="num-cart">2</h2>
                      </div>
                      <div className="cart-txt">
                        <h2 className="carts-text">Billing Details</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {" "}
                    <div className="childex-wrap">
                      <div className="cart-bocx">
                        <h2 className="num-cart">3</h2>
                      </div>
                      <div className="cart-txt">
                        <h2 className="carts-text">Payment</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-data">
                <div className="order-wraprs">
                  <div className="order-s">
                    <h2 className="order-txt">Order item</h2>
                  </div>
                  {/* <div className="order-child">
                    <h2 className="edit_txt">
                      <span className="edit-icon">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </span>
                      &nbsp; &nbsp; Edit shopping cart
                    </h2>
                  </div> */}
                </div>
                <ul className="order-ul">
                  {cartDetails &&
                   cartDetails?.cartItems.map((item, index) => (
                      <div key={index}>
                        <li>
                          {" "}
                          <div className="mains-order">
                            <div className="order-user-d">
                              <div className="wraper-img">
                                <div className="border p-2 roundeds">
                                  <div className="order-imgs">
                                    <img
                                      src={item.imagePath}
                                      alt=""
                                      className="rounded"
                                    />
                                  </div>
                                </div>
                                <div className="users-names">
                                  <h3 className="order-names">
                                    {item.profileName}
                                  </h3>
                                  <h3 className="name-dres">
                                    {item.countryName}
                                  </h3>
                                </div>
                              </div>
                            </div>
                            
                            <div className="wrap-prices">
                            <h2 className="order-price ">
                                {item.currency} {item.actualPrice}
                                
                              </h2>
                            </div>
                           <span className='cross-button2' type='button' onClick={()=>removeCartHandler(item.profileID)}>
                           <span class="close" style={{fontSize:'34px', fontWeight:200}}>&times;</span>
                           </span>
                          </div>
                        </li>
                        <hr />
                      </div>
                    ))}
                </ul>
              </div>
            </div>
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
                        <h2 className="tota-price"> {cartDetails?.currency} {cartDetails?.subTotal}</h2>
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
                        <h2 className="tota-price">{cartDetails?.currency} {cartDetails?.discount}</h2>
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
                      <h2 className="tota-price"> {cartDetails?.currency} {cartDetails?.total}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-to-favorite">
                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-one search-text  "
                  onClick={buyNowHandler}
                >
                  Buy Now <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
