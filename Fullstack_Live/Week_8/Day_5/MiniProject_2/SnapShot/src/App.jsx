import { useState } from 'react'
import './App.css'
import ImageArea from './components/ImageArea'
import SearchBar from './components/SearchBar'

function App() {

  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) =>{
    setQuery(searchQuery);
  }


  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <ImageArea query={query}/>
    </>
  )
}

export default App
