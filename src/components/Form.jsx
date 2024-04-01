import React from "react";
import { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import {
  availableBases,
  availableSizes,
  availableTypes,
  MAX_ORDERS,
} from "../data/pizzaInfo";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../store/orderSlice";

const Form = () => {
  const [order, setOrder] = useState({
    type: "",
    size: "",
    base: "",
    stage: 0,
    startTime: 0,
    stageStartTime: 0,
    endTime: 0,
  });
  const dispatch = useDispatch();

  const inProgressOrders = useSelector((store) => store.order.inProgressOrders);

  const handleRadioButtonChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inProgressOrders >= MAX_ORDERS) {
      alert("Not taking any orders for now");
      return;
    }
    setOrder({ ...order, stageStartTime: Date.now(), startTime: Date.now() });
  };

  useEffect(() => {
    if (order.startTime !== 0) {
      dispatch(addOrder(order));
    }
  }, [order.startTime, dispatch]);

  return (
    <div className="min-vh-80 d-flex align-center shadow-white">
      <form
        className="vw-80 bg-white border-sm py-3 px-2 text-align-left ml-10p 
        form-container d-flex flex-col gap-2 text-sm text-color-black"
        onSubmit={handleSubmit}
      >
        {inProgressOrders >= MAX_ORDERS ? (
          <p className="text-color-red text-xsm">
            &#9888; ORDER QUEUE IS FULL{" "}
          </p>
        ) : (
          ""
        )}
        <h1 className="text-l">Customise your pizza:</h1>
        <div className="d-flex flex-col gap-1">
          <p className="text-m">Pizza Type:</p>
          <div className="d-flex gap-sm">
            {availableTypes.map((availableType, i) => (
              <RadioButton
                key={"type" + i}
                meta={availableType}
                handleRadioButtonChange={handleRadioButtonChange}
              />
            ))}
          </div>
        </div>
        {/*  */}
        <div className="d-flex flex-col gap-1 radio-parent">
          <p className="text-m">Pizza Size:</p>
          <div className="d-flex gap-sm">
            {availableSizes.map((availableSize, i) => (
              <RadioButton
                key={"size" + i}
                meta={availableSize}
                handleRadioButtonChange={handleRadioButtonChange}
              />
            ))}
          </div>
        </div>
        {/*  */}
        <div className="d-flex flex-col gap-1">
          <p className="text-m">Pizza Base:</p>
          <div className="d-flex  gap-sm">
            {availableBases.map((availableBase, i) => (
              <RadioButton
                key={"base" + i}
                meta={availableBase}
                handleRadioButtonChange={handleRadioButtonChange}
              />
            ))}
          </div>
        </div>
        <div className="d-flex align-flex-end justify-space-between">
          <button className="btn order-btn mt-5" type="submit">
            ORDER
          </button>
          <button
            className="btn round-btn"
            type="button"
            onClick={() => {
              window.scrollTo({ top: 500, behavior: "smooth" });
            }}
          >
            &darr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
