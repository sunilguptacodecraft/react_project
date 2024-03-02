import React from 'react'
import order from "../assets/images/shape/puser-user-1.png";
import successStatus from "../assets/images/shape/success.png"
import pendingStatus from "../assets/images/shape/pending.png"
import failureStatus from "../assets/images/shape/failure.png"

const OrderItemList = ({detail, profileDetailsHandler}) => {
  return (
    <>
     <section className=".history-bg">
          <div className="container mt-70 mb-70">
            <div className="row">
              <div className="col-lg-4">
                <div className="idorder">
                  <h2 className="idnumber">{detail.orderReference}</h2>
                  <div className="boder-botom"></div>
                  <div className="cover1">
                    <div className="sdiv">
                      <h2 className="dates">Order Date</h2>
                    </div>
                    <div className="adiv">
                      <h2 className="datetime">{detail.orderDate}</h2>
                    </div>
                  </div>
                  <div className="boder-botom"></div>
                  <div className="heading-note">
                    <h2 className="headingtxtx">Notes</h2>
                    <div className="txt-p">{detail.userComments}</div>
                  </div>
                  <div className="boder-botom"></div>
                  <div className="cover2">
                    <div className="sdiv">
                      <h2 className="txx1">Name</h2>
                    </div>
                    <div className="ysdiv">
                      <h2 className="tyy1">
                        {detail?.orderBillingInfo?.contactPerson}
                      </h2>
                    </div>
                  </div>
                  <div className="cover2">
                    <div className="sdiv">
                      <h2 className="txx1">Contact No.</h2>
                    </div>
                    <div className="ysdiv">
                      <h2 className="tyy1">
                        {detail?.orderBillingInfo?.contactNo}
                      </h2>
                    </div>
                  </div>
                  <div className="cover2">
                    <div className="sdiv">
                      <h2 className="txx1">Email</h2>
                    </div>
                    <div className="ysdiv">
                      <h2 className="tyy1">
                        {detail?.orderBillingInfo?.email}
                      </h2>
                    </div>
                  </div>
                  <div className="cover2">
                    <div className="sdiv">
                      <h2 className="txx1">Address</h2>
                    </div>
                    <div className="ysdiv">
                      <h2 className="tyy1">
                        {detail?.orderBillingInfo?.address}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="idorder1">
                  <div className="coverd1">
                    <div className="scover">
                      <div className="sdu">
                        <h2 className="uxty">Name</h2>
                      </div>
                    </div>
                    <div className="ucover">
                      <div className="sdu">
                        <h2 className="uxty">Order Date</h2>
                      </div>
                    </div>
                    <div className="vcover">
                      <div className="sdu">
                        <h2 className="uxty">Price</h2>
                      </div>
                    </div>
                    <div className="wcover">
                      <div className="sdu">
                        <h2 className="uxty">Type</h2>
                      </div>
                    </div>
                  </div>
                  <div className="border-bot1"></div>
                  {detail?.orderItems?.map((item, index) => (
                    <div className="orditmdtl" key={index}>
                      <div className="scover">
                        <div className="sdu">
                          <div className="wrapingsx">
                            <div className="udeail cursor-pointer" onClick={()=>profileDetailsHandler(item.profileId)} style={{cursor:"pointer"}}>
                              <img src={order} alt="" />
                            </div>
                            <div className="uxname">
                              <h2 className="uxty">{item.profileName}</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ucover">
                        <div className="sdu">
                          <h2 className="uxty">{item.orderDate}</h2>
                        </div>
                      </div>
                      <div className="vcover">
                        <div className="sdu">
                          <h2 className="uxty">
                            {detail.currency}
                            {item.netAmount}
                          </h2>
                        </div>
                      </div>
                      <div className="wcover">
                        <div className="sdu">
                          <h2 className="uxty">{item.itemType}</h2>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="border-bot3"></div>
                  <div className="coverd1">
                    <div className="scover">
                      <div className="sdu">
                        <div className="wrapingsx">
                          <div className="udeail">
                            <h2 className="uxty">Status</h2>
                          </div>
                          <div className="uxname">
                            {/* <img
                              src="./assets/images/shape/checkstatus.png"
                              alt=""
                            /> */}
                            {
                              detail.orderStatus === "Completed" && <span style={{color: "white",
                                background: "#58bf58",
                                borderRadius: "30px",
                                padding: "4px 7px",
                                marginBottom: "7px",
                                display: "inline-block"}}>{detail.orderStatus}</span>
                            } 
                            {
                              detail.orderStatus === "Pending" && <span style={{color: "white",
                              background: "#e1db27",
                              borderRadius: "30px",
                              padding: "4px 7px",
                              marginBottom: "7px",
                              display: "inline-block"}}>{detail.orderStatus}</span>
                            } 
                            {
                              detail.orderStatus === "Failed" && <span style={{color: "white",
                              background: "#fd3001",
                              borderRadius: "30px",
                              padding: "4px 7px",
                              marginBottom: "7px",
                              display: "inline-block"}}>{detail.orderStatus}</span>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xcover" style={{ display: "none" }}>
                      <div className="sdu">
                        <div className="wrapingsx">
                          <div className="udeail">
                            <h2 className="uxty">Fulfilment</h2>
                          </div>
                          <div className="uxname">
                            <div className="dropdown custom-outline-btn">
                              <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="./assets/images/shape/half-img.png"
                                  alt=""
                                />{" "}
                                Partial
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    {" "}
                                    <img
                                      src="./assets/images/shape/half-img.png"
                                      alt=""
                                    />{" "}
                                    Partial
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    {" "}
                                    <img
                                      src="./assets/images/shape/half-img.png"
                                      alt=""
                                    />{" "}
                                    Partial
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    {" "}
                                    <img
                                      src="./assets/images/shape/half-img.png"
                                      alt=""
                                    />{" "}
                                    Partial
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xcover">
                      <div className="sdu">
                        <h2 className="uxty">
                          Total Amount :{" "}
                          <span>
                            {detail.currency} {detail.totalAmount}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="idorder1">
                  <h2 className="time-heading">Time Line</h2>
                  {detail?.paymentHistory?.map((item, index) => (
                    <div className="covers1" key={index}>
                      <div className="sudiv">
                        <div className="wrapingsxd">
                          <div className="success">
                            {
                              item.status === "Complete" && <img
                              src={successStatus}
                              alt=""
                            />
                            } {
                              item.status === "Pending" && <img
                              src={pendingStatus}
                              alt=""
                            />
                            } {
                              item.status === "Failed" && <img
                              src={failureStatus}
                              alt=""
                            />
                            }
                            
                          </div>
                          <div className="uxname">
                            <h2 className="uxty-heading">
                              {item.statusMessage}
                            </h2>
                            <h2 className="uxty">{item.paymentMethod}</h2>
                          </div>
                        </div>
                      </div>
                      <div className="sxsdiv">
                        <h2 className="uxty">
                          {item.paymentDate}{" "} 
                           :{" "}<span>{item.paymentTime}</span>
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default OrderItemList