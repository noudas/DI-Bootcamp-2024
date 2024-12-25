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
import Example3 from './components/Example3';
import { useEffect } from 'react';


const webHookTest = async () => {
  const url = "https://webhook.site/50a677ad-60fe-4a36-8333-2bf5522dcdea";  // Replace with your unique URL
  const data = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify(data);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
      mode: 'no-cors',
    });

    if (response.ok) {
      const result = await response.json();
      console.log("This is the result:", result);
    } else {
      // I dont know why, it posts then sends the error....
      console.error('Error: Response was not OK', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error in fetch operation:', error.message);
  }
};


function App() {
  useEffect(() =>{
    webHookTest();
  },[])
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
                <Example3 info={Dat}/>
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
