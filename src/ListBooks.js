/*  ListBooks.js
*   This component will render individual books with its template and its options
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    /** TODO: Add a method to control the list of books */
  static propTypes = {
    bookTitle: PropTypes.object.isRequired,
    bookId: PropTypes.object.isRequired,
    bookImage: PropTypes.object.isRequired,
    bookAuthor: PropTypes.object.isRequired
  }
  render() {
    const { books } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.bookImage})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{books.bookTitle}</div>
          <div className="book-authors">{books.bookAuthor}</div>
        </div>
      </li>
    )
  }
}

export default Book
