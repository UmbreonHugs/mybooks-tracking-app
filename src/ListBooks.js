/*  ListBooks.js
*   This component will render individual books with its template and its options
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    bookTitle: PropTypes.object.isRequired,
    bookAuthor: PropTypes.object.isRequired,
    bookImage: PropTypes.object.isRequired
  }
  // if no image, replace with default
  render() {
    const { bookTitle, bookAuthor, bookImage } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
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
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{bookAuthor}</div>
        </div>
      </li>
    )
  }
}

export default Book
