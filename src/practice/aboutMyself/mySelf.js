import React from "react";
import "./myself.css";

const user = {
  name: "Hedy Lamarr",
  age: 30,
  gender: "female",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 120,
};

function MySelf() {
  return (
    <div className="myself">
      <div className="personal__detail">
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.gender}</p>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
        />
      </div>
    </div>
  );
}

export default MySelf;
