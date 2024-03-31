import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DisplayRow } from "./DisplayRow";
import { cancelOrder } from "../store/orderSlice";

const MainDisplay = () => {
  const totalOrdersDelivered = useSelector(
    (store) => store.order.ordersDelivered
  );
  const allOrders = useSelector((store) => store.order.orderPlaced);
  const stages = useSelector((store) => store.order.stages);
  const dispatch = useDispatch();

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="m-auto vw-80 mt-8 text-sm">
      <div>
        <table className="table m-auto">
          <thead className="text-m">
            <tr>
              <th>Order ID</th>
              <th>Stage</th>
              <th>Total time spent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => {
              return (
                <DisplayRow
                  key={order.id}
                  order={order}
                  stages={stages}
                  handleCancelOrder={handleCancelOrder}
                />
              );
            })}
          </tbody>
        </table>
        <p className="py-2 text-color-white">
          Total orders delivered: {totalOrdersDelivered}
        </p>
      </div>
    </div>
  );
};

export default MainDisplay;
