import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router'; // Import Router from react-router
import './App.css';
import ImageArea from './components/ImageArea';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';

function App() {
  const [query, setQuery] = useState('Random');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <Router>
      <SearchBar onSearch={handleSearch} />
      <Navigation />

      <Routes>
        <Route path="/Mountain" element={<ImageArea query="Mountain" />} />
        <Route path="/Beaches" element={<ImageArea query="Beaches" />} />
        <Route path="/Birds" element={<ImageArea query="Birds" />} />
        <Route path="/Food" element={<ImageArea query="Food" />} />
        <Route path="/" element={<ImageArea query={query} />} />
        <Route path="*" element={<h1>404 Page not found</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
