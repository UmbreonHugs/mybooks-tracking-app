import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import { Route, Link, withRouter } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
    showMessage: false,
    messageString: ""
  }
  componentDidMount() {
    this.fetchBooks();
  }
  fetchBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({books: books}))
  }
  // update shelf
  updateShelf = (updateBook, shelf) => {
    BooksAPI.update(updateBook, shelf).then(response => {
    // put the book in the shelf locally
    updateBook.shelf = shelf
    this.setState(state => ({
        books: state.books
          .filter(book => book.id !== updateBook.id)
          .concat([updateBook])
      }));
    // message handling
    if (shelf === 'none') {
      this.showMessage(`${updateBook.title} has been removed from the shelves!`)
    } else {
      this.showMessage(`${updateBook.title} has been moved to ${shelf}!`)
    }
    })
  }
  // see https://stackoverflow.com/a/42734261/2442104
  showMessage = (string) => {
    this.setState({showMessage: true, messageString: `${string}`})
    setTimeout(() => {
      this.setState({
        showMessage: false
      });
    }, 3000);
  }
  render() {
    return (
      <div className="app">
        <div className={`message-success ${this.state.showMessage ? 'show' : 'hidden'}`}>
          {this.state.messageString}
        </div>
        <Route path="/search" render={({ history }) => (
          <Search updateShelf={this.updateShelf} />
          )}/>
          <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf books={this.state.books} updateShelf={this.updateShelf} />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}
export default withRouter(BooksApp)
