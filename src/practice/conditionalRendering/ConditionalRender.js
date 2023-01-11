import React from "react";
import MyButton from "../mybutton/MyButton";
import MyApp from "../myapp/MyApp";

function conditionalRender() {
  let isLoggedIn = true;
  return <div>{isLoggedIn ? <MyApp /> : <MyButton />}</div>;
}

export default conditionalRender;
