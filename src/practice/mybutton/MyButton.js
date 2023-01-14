import React from "react";

import "./mybutton.css";

function MyButton({ count, onClick }) {
  //handle click function
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div className="mybutton">
      {/* Any time the button is clicked a popup window appears with the message "you clicked me" */}
      <button
        onClick={handleClick}
        className="main-btn"
        style={{ margin: "3rem auto", padding: "0.5rem" }}
      >
        Click Here
      </button>
      {/* Any time the button is clicked the count value increases by 1" */}
      <button
        onClick={onClick}
        className="main-btn"
        style={{ margin: "3rem auto", padding: "0.5rem" }}
      >
        Clicked {count} times
      </button>
      {/* inline styles */}
    </div>
  );
}

export default MyButton;
