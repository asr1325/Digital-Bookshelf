import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [addedBooks, setAddedBooks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://openlibrary.org/search.json?q=${query}`)
      .then((response) => {
        setResults(response.data.docs);
      })
      .catch((error) => {
        console.error('Error fetching data from Open Library API', error);
      });
  }

  function handleAddBook(book) {
    const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null;
    const email = localStorage.getItem('email'); 
  
    axios.post('http://localhost:3000/books', {
      title: book.title,
      author: book.author_name,
      cover: { medium: coverUrl },
      email, 
    })
    .then((response) => {
      setAddedBooks((prevBooks) => [...prevBooks, response.data]);
    })
    .catch((error) => {
      console.error('Error adding book to database:', error);
    });
  }
  

  function coverAPI(book) {
    const coverId = book.cover_i;
    return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null;
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='searchbar'>
          <input
            type="text"
            placeholder='Search a book, author or ISBN code'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='btnn' type='submit'>
            Search <span className='icon'><SearchOutlinedIcon /></span>
          </button>
        </form>
      </div>

      <div className="result">
        {results.map((book) => (
          <div key={book.key}>
            <p>{book.title}</p>
            <br />
            {coverAPI(book) && <img src={coverAPI(book)} alt={`${book.title} cover`} />}
            <div className="btns">
            <button onClick={() => handleAddBook(book)}>Add To My Books</button>
            </div>
          </div>
        ))}

        
      </div>
    </>
  );
}

export default Search;
