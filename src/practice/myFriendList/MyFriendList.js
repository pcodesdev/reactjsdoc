import React from "react";
import "./friendList.css";

function MyFriendList() {
  const friends = [
    { name: "Peter", age: 25, id: 1 },
    { name: "james", age: 34, id: 2 },
    { name: "Hannah", age: 70, id: 3 },
  ];
  return (
    <div className="friend__list">
      {friends.map((friend) => (
        <ul key={friend.id}>
          <li>{friend.name}</li>
          <p>{friend.age}</p>
        </ul>
      ))}
    </div>
  );
}

export default MyFriendList;
