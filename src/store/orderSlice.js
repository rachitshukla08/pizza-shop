import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    totalOrders: 0,
    inProgressOrders: 0,
    ordersDelivered: 0,
    orderPlaced: [],
    stages: ["Order Placed", "Order in Making", "Order Ready", "Order Picked"],
  },
  reducers: {
    addOrder: (state, action) => {
      state.totalOrders++;
      state.inProgressOrders++;
      const newOrder = {
        id: state.totalOrders + 100,
        ...action.payload,
      };
      state.orderPlaced.push(newOrder);
    },
    moveOrderToNextStage: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.orderPlaced.findIndex(
        (order) => order.id === orderId
      );
      const order = state.orderPlaced[orderIndex];

      if (order) {
        state.orderPlaced[orderIndex] = {
          ...order,
          stage: order.stage + 1,
          stageStartTime: Date.now(),
        };
        if (state.orderPlaced[orderIndex].stage === 3) {
          state.orderPlaced[orderIndex] = {
            ...order,
            stage: order.stage + 1,
            endTime: Date.now(),
          };
          state.inProgressOrders--;
          state.ordersDelivered++;
        }
      }
    },
    cancelOrder: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.orderPlaced.findIndex(
        (order) => order.id === orderId
      );
      const order = state.orderPlaced[orderIndex];
      if (order.stage >= 2) return;

      state.orderPlaced.splice(orderIndex, 1);
      state.inProgressOrders--;
    },
  },
});

export const { addOrder, moveOrderToNextStage, cancelOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
