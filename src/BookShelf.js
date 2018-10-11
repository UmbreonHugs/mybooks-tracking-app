/*  BookShelf.js
*   This component will render the book shelf, which will render the individual books
*   via ListBooks.JS
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default BookShelf
