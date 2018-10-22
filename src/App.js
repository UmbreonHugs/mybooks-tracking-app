import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import { Route, Link, withRouter } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {
    this.fetchBooks();
  }
  fetchBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({books: books}))
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
    BooksAPI.getAll().then((books) => this.fetchBooks())
    this.props.history.push('/');
    console.log(`successs! ${book} & ${shelf}`)
    })
  }
  render() {
    return (
      <div className="app">
        <div class="message-success">
          The book has been removed from your library!
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
                <BookShelf books={this.state.books} updateShelf={this.updateShelf}/>
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
