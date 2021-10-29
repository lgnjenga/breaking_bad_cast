import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search'
import './App.css';

const App = () => {

// React Hooks
// Whole App level State
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [query, setQuery] = useState('')

// useEffect hook to load data using axios
useEffect(() => {
  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    // // display data in browser console
    // console.log(result.data)
    // Set the data to items
    setItems(result.data)
    // Call after data is loaded
    setIsLoading(false)
  }
  // Call to fetch data and load it
  fetchItems();
}, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={ (q) => setQuery(q) } />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
