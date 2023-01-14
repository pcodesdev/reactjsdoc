import React, { useState } from "react";
import MyButton from "../mybutton/MyButton";
import "./myapp.css"; // Imported css stylesheet

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="header">
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default MyApp;
