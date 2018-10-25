/* ShelfChange.js
* This file will hold the functionality to change the shelves, and render
* the dropdown menu for each books
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChange extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string
  }

  render() {
    const { book, updateShelf, currentShelf } = this.props
    // if its blank, then it means there is none, set the default values
    let shelf
    if (currentShelf) {
      shelf = currentShelf
    } else {
      shelf = "none"
    }
    return (
      <select onChange={(event) => updateShelf(book, event.target.value)} value={shelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    )
  }
}
export default ShelfChange
