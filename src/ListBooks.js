/*  ListBooks.js
*   This component will render individual books with its template and its options
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChange from './ShelfChange'

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    currentShelf: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  // if no image, replace with default
  render() {
    const { books, updateShelf, currentShelf } = this.props
    // placeholder image for thumbnail
    let bookImage = books.imageLinks ?
    books.imageLinks.thumbnail : ""
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
            <div className="book-shelf-changer">
              <ShelfChange book={books} updateShelf={updateShelf} currentShelf={currentShelf} />
            </div>
          </div>
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.author}</div>
        </div>
      </li>
    )
  }
}

export default Book
