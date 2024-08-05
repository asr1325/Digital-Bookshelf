import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(localStorage.getItem('email') || '');

  useEffect(() => {
    const fetchBooks = async () => {
      if (email) {
        try {
          const response = await axios.get(`http://localhost:3000/books/${email}`);
          setBooks(response.data);
          setError(null); 
        } catch (error) {
          setError('Error fetching books');
          console.error('Error fetching books:', error.response ? error.response.data : error.message);
        }
      } else {
        setError('No email found in localStorage');
        console.error('No email found in localStorage');
      }
    };

    fetchBooks();
  }, [email]); 

  function handleRemoveBook(bookId) {
    const email = localStorage.getItem('email');
  
    axios.delete(`http://localhost:3000/books/${email}/${bookId}`)
      .then(() => {
        setAddedBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
      })
      .catch((error) => {
        console.error('Error removing book from database:', error);
      });
  }

  return (
    <div className='books-container'>
      <h2 className='headingg'>My Books</h2>
      <br /><br /><br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='myBooks'>
        {books.map((book) => (
          <li key={book._id}>
            <p>{book.title}</p>
            {book.cover?.medium && <img src={book.cover.medium} alt={`${book.title} cover`} />}
            <button className='rem'  onClick={() => handleRemoveBook(book._id)}>Remove</button>
          </li>
        ))}
        </div>
    </div>
  );
}

export default UserBooks;
