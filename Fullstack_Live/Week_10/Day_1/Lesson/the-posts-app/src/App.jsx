import "./App.css";
import PostsList from "./features/posts/PostsList";
import UsersBox from "./features/users/UsersBox";

function App() {
  return (
    <>
      <h2>Posts List App</h2>
      <UsersBox/>
      <PostsList />
    </>
  );
}

export default App;
