import React from "react";
import { useState, useEffect } from "react";

const OrderCard = ({ order, handleNextStage }) => {
  const MAX_TIME = 180;

  const handleClick = () => {
    handleNextStage(order.id);
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
      <div
        className={
          timeElapsed > MAX_TIME && order.stage < 3
            ? "bg-red order-card"
            : "order-card"
        }
      >
        <p className="text-m">Order: {order.id}</p>
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
