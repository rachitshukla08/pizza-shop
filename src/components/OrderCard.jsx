import React from "react";
import { useState, useEffect } from "react";
import {
  MAX_TIME,
  MAX_TIME_SMALL,
  MAX_TIME_MEDIUM,
  MAX_TIME_LARGE,
} from "../data/pizzaInfo";

const OrderCard = ({ order, handleNextStage }) => {
  const handleClick = () => {
    handleNextStage(order.id);
  };

  const getOrderCardClass = (timeElapsed, order) => {
    if (order.stage === 1) {
      if (
        (order.size === "small" && timeElapsed > MAX_TIME_SMALL) ||
        (order.size === "medium" && timeElapsed > MAX_TIME_MEDIUM) ||
        (order.size === "large" && timeElapsed > MAX_TIME_LARGE)
      ) {
        return "bg-red order-card";
      }
      return "order-card";
    } else if (order.stage < 3) {
      if (timeElapsed > MAX_TIME) {
        return "bg-red order-card";
      }
    }
    return "order-card";
  };

  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const elapsedTime = Math.floor(
        (Date.now() - order.stageStartTime) / 1000
      );
      setTimeElapsed(elapsedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [order.stageStartTime]);

  return (
    <div className="order-card-container mt-2">
      <div className={getOrderCardClass(timeElapsed, order)}>
        <p className="text-m">Order: {order.id}</p>
        <p className="text-xsm mt-1"> {order.size}</p>
        {order.stage < 3 ? (
          <div>
            <p className="mt-2 text-sm">
              {Math.floor(timeElapsed / 60)} min {timeElapsed % 60} s
            </p>
            <button className="btn btn-small mt-2" onClick={handleClick}>
              Next
            </button>
          </div>
        ) : (
          <p className="text-sm mt-2">Picked</p>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
