import React from "react";
import Header from "./Header";
import Form from "./Form";
import Stages from "./Stages";
import MainDisplay from "./MainDisplay";

const Body = () => {
  return (
    <div>
      <div className="bg-pizza bg-tint ">
        <Header />
        <Form />
      </div>
      <Stages />
      <MainDisplay />
    </div>
  );
};

export default Body;
