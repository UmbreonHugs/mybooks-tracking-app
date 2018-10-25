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
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    mainBooks: PropTypes.object.isRequired
  }
  state = {
    query: '',
    result: [],
//    currentBooks: [],
    noResult: false
  }
  updateQuery = (event) => {
    const query = event.target.value;
    this.setState({ query })
    // check if something entered
      if (query) {
        BooksAPI.search(query).then(books => {
          if (books.length > 0) {
            // search and update the shelves for each book
            this.setState({result: books.map(book => {
              let bookFound = this.props.mainBooks.find(mainBook => mainBook.id === book.id)
              if (bookFound) {
                book.shelf = bookFound.shelf;
              }
              return book
            }), noResult: false })
           } else {
             // clear array
            this.setState({result: [], noResult: true })
           }
        })
      } else {
        // clear array if query is blank
        this.setState({result: []})
      }
  }
  render() {
    const { query, result, noResult } = this.state
/* this.state.query = search term */
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.updateQuery} />
          </div>
        </div>
        <div className="search-books-results">
          {result.length > 0 && (
            <div>
              <ol className="books-grid">
                  {result.map((books) =>
                    <Book books={books} updateShelf={this.props.updateShelf} currentShelf={books.shelf} key={books.id} />
                  )}
                </ol>
            </div>
            )}
            {noResult &&
              <p className="center">No books found</p>
            }
        </div>
      </div>
    )
  }
}

export default Search;
