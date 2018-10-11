/*  ListBooks.js
*   This component will render individual books with its template and its options
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    const {books} = this.props
    let showingBooks
    showingBooks = books
    return (
      showingBooks.map((books) => (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
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
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.author}</div>
        </div>
      </li>
      ))
    )
  }
}

export default Book
