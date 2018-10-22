/*  BookShelf.js
*   This component will render the book shelf, which will render the individual books
*   via ListBooks.JS
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './ListBooks'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  render() {
    const { books, updateShelf } = this.props
    let readBooks, currentlyReading, wantToRead
    currentlyReading = books.filter((books) => books.shelf === 'currentlyReading' )
    wantToRead = books.filter((books) => books.shelf === 'wantToRead' )
    readBooks = books.filter((books) => books.shelf === 'read' )
    return (
        /** TODO: Make the shelves a functional code and seperate them via blocks */
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {currentlyReading.map((books) => (
              <Book books={books} currentShelf="currentlyReading" updateShelf={updateShelf} />
            ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {wantToRead.map((books) => (
                <Book books={books} currentShelf="wantToRead" updateShelf={updateShelf} />
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {readBooks.map((books) => (
                <Book books={books} currentShelf="read" updateShelf={updateShelf} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default BookShelf
