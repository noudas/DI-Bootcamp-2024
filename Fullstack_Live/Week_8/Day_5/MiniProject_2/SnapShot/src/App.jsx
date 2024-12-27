import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import './App.css';
import ImageArea from './components/ImageArea';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';

function App() {
  const [query, setQuery] = useState('Random');

  return (
    <Router>
      <SearchBar onSearch={setQuery} />
      <Navigation />
      <RoutesWrapper query={query} setQuery={setQuery} />
    </Router>
  );
}

function RoutesWrapper({ query, setQuery }) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setQuery(searchParam);
    }
  }, [location.search, setQuery]);

  return (
    <Routes>
      <Route path="/Mountain" element={<ImageArea query="Mountain" />} />
      <Route path="/Beaches" element={<ImageArea query="Beaches" />} />
      <Route path="/Birds" element={<ImageArea query="Birds" />} />
      <Route path="/Food" element={<ImageArea query="Food" />} />
      <Route path="/search/:query" element={<ImageArea query={query} />} />
      <Route path="/" element={<ImageArea query={query} />} />
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
}

export default App;
