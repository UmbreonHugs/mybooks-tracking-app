/*  Search.js
*   This component will render the search page, as well as the functionality to
*   search for books within the API
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './ListBooks'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  /** TODO: Make the search input functional */
  state = {
    query: '',
    result: []
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim()})
      if (query) {
        BooksAPI.search(query.trim(), 20).then(books => this.setState({result: books}))
      }
  }
  render() {
    const { query, result } = this.state
/* this.state.query = search term */
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {  /** TODO: Populate the book results first before filtering */}

            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {result.map(book =>
              <Book bookTitle={book.title} bookAuthor={book.author} bookImage={book.imageLinks.thumbnail} bookId={book.id} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
