import React from 'react';
import frame from "../../assets/images/Frame.png";


const OrdersPaginatedList = ({ data, currentPage, itemsPerPage,viewDetailHandler }) => {
  // Calculate the start and end indexes based on the current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const paginatedData = data?.slice(startIndex, endIndex);

  return (
    <div className="col-lg-12">
              {paginatedData &&
                paginatedData.map((item, index) => (
                  <div className="order-bgs" key={index}>
                    <div className="order-wrap">
                      <div className="xsd">
                        <img src={frame} alt="list" />
                      </div>
                      <div className="ssd">
                        <h2 className="oder-1">Order ID</h2>
                        <h2 className="oder-2">{item.orderReference}</h2>
                      </div>
                    </div>
                    <div className="order-detailed">
                      <div className="ssv">
                        <h2 className="txsvd">Order Date</h2>
                        <h2 className="txv">{item.orderDate}</h2>
                      </div>
                      <div className="ssv">
                        <h2 className="txsvd">Total Amount</h2>
                        <h2 className="txv">
                          {item.currency} {item.totalAmount}
                        </h2>
                      </div>
                      <div className="ssv">
                        <h2 className="txsvd">Status</h2>
                        <h2 className="txv">{item.orderStatus}</h2>
                      </div>
                      <div className="ssd">
                        <button
                          type="button"
                          className="btn btn-outline-secondary orderview"
                          onClick={() => viewDetailHandler(item.orderId)}
                        >
                          View Detail
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
  );
};

export default OrdersPaginatedList;
