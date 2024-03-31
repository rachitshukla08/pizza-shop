import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "./OrderCard";
import { moveOrderToNextStage } from "../store/orderSlice";
import useSortedOrders from "../utils/useSortedOrders";

const Stages = () => {
  const stages = useSelector((store) => store.order.stages);
  const orders = useSortedOrders();

  const dispatch = useDispatch();

  const handleNextStage = (orderId) => {
    dispatch(moveOrderToNextStage(orderId));
  };

  return (
    <div className="vw-80 m-auto mt-5 text-color-white overflow-scroll">
      <div className="grid col-4 vh-80 ">
        {stages.map((stage, i) => {
          return (
            <div className="px-2 py-3 stage-grid" key={i}>
              <div className="text-m">{stage.toUpperCase()}</div>
              {orders.map((order) => {
                if (order.stage === i) {
                  return (
                    <OrderCard
                      key={order.id}
                      order={order}
                      handleNextStage={handleNextStage}
                    />
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stages;
