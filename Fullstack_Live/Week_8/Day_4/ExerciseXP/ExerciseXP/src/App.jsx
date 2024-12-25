import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from './components/profile';
import Home from './components/home';
import ErrorBoundary from './components/ErrorBoundary';
import Shop from './components/Shop';
import Posts from './data/posts.json'
import PostList from './components/Postlist';
import Dat from './data/data.json'
import Example1 from './components/Example1';
import Example2 from './components/Example2';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">HOME</Link> <br></br>
          <Link to="/profile">PROFILE</Link><br></br>
          <Link to="/shop">SHOP</Link><br></br>
        </nav>
      </header>

        <section>
          <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
                {Posts.map((post,index) =>{
                  return <PostList key={index} info={post}/>
                })}
            </ErrorBoundary>} />
            <Route path="/profile" element={
              <ErrorBoundary>
                <Profile />
                <Example1 socialmedias={Dat.SocialMedias} />
                <Example2 info={Dat}/>
              </ErrorBoundary>
              } />
            <Route path="/shop" element={
              <ErrorBoundary>
                <Shop />
              </ErrorBoundary>
            } />
          </Routes>
        </section>
    </Router>
  );
}

export default App;
