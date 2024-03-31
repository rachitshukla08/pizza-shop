import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSortedOrders = () => {
  const orders = useSelector((store) => store.order.orderPlaced);
  const [sortedOrders, setSortedOrders] = useState([]);
  useEffect(() => {
    const sorted = [...orders].sort(
      (order1, order2) => order1.stageStartTime - order2.stageStartTime
    );
    setSortedOrders(sorted);
  }, [orders]);

  return sortedOrders;
};

export default useSortedOrders;
