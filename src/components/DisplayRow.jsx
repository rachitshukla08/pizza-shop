import React, { useEffect, useState } from "react";

export const DisplayRow = ({ order, stages, handleCancelOrder }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - order.startTime) / 1000);
      setTimeElapsed(elapsedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [order.startTime]);

  const handleClick = () => {
    handleCancelOrder(order.id);
  };

  const getDuration = () => {
    return Math.floor((order.endTime - order.startTime) / 1000);
  };

  return (
    <tr className="table-row">
      <td>{order.id}</td>
      <td>{stages[order.stage]}</td>
      <td>
        {order.stage < 3 ? (
          <>
            {Math.floor(timeElapsed / 60)} min {timeElapsed % 60} s
          </>
        ) : (
          <>
            {Math.floor(getDuration() / 60)} min {getDuration() % 60} s
          </>
        )}
      </td>
      <td>
        {order.stage < 2 ? (
          <button className="btn btn-small" onClick={handleClick}>
            Cancel
          </button>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};
