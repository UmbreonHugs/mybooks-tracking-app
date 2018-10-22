/* ShelfChange.js
* This file will hold the functionality to change the shelves, and render
* the dropdown menu for each books
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChange extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    currentShelf: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  render() {
    const { book, updateShelf, currentShelf } = this.props
    return (
      <select onChange={(event) => updateShelf(book, event.target.value)} defaultValue={currentShelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}
export default ShelfChange
