import MyApp from "./practice/myapp/MyApp";
import MyButton from "./practice/mybutton/MyButton";
import MySelf from "./practice/aboutMyself/mySelf";
import ConditionalRender from "./practice/conditionalRendering/ConditionalRender";
import MyFriendList from "./practice/myFriendList/MyFriendList";

function App() {
  return (
    <div className="App">
      <MyApp />
      <MyButton /> {/* Nested MyButton component */}
      <MySelf />
      <ConditionalRender />
      <MyFriendList />
    </div>
  );
}

export default App;
